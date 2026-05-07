import { browser } from '$app/environment';
import type { Lang } from './types';

const STORAGE_KEY = 'sveastranda.lang';
const VALID: Lang[] = ['no', 'en', 'nl', 'de'];

function detectInitial(): Lang {
  if (!browser) return 'no';

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && (VALID as string[]).includes(stored)) return stored as Lang;

  return 'no';
}

class LangStore {
  current = $state<Lang>('no');
  #initialized = false;

  init() {
    if (this.#initialized) return;
    this.#initialized = true;
    this.current = detectInitial();
  }

  set(lang: Lang) {
    this.current = lang;
    if (browser) localStorage.setItem(STORAGE_KEY, lang);
  }
}

export const lang = new LangStore();
