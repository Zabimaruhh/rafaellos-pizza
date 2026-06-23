import { ReactNode } from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'tradicional' | 'especial' | 'doce' | 'bebida';
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // We'll map this to a lucide-react icon
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}
