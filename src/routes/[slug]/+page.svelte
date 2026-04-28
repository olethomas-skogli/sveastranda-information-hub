<script lang="ts">
  import BackLink from '$lib/components/BackLink.svelte';
  import ContentBlocks from '$lib/components/ContentBlocks.svelte';
  import { lang } from '$lib/i18n/lang.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  let title = $derived(data.category.title[lang.current]);
  let blocks = $derived(data.category.blocks[lang.current]);
</script>

<svelte:head>
  <title>{title} — Sveastranda Camping</title>
</svelte:head>

<article class="space-y-6">
  <BackLink />

  <header class="flex items-center gap-3">
    <span class="text-4xl sm:text-5xl" aria-hidden="true">{data.category.emoji}</span>
    <h1 class="font-display text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
      {title}
    </h1>
  </header>

  <ContentBlocks {blocks} />
</article>
