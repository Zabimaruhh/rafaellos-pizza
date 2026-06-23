import { motion } from 'motion/react';
import { Timer, Leaf, Heart, Wheat } from 'lucide-react';
import { features } from '../data';
import { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  Leaf: <Leaf className="w-6 h-6 text-slate-50" />,
  Wheat: <Wheat className="w-6 h-6 text-slate-50" />,
  Timer: <Timer className="w-6 h-6 text-slate-50" />,
  Heart: <Heart className="w-6 h-6 text-slate-50" />,
};

export default function Features() {
  return (
    <section className="py-12 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:border-orange-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-600/20 flex items-center justify-center shrink-0">
                {iconMap[feature.icon]}
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase text-orange-500 tracking-wider mb-0.5">{feature.title}</p>
                <p className="text-[10px] text-slate-400 leading-tight">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
