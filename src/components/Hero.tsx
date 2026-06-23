import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-28 pb-6 md:pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Pizza" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-black leading-[0.9] uppercase mb-4 text-white">
                A melhor experiência em <br className="hidden md:block" /><span className="text-orange-500">pizza delivery</span>
              </h1>
              <p className="text-slate-300 max-w-xl text-sm md:text-base leading-relaxed mb-6">
                Massa artesanal de longa fermentação, ingredientes selecionados e entrega rápida para você aproveitar o melhor sabor no conforto de casa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#cardapio"
                  className="bg-white hover:bg-slate-200 text-black px-8 py-3 rounded-lg font-bold text-sm uppercase transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  Cardápio Completo
                </a>
                <a
                  href="#contato"
                  className="border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-bold text-sm uppercase transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
