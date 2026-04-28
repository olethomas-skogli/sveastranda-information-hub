<script lang="ts">
  import type { Block, ListItem } from '$lib/i18n/types';

  interface Props {
    blocks: Block[];
  }

  let { blocks }: Props = $props();

  function isComplexItem(item: ListItem): item is { text: string; sub: string[] } {
    return typeof item !== 'string';
  }
</script>

<div class="space-y-5 text-base leading-relaxed">
  {#each blocks as block}
    {#if block.kind === 'heading'}
      <h2 class="mt-2 font-display text-lg font-semibold text-brand-ink sm:text-xl">
        {block.text}
      </h2>
    {:else if block.kind === 'paragraph'}
      <p class="text-stone-700">{block.text}</p>
    {:else}
      <ul class="list-disc space-y-2 pl-5 text-stone-700 marker:text-brand-500">
        {#each block.items as item}
          {#if isComplexItem(item)}
            <li>
              <span>{item.text}</span>
              <ul class="mt-1 list-[circle] space-y-1 pl-5 marker:text-stone-400">
                {#each item.sub as sub}
                  <li>{sub}</li>
                {/each}
              </ul>
            </li>
          {:else}
            <li>{item}</li>
          {/if}
        {/each}
      </ul>
    {/if}
  {/each}
</div>
