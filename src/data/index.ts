import type { Product, ContactInfo, Feature } from '../types';
import palhaItaliana from '../assets/palha-italiana.png';
import palhaLeiteNinho from '../assets/palha-italiana-leite-ninho.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Palha Italiana Tradicional',
    description: 'Delícia crocante e irresistível, com um sabor clássico que combina o melhor da confeitaria italiana. Perfeita para presentear ou para se deliciar.',
    price: 8.0,
    images: [
      palhaItaliana,
      palhaItaliana,
      palhaItaliana,
    ],
    badge: 'Popular',
    badgeColor: '#E8B4B8',
  },
  {
    id: '2',
    name: 'Palha Italiana de Leite Ninho',
    description: 'Uma experiência única com o sabor suave e cremoso do Leite Ninho. Crocante por fora, macio por dentro. O equilíbrio perfeito em cada mordida.',
    price: 8.0,
    images: [
      palhaLeiteNinho,
      palhaLeiteNinho,
      palhaLeiteNinho,
    ],
    badge: 'Especial',
    badgeColor: '#F4E4C1',
  },
];

export const contactInfo: ContactInfo[] = [
  {
    type: 'whatsapp',
    title: 'WhatsApp',
    description: 'Clique e converse conosco!',
    value: '(65) 9 9618-6393',
    link: 'https://api.whatsapp.com/send/?phone=5565996186393',
    icon: 'whatsapp',
  },
  {
    type: 'instagram',
    title: 'Instagram',
    description: 'Acompanhe nossas novidades',
    value: '@doce.mimo.arenapolis',
    link: 'https://instagram.com/doce.mimo.arenapolis',
    icon: 'instagram',
  },
  {
    type: 'location',
    title: 'Localização',
    description: 'Arenápolis, MT',
    value: 'Ver no mapa',
    link: 'https://share.google/i6zGagXrvJvHe8YZp',
    icon: 'map-marker-alt',
  },
];

export const features: Feature[] = [
  {
    icon: 'award',
    title: 'Premium',
    description: 'Ingredientes de alta qualidade',
  },
  {
    icon: 'heart',
    title: 'Artesanal',
    description: 'Feito com muito carinho',
  },
  {
    icon: 'truck',
    title: 'Entrega',
    description: 'Entrega disponível',
  },
];

export const PHONE_NUMBER = '5565996186393';
