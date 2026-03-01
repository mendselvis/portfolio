import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const PROJECTS = [
  {
    id: 1,
    title: "Modern Architecture",
    category: "Web Development",
    image: "https://picsum.photos/seed/tech-1/800/1000",
    year: "2024"
  },
  {
    id: 2,
    title: "Digital Presence",
    category: "Full Stack",
    image: "https://picsum.photos/seed/tech-2/800/1000",
    year: "2025"
  },
  {
    id: 3,
    title: "Creative Systems",
    category: "UI Engineering",
    image: "https://picsum.photos/seed/tech-3/800/1000",
    year: "2024"
  },
  {
    id: 4,
    title: "Timeless Design",
    category: "Backend Architecture",
    image: "https://picsum.photos/seed/tech-4/800/1000",
    year: "2026"
  }
];

export default function ProjectGrid() {
  return (
    <section id="work" className="px-6 md:px-12 py-32">
      <div className="flex justify-between items-end mb-24">
        <h2 className="text-4xl md:text-6xl font-serif italic">Selected Works</h2>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">01 — Projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i % 2 * 0.2 }}
            className={cn(
              "group cursor-pointer",
              i % 2 !== 0 && "md:mt-32"
            )}
          >
            <div className="relative aspect-[4/5] overflow-hidden mb-8">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 text-[10px] uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                View Project
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-serif italic mb-2">{project.title}</h3>
                <p className="text-xs uppercase tracking-widest text-white/40">{project.category}</p>
              </div>
              <span className="font-serif italic text-white/20">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
