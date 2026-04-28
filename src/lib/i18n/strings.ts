import type { Lang, Localized } from './types';

export interface UiStrings {
  siteTitle: string;
  siteSubtitle: string;
  tagline: string;
  back: string;
  chooseLang: string;
  langNames: Record<Lang, string>;
  footerContact: string;
  footerEmail: string;
  footerPhone: string;
  notFound: string;
  notFoundLink: string;
}

export const ui: Localized<UiStrings> = {
  no: {
    siteTitle: 'Sveastranda',
    siteSubtitle: 'Camping',
    tagline: 'En plass i solen – en perle ved Mjøsa',
    back: 'Tilbake',
    chooseLang: 'Velg språk',
    langNames: { no: 'Norsk', en: 'English', nl: 'Nederlands', de: 'Deutsch' },
    footerContact: 'Kontakt',
    footerEmail: 'resepsjon@sveastranda.no',
    footerPhone: '61 18 15 29',
    notFound: 'Fant ikke siden.',
    notFoundLink: 'Tilbake til forsiden'
  },
  en: {
    siteTitle: 'Sveastranda',
    siteSubtitle: 'Camping',
    tagline: 'A place in the sun — a pearl by Lake Mjøsa',
    back: 'Back',
    chooseLang: 'Choose language',
    langNames: { no: 'Norsk', en: 'English', nl: 'Nederlands', de: 'Deutsch' },
    footerContact: 'Contact',
    footerEmail: 'resepsjon@sveastranda.no',
    footerPhone: '61 18 15 29',
    notFound: 'Page not found.',
    notFoundLink: 'Back to home'
  },
  nl: {
    siteTitle: 'Sveastranda',
    siteSubtitle: 'Camping',
    tagline: 'Een plek in de zon — een parel aan het Mjøsameer',
    back: 'Terug',
    chooseLang: 'Kies taal',
    langNames: { no: 'Norsk', en: 'English', nl: 'Nederlands', de: 'Deutsch' },
    footerContact: 'Contact',
    footerEmail: 'resepsjon@sveastranda.no',
    footerPhone: '61 18 15 29',
    notFound: 'Pagina niet gevonden.',
    notFoundLink: 'Terug naar de startpagina'
  },
  de: {
    siteTitle: 'Sveastranda',
    siteSubtitle: 'Camping',
    tagline: 'Ein Platz an der Sonne — eine Perle am Mjøsa',
    back: 'Zurück',
    chooseLang: 'Sprache wählen',
    langNames: { no: 'Norsk', en: 'English', nl: 'Nederlands', de: 'Deutsch' },
    footerContact: 'Kontakt',
    footerEmail: 'resepsjon@sveastranda.no',
    footerPhone: '61 18 15 29',
    notFound: 'Seite nicht gefunden.',
    notFoundLink: 'Zurück zur Startseite'
  }
};

export const flagFor: Record<Lang, string> = {
  no: '🇳🇴',
  en: '🇬🇧',
  nl: '🇳🇱',
  de: '🇩🇪'
};
