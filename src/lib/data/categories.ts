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
        { kind: 'heading', text: 'Pizza' },
        {
          kind: 'list',
          items: [
            {
              text: 'Stor pizza – 249 kr:',
              sub: [
                'Ost, skinke, champignon og paprika',
                'Ost, pepperoni, rødløk og paprika'
              ]
            },
            {
              text: 'Medium pizza – 169 kr:',
              sub: ['Ost og pepperoni', 'Ost og skinke']
            },
            'Rømmedressing: 20 kr'
          ]
        },
        { kind: 'heading', text: 'Toast' },
        {
          kind: 'list',
          items: ['Ost og skinke – 45 kr']
        },
        { kind: 'heading', text: 'Frokost' },
        {
          kind: 'list',
          items: [
            'Ciabatta (fin eller halvgrov) – 20 kr',
            'Croissant (med eller uten sjokolade) – 25 kr',
            'Kanelboller eller wienerbrød – 25 kr',
            'Brød (halvgrovt) – 49 kr'
          ]
        },
        { kind: 'heading', text: 'Dagligvarer' },
        { kind: 'paragraph', text: 'Et godt utvalg av dagligvarer.' },
        {
          kind: 'paragraph',
          text: 'Merk: Utvalget kan variere etter sesong. I lavsesongen tas bestillinger i resepsjonen / butikken. I høysesongen tilbys ferske bakevarer fra åpningstid.'
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
        { kind: 'heading', text: 'Pizza' },
        {
          kind: 'list',
          items: [
            {
              text: 'Large pizza – 249 NOK:',
              sub: [
                'Cheese, ham, mushroom and bell pepper',
                'Cheese, pepperoni, red onion and bell pepper'
              ]
            },
            {
              text: 'Medium pizza – 169 NOK:',
              sub: ['Cheese and pepperoni', 'Cheese and ham']
            },
            'Sour cream dressing: 20 NOK'
          ]
        },
        { kind: 'heading', text: 'Toast' },
        {
          kind: 'list',
          items: ['Cheese and ham – 45 NOK']
        },
        { kind: 'heading', text: 'Breakfast' },
        {
          kind: 'list',
          items: [
            'Ciabatta (white or wholewheat) – 20 NOK',
            'Croissant (with or without chocolate) – 25 NOK',
            'Cinnamon buns or Danish pastries – 25 NOK',
            'Bread (wholewheat) – 49 NOK'
          ]
        },
        { kind: 'heading', text: 'Groceries' },
        { kind: 'paragraph', text: 'A good selection of everyday groceries.' },
        {
          kind: 'paragraph',
          text: 'Note: the selection may vary by season. In low season, orders are taken at reception / in the shop. In high season, fresh bakery items are available from opening time.'
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
        { kind: 'heading', text: 'Pizza' },
        {
          kind: 'list',
          items: [
            {
              text: 'Grote pizza – 249 NOK:',
              sub: [
                'Kaas, ham, champignons en paprika',
                'Kaas, pepperoni, rode ui en paprika'
              ]
            },
            {
              text: 'Medium pizza – 169 NOK:',
              sub: ['Kaas en pepperoni', 'Kaas en ham']
            },
            'Zure-roomdressing: 20 NOK'
          ]
        },
        { kind: 'heading', text: 'Tosti' },
        {
          kind: 'list',
          items: ['Kaas en ham – 45 NOK']
        },
        { kind: 'heading', text: 'Ontbijt' },
        {
          kind: 'list',
          items: [
            'Ciabatta (wit of halfvolkoren) – 20 NOK',
            'Croissant (met of zonder chocolade) – 25 NOK',
            'Kaneelbroodjes of koffiebroodjes – 25 NOK',
            'Brood (halfvolkoren) – 49 NOK'
          ]
        },
        { kind: 'heading', text: 'Boodschappen' },
        { kind: 'paragraph', text: 'Een goed assortiment dagelijkse boodschappen.' },
        {
          kind: 'paragraph',
          text: 'Let op: het aanbod kan per seizoen variëren. In het laagseizoen worden bestellingen bij de receptie / in de winkel opgenomen. In het hoogseizoen zijn verse bakkerijproducten vanaf de openingstijd verkrijgbaar.'
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
        { kind: 'heading', text: 'Pizza' },
        {
          kind: 'list',
          items: [
            {
              text: 'Große Pizza – 249 NOK:',
              sub: [
                'Käse, Schinken, Champignons und Paprika',
                'Käse, Pepperoni, rote Zwiebel und Paprika'
              ]
            },
            {
              text: 'Mittlere Pizza – 169 NOK:',
              sub: ['Käse und Pepperoni', 'Käse und Schinken']
            },
            'Sauerrahm-Dressing: 20 NOK'
          ]
        },
        { kind: 'heading', text: 'Toast' },
        {
          kind: 'list',
          items: ['Käse und Schinken – 45 NOK']
        },
        { kind: 'heading', text: 'Frühstück' },
        {
          kind: 'list',
          items: [
            'Ciabatta (hell oder halbgrob) – 20 NOK',
            'Croissant (mit oder ohne Schokolade) – 25 NOK',
            'Zimtschnecken oder Plundergebäck – 25 NOK',
            'Brot (halbgrob) – 49 NOK'
          ]
        },
        { kind: 'heading', text: 'Lebensmittel' },
        { kind: 'paragraph', text: 'Eine gute Auswahl an Lebensmitteln des täglichen Bedarfs.' },
        {
          kind: 'paragraph',
          text: 'Hinweis: Das Sortiment kann saisonal variieren. In der Nebensaison werden Bestellungen an der Rezeption / im Laden aufgenommen. In der Hauptsaison sind frische Backwaren ab Öffnungszeit erhältlich.'
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
            'Besøk fossefallene Høgfallet og Moafallet'
          ]
        },
        { kind: 'heading', text: 'Turstier' },
        {
          kind: 'paragraph',
          text: 'Det finnes fine turstier med utgangspunkt fra bussholdeplassen ved innkjørselen til campingplassen. Se kart og oversikt her: [sveastranda.no/turstier](https://www.sveastranda.no/turstier)'
        },
        { kind: 'heading', text: 'Båtutleie' },
        { kind: 'paragraph', text: 'Vi tilbyr utleie av:' },
        {
          kind: 'list',
          items: ['Sykkelbåt', 'Robåt', 'Kano', 'SUP-brett']
        },
        {
          kind: 'paragraph',
          text: 'Pris: 50 kr per halvtime. Bestilles i resepsjonen. Tilgjengelighet kan variere etter trafikk og sesong.'
        },
        { kind: 'heading', text: 'Fisking' },
        {
          kind: 'paragraph',
          text: 'Les mer om fiskemuligheter her: [sveastranda.no/fisking](https://www.sveastranda.no/fisking)'
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
            'Visit the Høgfallet and Moafallet waterfalls'
          ]
        },
        { kind: 'heading', text: 'Walking trails' },
        {
          kind: 'paragraph',
          text: 'Lovely walking trails start from the bus stop at the entrance to the campsite. See the map and overview here: [sveastranda.no/turstier](https://www.sveastranda.no/turstier)'
        },
        { kind: 'heading', text: 'Boat rental' },
        { kind: 'paragraph', text: 'We rent out:' },
        {
          kind: 'list',
          items: ['Pedal boat', 'Rowing boat', 'Canoe', 'SUP board']
        },
        {
          kind: 'paragraph',
          text: 'Price: 50 NOK per half hour. Book at reception. Availability may vary depending on demand and season.'
        },
        { kind: 'heading', text: 'Fishing' },
        {
          kind: 'paragraph',
          text: 'Read more about fishing here: [sveastranda.no/fisking](https://www.sveastranda.no/fisking)'
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
            'Bezoek de watervallen Høgfallet en Moafallet'
          ]
        },
        { kind: 'heading', text: 'Wandelpaden' },
        {
          kind: 'paragraph',
          text: 'Mooie wandelpaden vertrekken vanaf de bushalte bij de ingang van de camping. Bekijk de kaart en het overzicht hier: [sveastranda.no/turstier](https://www.sveastranda.no/turstier)'
        },
        { kind: 'heading', text: 'Botenverhuur' },
        { kind: 'paragraph', text: 'Wij verhuren:' },
        {
          kind: 'list',
          items: ['Waterfiets', 'Roeiboot', 'Kano', 'SUP-board']
        },
        {
          kind: 'paragraph',
          text: 'Prijs: 50 NOK per half uur. Reserveren bij de receptie. Beschikbaarheid kan variëren afhankelijk van drukte en seizoen.'
        },
        { kind: 'heading', text: 'Vissen' },
        {
          kind: 'paragraph',
          text: 'Lees hier meer over de visgelegenheden: [sveastranda.no/fisking](https://www.sveastranda.no/fisking)'
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
            'Besuchen Sie die Wasserfälle Høgfallet und Moafallet'
          ]
        },
        { kind: 'heading', text: 'Wanderwege' },
        {
          kind: 'paragraph',
          text: 'Schöne Wanderwege beginnen an der Bushaltestelle am Eingang des Campingplatzes. Karte und Übersicht hier: [sveastranda.no/turstier](https://www.sveastranda.no/turstier)'
        },
        { kind: 'heading', text: 'Bootsverleih' },
        { kind: 'paragraph', text: 'Wir vermieten:' },
        {
          kind: 'list',
          items: ['Tretboot', 'Ruderboot', 'Kanu', 'SUP-Board']
        },
        {
          kind: 'paragraph',
          text: 'Preis: 50 NOK pro halbe Stunde. Buchung an der Rezeption. Die Verfügbarkeit kann je nach Nachfrage und Saison variieren.'
        },
        { kind: 'heading', text: 'Angeln' },
        {
          kind: 'paragraph',
          text: 'Mehr zum Angeln hier: [sveastranda.no/fisking](https://www.sveastranda.no/fisking)'
        }
      ]
    }
  },

  {
    slug: 'arrangementer',
    emoji: '🎉',
    title: {
      no: 'Arrangementer',
      en: 'Events',
      nl: 'Evenementen',
      de: 'Veranstaltungen'
    },
    blocks: {
      no: [
        {
          kind: 'paragraph',
          text: 'Vi arrangerer mange show og aktiviteter gjennom sesongen.'
        },
        {
          kind: 'paragraph',
          text: 'Se datoer og mer informasjon her: [sveastranda.no/arrangementer](https://www.sveastranda.no/arrangementer)'
        }
      ],
      en: [
        {
          kind: 'paragraph',
          text: 'We host many shows and activities throughout the season.'
        },
        {
          kind: 'paragraph',
          text: 'See dates and more information here: [sveastranda.no/arrangementer](https://www.sveastranda.no/arrangementer)'
        }
      ],
      nl: [
        {
          kind: 'paragraph',
          text: 'We organiseren veel shows en activiteiten gedurende het seizoen.'
        },
        {
          kind: 'paragraph',
          text: 'Bekijk hier de data en meer informatie: [sveastranda.no/arrangementer](https://www.sveastranda.no/arrangementer)'
        }
      ],
      de: [
        {
          kind: 'paragraph',
          text: 'Wir organisieren viele Shows und Aktivitäten während der Saison.'
        },
        {
          kind: 'paragraph',
          text: 'Termine und weitere Informationen finden Sie hier: [sveastranda.no/arrangementer](https://www.sveastranda.no/arrangementer)'
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
        { kind: 'heading', text: 'Sengetøy og håndklær' },
        {
          kind: 'paragraph',
          text: 'Sengetøy og håndklær kan leies i resepsjonen:'
        },
        {
          kind: 'list',
          items: [
            'Sengetøy – 70 kr',
            'Stort håndkle – 20 kr',
            'Lite håndkle – 10 kr',
            'Sett (sengetøy + håndklær) – 100 kr'
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
        { kind: 'heading', text: 'Bedding and towels' },
        {
          kind: 'paragraph',
          text: 'Bedding and towels can be rented at reception:'
        },
        {
          kind: 'list',
          items: [
            'Bedding – 70 NOK',
            'Large towel – 20 NOK',
            'Small towel – 10 NOK',
            'Set (bedding + towels) – 100 NOK'
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
        { kind: 'heading', text: 'Beddengoed en handdoeken' },
        {
          kind: 'paragraph',
          text: 'Beddengoed en handdoeken kunnen worden gehuurd bij de receptie:'
        },
        {
          kind: 'list',
          items: [
            'Beddengoed – 70 NOK',
            'Grote handdoek – 20 NOK',
            'Kleine handdoek – 10 NOK',
            'Set (beddengoed + handdoeken) – 100 NOK'
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
        { kind: 'heading', text: 'Bettwäsche und Handtücher' },
        {
          kind: 'paragraph',
          text: 'Bettwäsche und Handtücher können an der Rezeption gemietet werden:'
        },
        {
          kind: 'list',
          items: [
            'Bettwäsche – 70 NOK',
            'Großes Handtuch – 20 NOK',
            'Kleines Handtuch – 10 NOK',
            'Set (Bettwäsche + Handtücher) – 100 NOK'
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
        },
        {
          kind: 'paragraph',
          text: 'For flere regler, se: [sveastranda.no/media/358](https://www.sveastranda.no/media/358)'
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
        },
        {
          kind: 'paragraph',
          text: 'For more rules, see: [sveastranda.no/media/358](https://www.sveastranda.no/media/358)'
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
        },
        {
          kind: 'paragraph',
          text: 'Voor meer regels, zie: [sveastranda.no/media/358](https://www.sveastranda.no/media/358)'
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
        },
        {
          kind: 'paragraph',
          text: 'Weitere Regeln: [sveastranda.no/media/358](https://www.sveastranda.no/media/358)'
        }
      ]
    }
  }
];

// Append the Kart entry as an external link card (no internal detail page).
categories.push({
  slug: 'kart',
  emoji: '🗺️',
  title: {
    no: 'Kart',
    en: 'Map',
    nl: 'Kaart',
    de: 'Karte'
  },
  blocks: { no: [], en: [], nl: [], de: [] },
  externalUrl: 'https://www.sveastranda.no/media/487'
});

// Display order on the landing grid. "Generell informasjon" sits at the
// bottom; "Kart" pairs up with "Regler" on the same row.
const DISPLAY_ORDER = [
  'butikk',
  'restaurant',
  'hytte',
  'camping',
  'aktiviteter',
  'arrangementer',
  'regler',
  'kart',
  'generelt'
];
categories.sort(
  (a, b) => DISPLAY_ORDER.indexOf(a.slug) - DISPLAY_ORDER.indexOf(b.slug)
);

export const bySlug: Record<string, Category> = Object.fromEntries(
  categories.map((c) => [c.slug, c])
);
