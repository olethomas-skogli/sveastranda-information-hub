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
    <div class="mx-auto flex max-w-screen-sm items-center justify-between gap-3 px-4 py-3">
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
    class="mx-auto w-full max-w-screen-sm flex-1 px-4 py-6"
    style="padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));"
  >
    {@render children?.()}
  </main>

  <footer class="border-t border-stone-200 bg-white">
    <div
      class="mx-auto max-w-screen-sm px-4 py-4 text-sm text-stone-600"
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
    </div>
  </footer>
</div>
