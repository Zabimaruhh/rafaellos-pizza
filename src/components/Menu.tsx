import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuItems } from '../data';
import { Plus } from 'lucide-react';

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'tradicional', label: 'Tradicionais' },
  { id: 'especial', label: 'Especiais' },
  { id: 'doce', label: 'Doces' },
  { id: 'bebida', label: 'Bebidas' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredMenu = activeCategory === 'todos' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="cardapio" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 italic block mb-2">Nossas Favoritas</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Cardápio
            </h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col group hover:border-orange-500/50 transition-colors"
              >
                <div className="w-full aspect-square bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <h3 className="font-bold text-sm mb-1 uppercase tracking-wide text-slate-50">{item.name}</h3>
                <p className="text-[11px] text-slate-400 mb-4 leading-relaxed flex-grow">{item.description}</p>
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-orange-500 font-bold text-lg">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                  <button className="w-10 h-10 bg-white/10 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
