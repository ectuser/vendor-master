const vendorsMock = [
  {
    id: 1,
    name: 'Müller',
    name2: 'Müller GmbH',
    address1: 'Hauptstraße 12',
    address2: 'Top 3',
    zip: '1010',
    country: 'Österreich',
    city: 'Wien',
    mail: 'kontakt@mueller.at',
    phone: '+43 1 2345678',
    notes: 'Bevorzugter Anbieter für regionale Produkte',
  },
  {
    id: 2,
    name: 'Schneider',
    name2: 'Schneider KG',
    address1: 'Ringstraße 5',
    address2: 'Stock 1',
    zip: '5020',
    country: 'Österreich',
    city: 'Salzburg',
    mail: 'info@schneider.at',
    phone: '+43 662 123456',
    notes: 'Zuverlässiger Partner für Baubedarf',
  },
  {
    id: 3,
    name: 'Huber',
    name2: 'Huber & Söhne OG',
    address1: 'Marktplatz 7',
    address2: '',
    zip: '4020',
    country: 'Österreich',
    city: 'Linz',
    mail: 'office@huber.co.at',
    phone: '+43 732 654321',
    notes: 'Familienbetrieb für Maschinenbau',
  },
  {
    id: 4,
    name: 'Bauer',
    name2: 'Bauer GmbH',
    address1: 'Landstraße 10',
    address2: 'EG',
    zip: '8010',
    country: 'Österreich',
    city: 'Graz',
    mail: 'kontakt@bauer.at',
    phone: '+43 316 987654',
    notes: 'Experte für Landwirtschaftsbedarf',
  },
  {
    id: 5,
    name: 'Weber',
    name2: 'Weber AG',
    address1: 'Am Graben 15',
    address2: '',
    zip: '9020',
    country: 'Österreich',
    city: 'Klagenfurt',
    mail: 'service@weber-ag.at',
    phone: '+43 463 123987',
    notes: 'Großhändler für Lebensmittel',
  },
  {
    id: 6,
    name: 'Gruber',
    name2: 'Gruber Logistik GmbH',
    address1: 'Industriestraße 8',
    address2: 'Büro 2',
    zip: '2340',
    country: 'Österreich',
    city: 'Mödling',
    mail: 'logistik@gruber.at',
    phone: '+43 2236 567890',
    notes: 'Spezialisiert auf Logistiklösungen',
  },
  {
    id: 7,
    name: 'Wagner',
    name2: 'Wagner Handels GmbH',
    address1: 'Bahnhofstraße 20',
    address2: '',
    zip: '2700',
    country: 'Österreich',
    city: 'Wiener Neustadt',
    mail: 'verkauf@wagner-handels.at',
    phone: '+43 2622 334455',
    notes: 'Lieferant für Groß- und Einzelhandel',
  },
  {
    id: 8,
    name: 'Fischer',
    name2: 'Fischer & Partner KG',
    address1: 'Rathausplatz 9',
    address2: '',
    zip: '3100',
    country: 'Österreich',
    city: 'St. Pölten',
    mail: 'info@fischer-partner.at',
    phone: '+43 2742 665544',
    notes: 'Partner für Bau- und Ingenieurdienstleistungen',
  },
  {
    id: 9,
    name: 'Schwarz',
    name2: 'Schwarz GmbH',
    address1: 'Parkallee 3',
    address2: 'Gebäude C',
    zip: '9500',
    country: 'Österreich',
    city: 'Villach',
    mail: 'kontakt@schwarz.at',
    phone: '+43 4242 123456',
    notes: 'Anbieter von Gartenbedarf',
  },
  {
    id: 10,
    name: 'Zimmermann',
    name2: 'Zimmermann OG',
    address1: 'Berggasse 22',
    address2: 'Top 4',
    zip: '5700',
    country: 'Österreich',
    city: 'Zell am See',
    mail: 'info@zimmermann.at',
    phone: '+43 6542 987654',
    notes: 'Spezialisiert auf Holzverarbeitung',
  },
  {
    id: 11,
    name: 'Klein',
    name2: 'Klein GmbH',
    address1: 'Stadtplatz 1',
    address2: '',
    zip: '3300',
    country: 'Österreich',
    city: 'Amstetten',
    mail: 'service@klein.at',
    phone: '+43 7472 111222',
    notes: 'Fachhandel für Elektrogeräte',
  },
  {
    id: 12,
    name: 'Lenz',
    name2: 'Lenz Technik AG',
    address1: 'Technoparkstraße 14',
    address2: '',
    zip: '4040',
    country: 'Österreich',
    city: 'Linz',
    mail: 'support@lenz-technik.at',
    phone: '+43 732 998877',
    notes: 'Innovationen in der Medizintechnik',
  },
  {
    id: 13,
    name: 'Schmidt',
    name2: 'Schmidt Baustoffe GmbH',
    address1: 'Werkstraße 6',
    address2: '',
    zip: '6300',
    country: 'Österreich',
    city: 'Wörgl',
    mail: 'baustoffe@schmidt.at',
    phone: '+43 5332 445566',
    notes: 'Lieferant für Baumaterialien',
  },
  {
    id: 14,
    name: 'Lehner',
    name2: 'Lehner Textil KG',
    address1: 'Textilstraße 18',
    address2: 'Büro 5',
    zip: '6800',
    country: 'Österreich',
    city: 'Feldkirch',
    mail: 'kontakt@lehner-textil.at',
    phone: '+43 5522 334455',
    notes: 'Hersteller von Textilien',
  },
  {
    id: 15,
    name: 'Winter',
    name2: 'Winter & Co.',
    address1: 'Schlossallee 21',
    address2: '',
    zip: '5201',
    country: 'Österreich',
    city: 'Seekirchen am Wallersee',
    mail: 'info@winterco.at',
    phone: '+43 6212 789101',
    notes: 'Luxusmöbel und Inneneinrichtung',
  },
  {
    id: 16,
    name: 'Mayer',
    name2: 'Mayer GmbH',
    address1: 'Mariahilfer Straße 99',
    address2: '',
    zip: '1060',
    country: 'Österreich',
    city: 'Wien',
    mail: 'kontakt@mayer.at',
    phone: '+43 1 2345679',
    notes: 'Anbieter von Mode und Accessoires',
  },
  {
    id: 17,
    name: 'Kurz',
    name2: 'Kurz Handels KG',
    address1: 'Kärntner Straße 12',
    address2: 'OG 2',
    zip: '1010',
    country: 'Österreich',
    city: 'Wien',
    mail: 'info@kurz-handel.at',
    phone: '+43 1 5678901',
    notes: 'Spezialist für Luxusgüter',
  },
  {
    id: 18,
    name: 'Seitz',
    name2: 'Seitz Technik AG',
    address1: 'Stephansplatz 3',
    address2: 'Stock 4',
    zip: '1010',
    country: 'Österreich',
    city: 'Wien',
    mail: 'support@seitz-technik.at',
    phone: '+43 1 2345670',
    notes: 'Technik und Elektronikhandel',
  },
];

module.exports = {
  vendorsMock,
};