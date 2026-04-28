<script lang="ts">
  import type { Category } from '$lib/i18n/types';
  import { lang } from '$lib/i18n/lang.svelte';

  interface Props {
    category: Category;
    /** When true, the card spans both columns on mobile (used for the lone last card). */
    fullSpanMobile?: boolean;
  }

  let { category, fullSpanMobile = false }: Props = $props();

  let title = $derived(category.title[lang.current]);
</script>

<a
  href="/{category.slug}"
  class="group relative flex items-center justify-center gap-2
         overflow-hidden rounded-2xl bg-white p-4 text-center
         ring-1 ring-stone-200 shadow-sm transition
         hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-300
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500
         active:translate-y-0 active:shadow-sm
         {fullSpanMobile
    ? 'col-span-2 aspect-[2.4/1] flex-row gap-4 text-left sm:col-span-1 sm:aspect-square sm:flex-col sm:gap-2 sm:text-center'
    : 'aspect-square flex-col'}"
>
  <span
    class="text-4xl leading-none sm:text-5xl"
    aria-hidden="true"
  >{category.emoji}</span>
  <span
    class="font-display text-sm font-semibold leading-tight text-brand-ink
           [text-wrap:balance] sm:text-base lg:text-lg"
  >
    {title}
  </span>
</a>
