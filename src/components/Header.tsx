import { motion } from 'motion/react';
import { Pizza } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold tracking-tighter text-white">R</div>
            <span className="text-xl font-bold tracking-tight uppercase text-slate-50">Rafaello's <span className="text-orange-500">Pizza</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-slate-400">
            {['Início', 'Sobre', 'Cardápio', 'Galeria', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="hover:text-orange-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="#cardapio"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]"
            >
              Pedir Online
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
