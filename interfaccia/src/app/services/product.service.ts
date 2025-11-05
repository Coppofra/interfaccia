import { Product } from '../models/product';

const SAMPLE: Product[] = [
  {
    id: 'iphone-15',
    title: 'Apple iPhone 15',
    category: 'smartphone',
    price: 999,
    image: 'https://picsum.photos/seed/iphone15/400/300',
    images: ['https://picsum.photos/seed/iphone15a/800/400','https://picsum.photos/seed/iphone15b/800/400'],
    short: "Smartphone Apple con A17, display OLED e fotocamera avanzata.",
    description: 'iPhone 15: chip A17, display Super Retina XDR, ottime prestazioni fotografiche e iOS aggiornato.',
    features: ['Display OLED 6.1"', 'A17 Bionic', '128/256/512GB', 'Fotocamera 48MP']
  },
  {
    id: 'galaxy-s24',
    title: 'Samsung Galaxy S24',
    category: 'smartphone',
    price: 929,
    image: 'https://picsum.photos/seed/galaxys24/400/300',
    images: ['https://picsum.photos/seed/galaxys24a/800/400','https://picsum.photos/seed/galaxys24b/800/400'],
    short: 'Top di gamma Samsung con display AMOLED e fotocamere professionali.',
    description: 'Galaxy S24: performance elevate, display AMOLED ad alta frequenza e fotocamere ottimizzate.',
    features: ['AMOLED 6.2"', 'Snapdragon/Exynos', '128/256GB', 'Modalità Pro camera']
  },
  {
    id: 'macbook-air-m2',
    title: 'Apple MacBook Air (M2)',
    category: 'computer',
    price: 1199,
    image: 'https://picsum.photos/seed/macbookairm2/400/300',
    images: ['https://picsum.photos/seed/macbookairm2a/800/400','https://picsum.photos/seed/macbookairm2b/800/400'],
    short: 'Portatile sottile con chip M2, eccellente autonomia e design leggero.',
    description: 'MacBook Air con M2: ideale per produttività e mobilità grazie all\'efficienza del chip M2.',
    features: ['Apple M2', '13.6" Liquid Retina', '8–16GB RAM', 'SSD fino a 2TB']
  },
  {
    id: 'dell-xps-13',
    title: 'Dell XPS 13',
    category: 'computer',
    price: 1099,
    image: 'https://picsum.photos/seed/dellxps13/400/300',
    images: ['https://picsum.photos/seed/dellxps13a/800/400','https://picsum.photos/seed/dellxps13b/800/400'],
    short: 'Ultrabook premium con scocca compatta e display InfinityEdge.',
    description: 'Dell XPS 13: equilibrio tra design, prestazioni e portabilità per utenti professionali.',
    features: ['13.4" FHD+/4K', 'Intel i5/i7', '8–32GB RAM', 'SSD 256GB–1TB']
  },
  {
    id: 'sony-wh-1000xm5',
    title: 'Sony WH-1000XM5',
    category: 'accessory',
    price: 399,
    image: 'https://picsum.photos/seed/sonyxm5/400/300',
    images: ['https://picsum.photos/seed/sonyxm5a/800/400'],
    short: 'Cuffie over-ear con cancellazione del rumore leader nel settore.',
    description: 'WH-1000XM5: eccellente ANC, comfort prolungato e qualità audio superiore.',
    features: ['ANC avanzato', '30 ore autonomia', 'Bluetooth multipoint']
  },
  {
    id: 'fitbit-charge-6',
    title: 'Fitbit Charge 6',
    category: 'gadget',
    price: 149,
    image: 'https://picsum.photos/seed/fitbitcharge6/400/300',
    images: ['https://picsum.photos/seed/fitbitcharge6a/800/400'],
    short: 'Smartband per il monitoraggio fitness con funzioni smart.',
    description: 'Fitbit Charge 6: monitoraggio battito, sonno, sport e notifiche in un dispositivo compatto.',
    features: ['Monitoraggio bpm continuo', 'GPS integrato', '7 giorni autonomia']
  }
];

export const ProductService = {
  getAll(): Product[] {
    return SAMPLE.slice();
  },
  getById(id: string): Product | undefined {
    return SAMPLE.find(p => p.id === id);
  },
  categories(): string[] {
    return Array.from(new Set(SAMPLE.map(p => p.category)));
  }
};
