<script lang="ts">
  import { lang } from '$lib/i18n/lang.svelte';
  import { ui, flagFor } from '$lib/i18n/strings';
  import { LANGS, type Lang } from '$lib/i18n/types';

  let open = $state(false);
  let buttonEl = $state<HTMLButtonElement | null>(null);
  let menuEl = $state<HTMLDivElement | null>(null);

  let current = $derived(lang.current);
  let strings = $derived(ui[current]);

  function toggle() {
    open = !open;
  }

  function pick(code: Lang) {
    lang.set(code);
    open = false;
    buttonEl?.focus();
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open) {
      open = false;
      buttonEl?.focus();
    }
  }

  function onPointerDown(e: PointerEvent) {
    if (!open) return;
    const target = e.target as Node;
    if (menuEl?.contains(target) || buttonEl?.contains(target)) return;
    open = false;
  }
</script>

<svelte:window onkeydown={onKeydown} onpointerdown={onPointerDown} />

<div class="relative">
  <button
    bind:this={buttonEl}
    type="button"
    onclick={toggle}
    aria-haspopup="listbox"
    aria-expanded={open}
    aria-label={strings.chooseLang}
    class="flex min-h-[40px] items-center gap-1.5 rounded-full bg-white px-3 py-1.5
           text-sm font-semibold text-brand-700 ring-1 ring-stone-200 shadow-sm
           transition hover:bg-brand-50 hover:ring-brand-300
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500
           active:scale-[0.98]"
  >
    <span class="text-base leading-none" aria-hidden="true">{flagFor[current]}</span>
    <span class="uppercase tracking-wide">{current}</span>
    <svg
      aria-hidden="true"
      class="h-3.5 w-3.5 text-stone-500 transition-transform {open ? 'rotate-180' : ''}"
      viewBox="0 0 12 8"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M1 1.5L6 6.5L11 1.5" />
    </svg>
  </button>

  {#if open}
    <div
      bind:this={menuEl}
      role="listbox"
      aria-label={strings.chooseLang}
      class="absolute right-0 z-30 mt-2 min-w-[10rem] overflow-hidden
             rounded-xl bg-white p-1 shadow-lg ring-1 ring-stone-200"
    >
      {#each LANGS as code}
        {@const active = current === code}
        <button
          type="button"
          role="option"
          aria-selected={active}
          onclick={() => pick(code)}
          class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5
                 text-left text-sm font-medium transition
                 focus-visible:outline-none focus-visible:bg-brand-50
                 {active
            ? 'bg-brand-500 text-white hover:bg-brand-600'
            : 'text-brand-ink hover:bg-stone-100'}"
        >
          <span class="text-base leading-none" aria-hidden="true">{flagFor[code]}</span>
          <span class="flex-1">{strings.langNames[code]}</span>
          {#if active}
            <svg
              aria-hidden="true"
              class="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 8.5L6.5 12L13 4.5" />
            </svg>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>
