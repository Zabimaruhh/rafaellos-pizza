import { motion } from 'motion/react';

export default function Promotions() {
  return (
    <section className="py-24 bg-[#0c0c0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-orange-600 to-red-700 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          
          <div className="relative z-10 md:w-1/2">
            <span className="bg-black/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block text-white">Promoção do Dia</span>
            <h3 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">Combo Duplo</h3>
            <p className="text-white/90 text-lg mb-6">2 Pizzas Grandes Tradicionais + Refri 2L por um preço irresistível. Perfeito para o final de semana!</p>
            <div className="flex items-end gap-4 mb-8">
              <div className="text-white/50 line-through text-2xl">R$ 130,90</div>
              <p className="text-5xl font-black leading-none text-white">R$ 89,90</p>
            </div>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-bold text-sm uppercase hover:bg-slate-200 transition-colors">
              Aproveitar Oferta
            </button>
          </div>
          
          <div className="relative z-10 md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full flex items-center justify-center border border-white/20 rotate-12 relative">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                  className="absolute inset-0 rounded-full"
                >
                    <img 
                      src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" 
                      alt="Combo" 
                      className="w-full h-full rounded-full object-cover border-8 border-[#0c0c0c]/20"
                    />
                </motion.div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
