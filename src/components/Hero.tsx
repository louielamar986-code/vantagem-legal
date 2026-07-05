import { motion } from "motion/react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8 lg:py-12">
      {/* Text column */}
      <div className="lg:col-span-7 space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="text-xs font-bold tracking-widest text-navy-hover uppercase bg-bg-alt px-3 py-1.5 rounded-custom font-sans inline-block">
            Consultoria Jurídica de Excelência
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-serif text-navy-main"
            id="hero-title"
          >
            Proteção jurídica que trabalha para si
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-text-sub font-sans leading-relaxed max-w-2xl"
        >
          Consultoria especializada em direito civil, empresarial, laboral e de família. Atuamos com rigor, dedicação e transparência para salvaguardar os seus interesses e os do seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={onCtaClick}
            className="bg-navy-main hover:bg-navy-hover text-white text-sm font-bold py-3.5 px-8 rounded-custom transition-all duration-200 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-hover focus-visible:outline-offset-4 cursor-pointer"
            aria-label="Marcar consulta gratuita no formulário de contacto"
          >
            Marcar consulta gratuita
          </button>
          
          <a
            href="#areas"
            className="inline-flex items-center justify-center text-navy-main hover:text-navy-hover text-sm font-bold py-3.5 px-8 rounded-custom border border-gray-200 hover:border-gray-300 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-hover"
          >
            Saber mais
          </a>
        </motion.div>
      </div>

      {/* Decorative clean outline scale column */}
      <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-xs aspect-square border border-gray-100 bg-[#F5F6F8]/50 rounded-custom flex items-center justify-center p-8 relative overflow-hidden shadow-sm"
        >
          <svg
            className="w-40 h-40 text-navy-main/10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18M12 3L6 6m6-3l6 3M3 10c0 3.314 2.686 6 6 6s6-2.686 6-6M9 16v3M15 10c0 3.314 2.686 6 6 6s6-2.686 6-6m-6 6v3M6 19h12"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-6 text-center">
            <span className="text-[10px] font-bold tracking-widest text-navy-main/40 uppercase font-sans">
              Rigor • Transparência • Confiança
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
