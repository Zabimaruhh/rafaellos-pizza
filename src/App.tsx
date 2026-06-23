/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Menu from './components/Menu';
import Promotions from './components/Promotions';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-slate-50 font-sans selection:bg-orange-500/30 selection:text-orange-500 overflow-x-hidden flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Menu />
        <Promotions />
        <About />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
