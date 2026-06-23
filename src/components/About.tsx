import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0c0c0c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-2">
              <img 
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1200&auto=format&fit=crop" 
                alt="Pizzaiolo preparando massa" 
                className="object-cover w-full aspect-square md:aspect-[4/3] rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500 italic mb-2 block">Nossa História</span>
              <h3 className="text-4xl md:text-5xl font-black uppercase text-slate-50 mb-6 tracking-tight">
                Amor à primeira <br/><span className="text-orange-500">fatia</span>
              </h3>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              A Rafaello's nasceu da paixão pela autêntica culinária italiana. Nossa jornada começou com uma receita de família e o desejo de entregar não apenas comida, mas uma experiência gastronômica memorável diretamente na casa dos nossos clientes.
            </p>
            
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Cada pizza é aberta à mão, montada com atenção aos mínimos detalhes e assada no tempo perfeito. Nosso compromisso é com a qualidade absoluta: da escolha do tomate mais doce à mozzarella mais cremosa.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-black text-white mb-2">48h</p>
                <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">De fermentação</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white mb-2">100%</p>
                <p className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">Artesanal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
