import { motion } from 'motion/react';
import { galleryImages } from '../data';

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-[#0c0c0c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 italic block mb-2">Social</span>
            <h4 className="text-2xl font-black uppercase tracking-widest mb-4 text-white">Nosso Instagram</h4>
            <p className="text-sm text-slate-400 font-medium">Acompanhe as novidades, bastidores e muita pizza suculenta.</p>
          </div>
          <a 
            href="#" 
            className="text-xs font-bold uppercase tracking-widest text-white border border-white/20 hover:border-orange-500 hover:text-orange-500 px-6 py-2.5 rounded-lg transition-colors duration-300"
          >
            @rafaellos_pizza
          </a>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-xl bg-slate-800 group"
              >
                <img 
                  src={src} 
                  alt={`Instagram post ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
