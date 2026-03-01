import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
            <img 
              src="https://picsum.photos/seed/mends-portrait/800/1200" 
              alt="Mends Elvis Portrait"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </motion.div>

        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 block"
          >
            02 — The Vision
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif italic mb-12 leading-tight"
          >
            Believing that every pixel should carry a purpose and every interaction should tell a story.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-white/60 font-light leading-relaxed"
          >
            <p>
              With a passion for building scalable and performant web applications, I've spent years mastering the full stack to deliver seamless digital experiences for clients worldwide.
            </p>
            <p>
              My approach combines robust engineering with a keen eye for design, ensuring every application is as beautiful as it is functional. I believe in clean code, intuitive interfaces, and the power of technology to solve complex problems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Expertise</h4>
              <ul className="text-xs space-y-2 uppercase tracking-wider">
                <li>Frontend Development</li>
                <li>Backend Architecture</li>
                <li>Cloud Infrastructure</li>
                <li>UI/UX Engineering</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Stack</h4>
              <ul className="text-xs space-y-2 uppercase tracking-wider">
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>PostgreSQL / MongoDB</li>
                <li>AWS / Docker</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
