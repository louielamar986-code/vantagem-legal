import { motion } from "motion/react";
import { TeamMember } from "../types";
import albertoImg from "../assets/images/advogado_alberto_santos_1783275031172.jpg";
import beatrizImg from "../assets/images/advogada_beatriz_mendes_1783275048571.jpg";
import carlosImg from "../assets/images/advogado_carlos_rocha_1783275064884.jpg";

export default function Team() {
  const team: TeamMember[] = [
    {
      id: "alberto-santos",
      name: "Dr. Alberto Santos",
      role: "Sócio Fundador",
      specialty: "Direito Empresarial",
      imageUrl: albertoImg,
      bio: "Com mais de 15 anos de dedicação, lidera a assessoria estratégica a grandes corporações. É especialista em reestruturações societárias e fusões complexas.",
    },
    {
      id: "beatriz-mendes",
      name: "Dra. Beatriz Mendes",
      role: "Advogada Associada",
      specialty: "Direito Civil & Família",
      imageUrl: beatrizImg,
      bio: "Especializada em mediação de conflitos de família e contencioso civil de elevada complexidade. Primazia por uma conduta humana, próxima e estritamente minuciosa.",
    },
    {
      id: "carlos-rocha",
      name: "Dr. Carlos Rocha",
      role: "Advogado Associado",
      specialty: "Direito Laboral",
      imageUrl: carlosImg,
      bio: "Focado na defesa de direitos laborais e assessoria jurídica preventiva a PMEs. Destaca-se pela eficácia e pragmatismo na resolução de litígios.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Section Title */}
      <div className="text-center">
        <span className="text-[11px] font-bold tracking-widest text-navy-hover uppercase bg-bg-alt px-3 py-1.5 rounded-custom font-sans border border-gray-200/50">
          EQUIPA DE EXCELÊNCIA
        </span>
        <h2 className="text-3xl font-bold text-navy-main mt-3 font-serif">
          A Nossa Equipa
        </h2>
        <p className="text-sm text-text-sub mt-2 max-w-lg mx-auto font-sans">
          Profissionais altamente qualificados e dedicados à excelência na defesa dos seus direitos.
        </p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative bg-white rounded-custom border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            tabIndex={0}
            aria-label={`Perfil de ${member.name}, ${member.role}. Especialidade: ${member.specialty}. Focável para ler biografia.`}
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={member.imageUrl}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Biography overlay on hover or focus-within */}
              <div
                className="absolute inset-0 bg-navy-main text-white p-6 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-center space-y-3"
                aria-hidden="true"
              >
                <p className="font-serif text-base font-bold border-b border-white/20 pb-2">
                  {member.name}
                </p>
                <p className="text-xs text-gray-200 leading-relaxed font-sans">
                  {member.bio}
                </p>
              </div>
            </div>

            {/* Content box below image */}
            <div className="p-5 flex-grow flex flex-col justify-between border-t border-gray-100 bg-white">
              <div className="space-y-1">
                <p className="font-serif font-bold text-base text-navy-main">
                  {member.name}
                </p>
                <p className="text-xs font-semibold text-navy-hover uppercase tracking-wider font-sans">
                  {member.role}
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100/80 mt-3 text-xs text-text-sub font-sans font-medium">
                Área principal: <span className="text-text-main font-semibold">{member.specialty}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
