export type Lang = 'no' | 'en' | 'nl' | 'de';

export const LANGS: Lang[] = ['no', 'en', 'nl', 'de'];

export type Localized<T> = Record<Lang, T>;

export type ListItem = string | { text: string; sub: string[] };

export type Block =
  | { kind: 'heading'; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: ListItem[] };

export interface Category {
  slug: string;
  emoji: string;
  title: Localized<string>;
  blocks: Localized<Block[]>;
  /** When set, the card links directly to this URL (opened in a new tab) and
   * no internal detail page is generated. */
  externalUrl?: string;
}
