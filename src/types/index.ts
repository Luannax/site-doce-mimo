export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  badge?: string;
  badgeColor?: string;
}

export interface ContactInfo {
  type: 'whatsapp' | 'instagram' | 'location';
  title: string;
  description: string;
  value: string;
  link: string;
  icon: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
