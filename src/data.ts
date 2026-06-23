import { MenuItem, Feature, Testimonial } from './types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Artesanal',
    description: 'Molho de tomate pelati, mozzarella de búfala fresca, manjericão e azeite extravirgem.',
    price: 68.90,
    category: 'tradicional',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Calabresa Premium',
    description: 'Calabresa artesanal defumada, cebola roxa, azeitonas pretas e orégano fresco.',
    price: 72.90,
    category: 'tradicional',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Parma com Rúcula',
    description: 'Presunto Parma curado, rúcula fresca, tomate seco e lascas de parmesão.',
    price: 89.90,
    category: 'especial',
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Trufada de Cogumelos',
    description: 'Mix de cogumelos frescos, azeite trufado, mozzarella e toque de alho-poró.',
    price: 94.90,
    category: 'especial',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Nutella com Morango',
    description: 'Creme de avelã Nutella original, morangos frescos fatiados e castanhas.',
    price: 79.90,
    category: 'doce',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Vinho Tinto Chileno',
    description: 'Garrafa 750ml - Cabernet Sauvignon Reserva.',
    price: 110.00,
    category: 'bebida',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80'
  }
];

export const features: Feature[] = [
  {
    id: 'f1',
    title: 'Ingredientes Selecionados',
    description: 'Trabalhamos apenas com fornecedores premium e ingredientes frescos do dia.',
    icon: 'Leaf'
  },
  {
    id: 'f2',
    title: 'Massa Artesanal',
    description: 'Fermentação natural de 48h para uma massa leve e crocante.',
    icon: 'Wheat'
  },
  {
    id: 'f3',
    title: 'Entrega Rápida',
    description: 'Logística otimizada para a pizza chegar quentinha na sua casa.',
    icon: 'Timer'
  },
  {
    id: 'f4',
    title: 'Atendimento Premium',
    description: 'Nossa equipe está sempre pronta para oferecer a melhor experiência.',
    icon: 'Heart'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Mariana Silva',
    comment: 'Sem dúvida a melhor pizza da região! A massa é incrivelmente leve e os ingredientes são de primeira.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Carlos Eduardo',
    comment: 'Entrega sempre no prazo e a pizza chega fumegando. O sabor da Parma com Rúcula é sensacional.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Fernanda Costa',
    comment: 'Atendimento impecável e embalagem linda. Dá para ver o capricho em cada detalhe.',
    rating: 5
  }
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=80',
];
