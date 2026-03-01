import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      <div className="z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 text-white/60"
        >
          Full Stack Web Developer
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15vw] md:text-[12vw] leading-[0.85] font-serif italic -ml-2 md:-ml-4 mb-12"
        >
          Mends <br />
          <span className="ml-[10vw]">Elvis</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row gap-8 md:items-end justify-between"
        >
          <p className="max-w-md text-lg md:text-xl font-light text-white/80 leading-relaxed text-balance">
            Specializing in high-end digital experiences that blend aesthetic precision with technical excellence.
          </p>
          
          <div className="flex gap-4">
            <div className="w-12 h-[1px] bg-white/30 self-center" />
            <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll to explore</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-white to-transparent blur-[120px] -z-0 pointer-events-none"
      />
    </section>
  );
}
