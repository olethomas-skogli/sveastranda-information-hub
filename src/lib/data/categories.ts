import type { Category } from '$lib/i18n/types';

export const categories: Category[] = [
  {
    slug: 'butikk',
    emoji: '🛒',
    title: {
      no: 'Butikk & resepsjon',
      en: 'Shop & reception',
      nl: 'Winkel & receptie',
      de: 'Laden & Rezeption'
    },
    blocks: {
      no: [
        { kind: 'heading', text: 'Åpningstider' },
        {
          kind: 'list',
          items: [
            'Mai–oktober: kl. 09:00–21:00',
            {
              text: 'Juli:',
              sub: ['Resepsjon: kl. 08:00–22:00', 'Butikk: kl. 08:30–22:00']
            }
          ]
        },
        { kind: 'heading', text: 'Utvalg i butikken' },
        {
          kind: 'list',
          items: [
            'Mat: stor og medium pizza, toast med ost og skinke',
            'Bakevarer: ciabatta, croissanter, kanelboller, muffins, wienerbrød',
            'Et godt utvalg av dagligvarer'
          ]
        }
      ],
      en: [
        { kind: 'heading', text: 'Opening hours' },
        {
          kind: 'list',
          items: [
            'May–October: 09:00–21:00',
            {
              text: 'July:',
              sub: ['Reception: 08:00–22:00', 'Shop: 08:30–22:00']
            }
          ]
        },
        { kind: 'heading', text: 'In the shop' },
        {
          kind: 'list',
          items: [
            'Food: large and medium pizza, toast with cheese and ham',
            'Bakery: ciabatta, croissants, cinnamon buns, muffins, Danish pastries',
            'A good selection of groceries'
          ]
        }
      ],
      nl: [
        { kind: 'heading', text: 'Openingstijden' },
        {
          kind: 'list',
          items: [
            'Mei–oktober: 09:00–21:00',
            {
              text: 'Juli:',
              sub: ['Receptie: 08:00–22:00', 'Winkel: 08:30–22:00']
            }
          ]
        },
        { kind: 'heading', text: 'In de winkel' },
        {
          kind: 'list',
          items: [
            'Eten: grote en middelgrote pizza, tosti met kaas en ham',
            'Bakkerij: ciabatta, croissants, kaneelbroodjes, muffins, koffiebroodjes',
            'Een goed assortiment dagelijkse boodschappen'
          ]
        }
      ],
      de: [
        { kind: 'heading', text: 'Öffnungszeiten' },
        {
          kind: 'list',
          items: [
            'Mai–Oktober: 09:00–21:00 Uhr',
            {
              text: 'Juli:',
              sub: ['Rezeption: 08:00–22:00 Uhr', 'Laden: 08:30–22:00 Uhr']
            }
          ]
        },
        { kind: 'heading', text: 'Im Laden' },
        {
          kind: 'list',
          items: [
            'Essen: große und mittlere Pizza, Toast mit Käse und Schinken',
            'Backwaren: Ciabatta, Croissants, Zimtschnecken, Muffins, Plundergebäck',
            'Eine gute Auswahl an Lebensmitteln'
          ]
        }
      ]
    }
  },

  {
    slug: 'restaurant',
    emoji: '🍽️',
    title: {
      no: 'Restaurant',
      en: 'Restaurant',
      nl: 'Restaurant',
      de: 'Restaurant'
    },
    blocks: {
      no: [
        {
          kind: 'list',
          items: [
            'Åpen daglig kl. 13:00–21:00 fra 19. juni – 16. august',
            'Åpen i helger før og etter denne perioden'
          ]
        }
      ],
      en: [
        {
          kind: 'list',
          items: [
            'Open daily 13:00–21:00 from 19 June – 16 August',
            'Open on weekends before and after this period'
          ]
        }
      ],
      nl: [
        {
          kind: 'list',
          items: [
            'Dagelijks geopend van 13:00–21:00 van 19 juni t/m 16 augustus',
            'In de weekenden geopend voor en na deze periode'
          ]
        }
      ],
      de: [
        {
          kind: 'list',
          items: [
            'Täglich von 13:00–21:00 Uhr geöffnet vom 19. Juni – 16. August',
            'An Wochenenden vor und nach diesem Zeitraum geöffnet'
          ]
        }
      ]
    }
  },

  {
    slug: 'aktiviteter',
    emoji: '🎯',
    title: {
      no: 'Aktiviteter',
      en: 'Activities',
      nl: 'Activiteiten',
      de: 'Aktivitäten'
    },
    blocks: {
      no: [
        {
          kind: 'list',
          items: [
            {
              text: 'Minigolf (12 hull):',
              sub: ['Voksne: 50 kr', 'Barn: 30 kr']
            },
            'Stor fotballslette med to mål',
            'Enkel frisbeegolfbane (4 utkast, 2 kurver)',
            'Fine turstier fra bussholdeplassen ved inngangen til campingplassen',
            'Besøk fossefallene Høgfallet og Moafallet'
          ]
        }
      ],
      en: [
        {
          kind: 'list',
          items: [
            {
              text: 'Minigolf (12 holes):',
              sub: ['Adults: 50 NOK', 'Children: 30 NOK']
            },
            'Large football field with two goals',
            'Simple frisbee golf course (4 tees, 2 baskets)',
            'Lovely walking trails from the bus stop at the entrance to the campsite',
            'Visit the Høgfallet and Moafallet waterfalls'
          ]
        }
      ],
      nl: [
        {
          kind: 'list',
          items: [
            {
              text: 'Minigolf (12 holes):',
              sub: ['Volwassenen: 50 NOK', 'Kinderen: 30 NOK']
            },
            'Groot voetbalveld met twee doelen',
            'Eenvoudige frisbeegolfbaan (4 tees, 2 manden)',
            'Mooie wandelpaden vanaf de bushalte bij de ingang van de camping',
            'Bezoek de watervallen Høgfallet en Moafallet'
          ]
        }
      ],
      de: [
        {
          kind: 'list',
          items: [
            {
              text: 'Minigolf (12 Bahnen):',
              sub: ['Erwachsene: 50 NOK', 'Kinder: 30 NOK']
            },
            'Großes Fußballfeld mit zwei Toren',
            'Einfacher Discgolf-Parcours (4 Abwürfe, 2 Körbe)',
            'Schöne Wanderwege ab der Bushaltestelle am Eingang des Campingplatzes',
            'Besuchen Sie die Wasserfälle Høgfallet und Moafallet'
          ]
        }
      ]
    }
  },

  {
    slug: 'hytte',
    emoji: '🏡',
    title: {
      no: 'Hytteinformasjon',
      en: 'Cabin information',
      nl: 'Hutinformatie',
      de: 'Hütteninformation'
    },
    blocks: {
      no: [
        {
          kind: 'list',
          items: [
            'WiFi: sveastranda camping (ingen passord)',
            'Innsjekk fra kl. 15:00',
            'Utsjekk før kl. 11:00'
          ]
        },
        { kind: 'heading', text: 'Ved avreise' },
        {
          kind: 'list',
          items: [
            'Legg nøkkelen i postkassen utenfor resepsjonen dersom den er ubemannet',
            'Kast søppel i avfallsstasjonen til venstre for resepsjonen',
            'Ta av sengetøy og legg det i gangen'
          ]
        },
        {
          kind: 'paragraph',
          text: 'Kontakt resepsjonen dersom noe ikke er som det skal eller du har spørsmål.'
        }
      ],
      en: [
        {
          kind: 'list',
          items: [
            'WiFi: sveastranda camping (no password)',
            'Check-in from 15:00',
            'Check-out before 11:00'
          ]
        },
        { kind: 'heading', text: 'When you leave' },
        {
          kind: 'list',
          items: [
            'Put the key in the mailbox outside reception if it is unstaffed',
            'Throw rubbish in the waste station to the left of reception',
            'Strip the bedding and leave it in the hallway'
          ]
        },
        {
          kind: 'paragraph',
          text: 'Contact reception if anything is not as it should be, or if you have questions.'
        }
      ],
      nl: [
        {
          kind: 'list',
          items: [
            'WiFi: sveastranda camping (geen wachtwoord)',
            'Inchecken vanaf 15:00',
            'Uitchecken vóór 11:00'
          ]
        },
        { kind: 'heading', text: 'Bij vertrek' },
        {
          kind: 'list',
          items: [
            'Leg de sleutel in de brievenbus voor de receptie als deze onbemand is',
            'Gooi afval in het afvalstation links van de receptie',
            'Haal het beddengoed eraf en leg het in de gang'
          ]
        },
        {
          kind: 'paragraph',
          text: 'Neem contact op met de receptie als er iets niet in orde is of als u vragen heeft.'
        }
      ],
      de: [
        {
          kind: 'list',
          items: [
            'WLAN: sveastranda camping (kein Passwort)',
            'Check-in ab 15:00 Uhr',
            'Check-out bis 11:00 Uhr'
          ]
        },
        { kind: 'heading', text: 'Bei der Abreise' },
        {
          kind: 'list',
          items: [
            'Legen Sie den Schlüssel in den Briefkasten vor der Rezeption, wenn diese unbesetzt ist',
            'Werfen Sie den Müll in die Abfallstation links von der Rezeption',
            'Beziehen Sie die Betten ab und legen Sie die Bettwäsche in den Flur'
          ]
        },
        {
          kind: 'paragraph',
          text: 'Wenden Sie sich an die Rezeption, falls etwas nicht in Ordnung ist oder Sie Fragen haben.'
        }
      ]
    }
  },

  {
    slug: 'camping',
    emoji: '🚐',
    title: {
      no: 'Campinginformasjon',
      en: 'Camping information',
      nl: 'Campinginformatie',
      de: 'Campinginformation'
    },
    blocks: {
      no: [
        {
          kind: 'list',
          items: [
            'WiFi: sveastranda camping (ingen passord)',
            'Utsjekk før kl. 12:00'
          ]
        },
        { kind: 'heading', text: 'Fasiliteter' },
        {
          kind: 'list',
          items: [
            {
              text: 'Dusjkort fås ved innsjekk',
              sub: [
                '15 kr per 4 minutter',
                'Kan også brukes til vaskemaskin og tørketrommel (50 kr per bruk)'
              ]
            }
          ]
        },
        { kind: 'heading', text: 'Tømming og vann' },
        {
          kind: 'list',
          items: [
            'Tømming av toalett finnes ved begge sanitæranlegg (dør til venstre)',
            'CamperClean ved sanitæranlegg 2',
            'To tømmestasjoner for bobil',
            'Slange for påfylling av vann ved sanitæranlegg 2'
          ]
        },
        { kind: 'heading', text: 'Annet' },
        {
          kind: 'list',
          items: [
            'Respekter avstandsregler',
            'Gi beskjed i resepsjonen eller book online så snart som mulig ved endringer i oppholdet',
            'Hund er tillatt, men må holdes i bånd',
            'Egen hundegård finnes ved fotballsletta'
          ]
        }
      ],
      en: [
        {
          kind: 'list',
          items: [
            'WiFi: sveastranda camping (no password)',
            'Check-out before 12:00'
          ]
        },
        { kind: 'heading', text: 'Facilities' },
        {
          kind: 'list',
          items: [
            {
              text: 'Shower cards available at check-in',
              sub: [
                '15 NOK per 4 minutes',
                'Also works for washing machine and dryer (50 NOK per use)'
              ]
            }
          ]
        },
        { kind: 'heading', text: 'Waste & water' },
        {
          kind: 'list',
          items: [
            'Toilet emptying is available at both sanitary buildings (door on the left)',
            'CamperClean at sanitary building 2',
            'Two emptying stations for motorhomes',
            'Hose for filling water at sanitary building 2'
          ]
        },
        { kind: 'heading', text: 'Other' },
        {
          kind: 'list',
          items: [
            'Please respect spacing rules',
            'Notify reception or book online as soon as possible if your stay changes',
            'Dogs are welcome, but must be kept on a leash',
            'Dedicated dog enclosure next to the football field'
          ]
        }
      ],
      nl: [
        {
          kind: 'list',
          items: [
            'WiFi: sveastranda camping (geen wachtwoord)',
            'Uitchecken vóór 12:00'
          ]
        },
        { kind: 'heading', text: 'Voorzieningen' },
        {
          kind: 'list',
          items: [
            {
              text: 'Douchekaart verkrijgbaar bij check-in',
              sub: [
                '15 NOK per 4 minuten',
                'Ook te gebruiken voor wasmachine en droger (50 NOK per beurt)'
              ]
            }
          ]
        },
        { kind: 'heading', text: 'Lozen & water' },
        {
          kind: 'list',
          items: [
            'Toiletlozing aanwezig bij beide sanitairgebouwen (deur links)',
            'CamperClean bij sanitairgebouw 2',
            'Twee loosstations voor campers',
            'Slang voor het bijvullen van water bij sanitairgebouw 2'
          ]
        },
        { kind: 'heading', text: 'Overig' },
        {
          kind: 'list',
          items: [
            'Respecteer de onderlinge afstanden',
            'Geef wijzigingen in uw verblijf zo snel mogelijk door bij de receptie of online',
            'Honden zijn toegestaan, maar moeten aan de lijn',
            'Aparte hondenuitlaatplaats bij het voetbalveld'
          ]
        }
      ],
      de: [
        {
          kind: 'list',
          items: [
            'WLAN: sveastranda camping (kein Passwort)',
            'Check-out bis 12:00 Uhr'
          ]
        },
        { kind: 'heading', text: 'Einrichtungen' },
        {
          kind: 'list',
          items: [
            {
              text: 'Duschkarten erhältlich beim Check-in',
              sub: [
                '15 NOK pro 4 Minuten',
                'Auch für Waschmaschine und Trockner verwendbar (50 NOK pro Nutzung)'
              ]
            }
          ]
        },
        { kind: 'heading', text: 'Entsorgung & Wasser' },
        {
          kind: 'list',
          items: [
            'Toilettenentleerung an beiden Sanitärgebäuden (Tür links)',
            'CamperClean am Sanitärgebäude 2',
            'Zwei Entsorgungsstationen für Wohnmobile',
            'Wasserschlauch zum Auffüllen am Sanitärgebäude 2'
          ]
        },
        { kind: 'heading', text: 'Sonstiges' },
        {
          kind: 'list',
          items: [
            'Bitte die Abstandsregeln einhalten',
            'Änderungen Ihres Aufenthalts bitte schnellstmöglich an der Rezeption oder online mitteilen',
            'Hunde sind erlaubt, müssen aber an der Leine geführt werden',
            'Eigener Hundeauslaufplatz am Fußballfeld'
          ]
        }
      ]
    }
  },

  {
    slug: 'generelt',
    emoji: 'ℹ️',
    title: {
      no: 'Generell informasjon',
      en: 'General information',
      nl: 'Algemene informatie',
      de: 'Allgemeine Informationen'
    },
    blocks: {
      no: [
        {
          kind: 'list',
          items: [
            'E-post: resepsjon@sveastranda.no',
            'Telefon: 61 18 15 29'
          ]
        },
        { kind: 'heading', text: 'Åpningstider' },
        {
          kind: 'list',
          items: [
            'Butikk og resepsjon: kl. 09:00–21:00 (mai–oktober)',
            'Juli: utvidede åpningstider (se Butikk & resepsjon)',
            'Restaurant: se egne tider'
          ]
        },
        { kind: 'heading', text: 'Bom' },
        {
          kind: 'list',
          items: ['Åpen kl. 06:00–23:00']
        },
        { kind: 'heading', text: 'Elbil' },
        {
          kind: 'list',
          items: ['Egen ladestasjon for elbil ved siden av sanitæranlegg 2']
        }
      ],
      en: [
        {
          kind: 'list',
          items: [
            'Email: resepsjon@sveastranda.no',
            'Phone: 61 18 15 29'
          ]
        },
        { kind: 'heading', text: 'Opening hours' },
        {
          kind: 'list',
          items: [
            'Shop and reception: 09:00–21:00 (May–October)',
            'July: extended hours (see Shop & reception)',
            'Restaurant: see separate hours'
          ]
        },
        { kind: 'heading', text: 'Barrier gate' },
        {
          kind: 'list',
          items: ['Open 06:00–23:00']
        },
        { kind: 'heading', text: 'Electric vehicles' },
        {
          kind: 'list',
          items: ['Dedicated EV charging station next to sanitary building 2']
        }
      ],
      nl: [
        {
          kind: 'list',
          items: [
            'E-mail: resepsjon@sveastranda.no',
            'Telefoon: 61 18 15 29'
          ]
        },
        { kind: 'heading', text: 'Openingstijden' },
        {
          kind: 'list',
          items: [
            'Winkel en receptie: 09:00–21:00 (mei–oktober)',
            'Juli: verruimde openingstijden (zie Winkel & receptie)',
            'Restaurant: zie aparte tijden'
          ]
        },
        { kind: 'heading', text: 'Slagboom' },
        {
          kind: 'list',
          items: ['Open 06:00–23:00']
        },
        { kind: 'heading', text: 'Elektrische auto’s' },
        {
          kind: 'list',
          items: ['Aparte laadpaal voor elektrische auto’s naast sanitairgebouw 2']
        }
      ],
      de: [
        {
          kind: 'list',
          items: [
            'E-Mail: resepsjon@sveastranda.no',
            'Telefon: 61 18 15 29'
          ]
        },
        { kind: 'heading', text: 'Öffnungszeiten' },
        {
          kind: 'list',
          items: [
            'Laden und Rezeption: 09:00–21:00 Uhr (Mai–Oktober)',
            'Juli: verlängerte Öffnungszeiten (siehe Laden & Rezeption)',
            'Restaurant: siehe gesonderte Zeiten'
          ]
        },
        { kind: 'heading', text: 'Schranke' },
        {
          kind: 'list',
          items: ['Geöffnet 06:00–23:00 Uhr']
        },
        { kind: 'heading', text: 'Elektrofahrzeuge' },
        {
          kind: 'list',
          items: ['Eigene Ladestation für E-Autos neben Sanitärgebäude 2']
        }
      ]
    }
  },

  {
    slug: 'regler',
    emoji: '⚠️',
    title: {
      no: 'Regler',
      en: 'Rules',
      nl: 'Regels',
      de: 'Regeln'
    },
    blocks: {
      no: [
        {
          kind: 'list',
          items: [
            'Det skal være stille på området etter kl. 23:00',
            'Åpen flamme er ikke tillatt',
            'Ved grilling: sørg for tilgang til vann i nærheten',
            'Lading av elbil er ikke tillatt på campingplassen',
            'Benytt ladestasjonen ved sanitæranlegg 2'
          ]
        }
      ],
      en: [
        {
          kind: 'list',
          items: [
            'Quiet hours after 23:00',
            'Open flames are not allowed',
            'When grilling: make sure water is available nearby',
            'Charging electric vehicles on the campsite is not allowed',
            'Use the charging station at sanitary building 2'
          ]
        }
      ],
      nl: [
        {
          kind: 'list',
          items: [
            'Het moet stil zijn op het terrein na 23:00',
            'Open vuur is niet toegestaan',
            'Bij barbecueën: zorg dat er water in de buurt is',
            'Het is niet toegestaan elektrische auto’s op de camping te laden',
            'Gebruik het laadstation bij sanitairgebouw 2'
          ]
        }
      ],
      de: [
        {
          kind: 'list',
          items: [
            'Nachtruhe ab 23:00 Uhr',
            'Offenes Feuer ist nicht erlaubt',
            'Beim Grillen: bitte Wasser in der Nähe bereithalten',
            'Das Laden von E-Autos ist auf dem Campingplatz nicht erlaubt',
            'Bitte die Ladestation am Sanitärgebäude 2 nutzen'
          ]
        }
      ]
    }
  }
];

export const bySlug: Record<string, Category> = Object.fromEntries(
  categories.map((c) => [c.slug, c])
);
