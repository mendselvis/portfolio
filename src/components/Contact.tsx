import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-48 text-center">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-12 block"
      >
        03 — Get in touch
      </motion.span>

      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-[8vw] font-serif italic mb-20 leading-none"
      >
        Let's create <br /> something <br /> timeless.
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
        <motion.a 
          href="mailto:mendselvis@gmail.com"
          whileHover={{ x: 10 }}
          className="group flex items-center gap-4 text-2xl md:text-3xl font-light border-b border-white/20 pb-2"
        >
          mendselvis@gmail.com
          <ArrowUpRight className="opacity-40 group-hover:opacity-100 transition-opacity" />
        </motion.a>

        <div className="flex gap-8 text-xs uppercase tracking-[0.3em] text-white/60">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
      </div>

      <footer className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest text-white/20">
        <p>© 2026 Mends Elvis. All rights reserved.</p>
        <p>Built with precision & passion.</p>
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </footer>
    </section>
  );
}
