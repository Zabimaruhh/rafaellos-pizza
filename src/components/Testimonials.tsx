import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0c0c0c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 italic mb-2 block">Avaliações</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-[13px] text-slate-300 italic mb-6 leading-relaxed flex-grow">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold text-sm uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">{testimonial.name}</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">Cliente verificado</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
