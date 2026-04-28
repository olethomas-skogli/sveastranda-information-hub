<script lang="ts">
  import '../app.css';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  import { lang } from '$lib/i18n/lang.svelte';
  import { ui } from '$lib/i18n/strings';
  import { onMount } from 'svelte';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  onMount(() => {
    lang.init();
  });

  $effect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang.current;
    }
  });

  let strings = $derived(ui[lang.current]);
</script>

<div class="flex min-h-dvh flex-col">
  <header class="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
    <div class="mx-auto flex max-w-screen-sm items-center justify-between gap-3 px-4 py-3 md:max-w-screen-md">
      <a
        href="/"
        class="flex items-center focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-brand-500 rounded-md"
        aria-label="Sveastranda Camping"
      >
        <img
          src="/logo.png"
          alt="Sveastranda Camping"
          width="168"
          height="37"
          class="h-9 w-auto sm:h-10"
        />
      </a>
      <LanguageSwitcher />
    </div>
  </header>

  <main
    class="mx-auto w-full max-w-screen-sm flex-1 px-4 py-6 md:max-w-screen-md"
    style="padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));"
  >
    {@render children?.()}
  </main>

  <footer class="border-t border-stone-200 bg-white">
    <div
      class="mx-auto max-w-screen-sm px-4 py-4 text-sm text-stone-600 md:max-w-screen-md"
      style="padding-bottom: calc(1rem + env(safe-area-inset-bottom));"
    >
      <p class="font-display font-semibold text-brand-ink">{strings.footerContact}</p>
      <p class="mt-1">
        <a
          href="mailto:resepsjon@sveastranda.no"
          class="text-brand-700 hover:underline"
        >{strings.footerEmail}</a>
      </p>
      <p>
        <a
          href="tel:+4761181529"
          class="text-brand-700 hover:underline"
        >{strings.footerPhone}</a>
      </p>

      <p class="mt-4 font-display font-semibold text-brand-ink">
        {strings.footerFollowUs}
      </p>
      <div class="mt-2 flex items-center gap-2">
        <a
          href="https://www.facebook.com/Sveastranda"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-100
                 text-stone-700 transition
                 hover:bg-brand-500 hover:text-white
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="currentColor"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.626h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/sveastrandacamping/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-100
                 text-stone-700 transition
                 hover:bg-brand-500 hover:text-white
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</div>
