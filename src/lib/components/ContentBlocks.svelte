<script lang="ts">
  import type { Block, ListItem } from '$lib/i18n/types';

  interface Props {
    blocks: Block[];
  }

  let { blocks }: Props = $props();

  function isComplexItem(item: ListItem): item is { text: string; sub: string[] } {
    return typeof item !== 'string';
  }

  type Segment = { kind: 'text'; value: string } | { kind: 'link'; label: string; href: string };

  // Parse markdown-style inline links: [label](https://example.com)
  const LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

  function parseInline(text: string): Segment[] {
    const segments: Segment[] = [];
    let cursor = 0;
    for (const match of text.matchAll(LINK_PATTERN)) {
      const start = match.index ?? 0;
      if (start > cursor) segments.push({ kind: 'text', value: text.slice(cursor, start) });
      segments.push({ kind: 'link', label: match[1], href: match[2] });
      cursor = start + match[0].length;
    }
    if (cursor < text.length) segments.push({ kind: 'text', value: text.slice(cursor) });
    return segments;
  }
</script>

{#snippet inline(text: string)}
  {#each parseInline(text) as seg}
    {#if seg.kind === 'link'}
      <a
        href={seg.href}
        target="_blank"
        rel="noopener noreferrer"
        class="font-medium text-brand-700 underline decoration-brand-300 decoration-2 underline-offset-4
               hover:text-brand-900 hover:decoration-brand-500
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm"
      >{seg.label}</a>
    {:else}
      {seg.value}
    {/if}
  {/each}
{/snippet}

<div class="space-y-5 text-base leading-relaxed">
  {#each blocks as block}
    {#if block.kind === 'heading'}
      <h2 class="mt-2 font-display text-lg font-semibold text-brand-ink sm:text-xl">
        {block.text}
      </h2>
    {:else if block.kind === 'paragraph'}
      <p class="text-stone-700">{@render inline(block.text)}</p>
    {:else}
      <ul class="list-disc space-y-2 pl-5 text-stone-700 marker:text-brand-500">
        {#each block.items as item}
          {#if isComplexItem(item)}
            <li>
              <span>{@render inline(item.text)}</span>
              <ul class="mt-1 list-[circle] space-y-1 pl-5 marker:text-stone-400">
                {#each item.sub as sub}
                  <li>{@render inline(sub)}</li>
                {/each}
              </ul>
            </li>
          {:else}
            <li>{@render inline(item)}</li>
          {/if}
        {/each}
      </ul>
    {/if}
  {/each}
</div>
