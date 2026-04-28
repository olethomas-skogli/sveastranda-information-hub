<script lang="ts">
  import { page } from '$app/state';
  import { lang } from '$lib/i18n/lang.svelte';
  import { ui } from '$lib/i18n/strings';

  let strings = $derived(ui[lang.current]);
</script>

<div class="space-y-4 text-center">
  <p class="text-6xl">🤔</p>
  <p class="text-lg text-stone-700">{page.status} — {strings.notFound}</p>
  <a href="/" class="inline-block rounded-lg bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-600">
    {strings.notFoundLink}
  </a>
</div>
