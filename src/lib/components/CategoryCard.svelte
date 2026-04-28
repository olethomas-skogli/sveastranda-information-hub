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
  let isExternal = $derived(Boolean(category.externalUrl));
  let href = $derived(category.externalUrl ?? `/${category.slug}`);
</script>

<a
  {href}
  target={isExternal ? '_blank' : undefined}
  rel={isExternal ? 'noopener noreferrer' : undefined}
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
  {#if isExternal}
    <svg
      aria-hidden="true"
      class="absolute right-2.5 top-2.5 h-3.5 w-3.5 text-stone-400 transition-colors group-hover:text-brand-500"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 9L9 3" />
      <path d="M4 3H9V8" />
    </svg>
  {/if}
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
