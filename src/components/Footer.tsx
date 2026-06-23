import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#0c0c0c] border-t border-white/10 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-xl font-bold tracking-tighter text-white">R</div>
                <span className="text-xl font-bold tracking-tight uppercase text-slate-50">Rafaello's <span className="text-orange-500">Pizza</span></span>
              </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium mb-6 max-w-xs">
              Elevando o padrão do delivery com pizzas artesanais, ingredientes premium e paixão pelo que fazemos.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-xs text-slate-400 font-bold uppercase tracking-widest space-y-4">
             <a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a>
             <a href="#sobre" className="hover:text-orange-500 transition-colors">Nossa História</a>
             <a href="#cardapio" className="hover:text-orange-500 transition-colors">Cardápio</a>
             <a href="#galeria" className="hover:text-orange-500 transition-colors">Galeria</a>
          </div>

          <div className="flex flex-col items-center md:items-end text-xs text-slate-400 font-bold uppercase tracking-widest space-y-4">
             <p className="text-orange-500">Abriremos às 18:00</p>
             <p>Av. Principal, 1234 - Centro</p>
             <p>(11) 99999-9999</p>
             <div className="flex gap-4 pt-4">
                <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
             </div>
          </div>

        </div>
      </div>
      <div className="h-12 bg-orange-600 px-4 sm:px-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white shrink-0">
         <span>© {new Date().getFullYear()} Rafaello's Pizza.</span>
         <span className="hidden sm:inline">Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
