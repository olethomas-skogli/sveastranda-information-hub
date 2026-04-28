<script lang="ts">
  import { categories } from '$lib/data/categories';
  import CategoryCard from '$lib/components/CategoryCard.svelte';
  import { lang } from '$lib/i18n/lang.svelte';
  import { ui } from '$lib/i18n/strings';

  let strings = $derived(ui[lang.current]);
</script>

<svelte:head>
  <title>Sveastranda Camping</title>
  <meta
    name="description"
    content="Praktisk informasjon for gjester på Sveastranda Camping."
  />
</svelte:head>

<section class="space-y-6">
  <p class="text-center text-sm font-medium uppercase tracking-[0.18em] text-brand-500">
    {strings.tagline}
  </p>

  <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
    {#each categories as category, i}
      <CategoryCard
        {category}
        fullSpanMobile={categories.length % 2 === 1 && i === categories.length - 1}
      />
    {/each}
  </div>
</section>
