<script lang="ts">
  import { lang } from '$lib/i18n/lang.svelte';
  import { ui } from '$lib/i18n/strings';

  let label = $derived(ui[lang.current].back);
</script>

<a
  href="/"
  class="inline-flex min-h-[44px] items-center gap-1 rounded-lg px-2 py-2 -ml-2
         text-base font-medium text-brand-700
         hover:text-brand-900 hover:underline
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
>
  <span aria-hidden="true">←</span>
  <span>{label}</span>
</a>
