import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scale, Briefcase, FileText, Users, ChevronDown } from "lucide-react";
import { PracticeArea } from "../types";

export default function PracticeAreas() {
  const [expandedId, setExpandedId] = useState<string | null>("civil");

  const areas: PracticeArea[] = [
    {
      id: "civil",
      title: "Direito Civil",
      shortDesc: "Proteção de direitos individuais, contratos e responsabilidade civil.",
      fullDesc: "Prestamos assessoria abrangente na proteção dos seus direitos individuais, patrimoniais e contratuais. A nossa atuação foca-se na prevenção de litígios, elaboração de contratos seguros e representação em processos de responsabilidade civil. Garantimos uma defesa sólida e personalizada para salvaguardar os seus interesses quotidianos.",
      iconName: "Scale",
    },
    {
      id: "empresarial",
      title: "Direito Empresarial",
      shortDesc: "Estruturação societária, conformidade e assessoria estratégica.",
      fullDesc: "Apoiamos empresas e empreendedores na estruturação de negócios estáveis, conformidade regulatória e governança corporativa. Atuamos na redação de acordos societários, fusões, aquisições e assessoria tributária estratégica para otimizar resultados. Oferecemos segurança jurídica contínua para mitigar riscos e impulsionar o crescimento do seu negócio.",
      iconName: "Briefcase",
    },
    {
      id: "laboral",
      title: "Direito Laboral",
      shortDesc: "Contratos de trabalho, processos disciplinares e mediação de conflitos.",
      fullDesc: "Asseguramos uma consultoria dedicada nas relações entre empregadores e trabalhadores, promovendo um ambiente de trabalho equilibrado e em conformidade com a legislação. Intervimos na elaboração de contratos de trabalho, reestruturações internas, processos disciplinares e resolução de conflitos laborais. Focamo-nos em soluções céleres e preventivas para ambas as partes.",
      iconName: "FileText",
    },
    {
      id: "familia",
      title: "Direito de Família",
      shortDesc: "Processos de divórcio, partilhas e responsabilidades parentais.",
      fullDesc: "Tratamos de questões sensíveis com a máxima discrição, empatia e rigor jurídico, priorizando sempre o bem-estar familiar e a proteção de menores. Oferecemos apoio em processos de divórcio, partilha de bens, regulação das responsabilidades parentais e regimes de adoção ou tutela. A nossa missão é mediar soluções consensuais, assegurando estabilidade emocional e financeira.",
      iconName: "Users",
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getIcon = (name: string, isOpen: boolean) => {
    const cls = `w-5 h-5 ${isOpen ? "text-white" : "text-navy-main"}`;
    switch (name) {
      case "Scale":
        return <Scale className={cls} />;
      case "Briefcase":
        return <Briefcase className={cls} />;
      case "FileText":
        return <FileText className={cls} />;
      case "Users":
        return <Users className={cls} />;
      default:
        return <Scale className={cls} />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Title block */}
      <div className="text-center">
        <span className="text-[11px] font-bold tracking-widest text-navy-hover uppercase bg-white px-3 py-1.5 rounded-custom font-sans border border-gray-200/50">
          ESPECIALIDADES JURÍDICAS
        </span>
        <h2 className="text-3xl font-bold text-navy-main mt-3 font-serif">
          Áreas de Atuação
        </h2>
        <p className="text-sm text-text-sub mt-2 max-w-lg mx-auto font-sans">
          Soluções jurídicas integradas, pautadas pelo rigor técnico e pela dedicação total aos nossos clientes.
        </p>
      </div>

      {/* 2x2 Grid (1 col on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {areas.map((area) => {
          const isOpen = expandedId === area.id;
          return (
            <motion.div
              key={area.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`bg-white rounded-custom border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-navy-main shadow-md"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              {/* Trigger Button */}
              <button
                onClick={() => toggleExpand(area.id)}
                aria-expanded={isOpen}
                aria-controls={`content-${area.id}`}
                className={`w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-hover focus-visible:outline-offset-[-2px] transition-colors ${
                  isOpen ? "bg-navy-main text-white" : "bg-white text-navy-main"
                }`}
              >
                <div className="flex gap-4 min-w-0">
                  <div className={`p-2.5 rounded-custom flex-shrink-0 transition-colors ${isOpen ? "bg-white/10" : "bg-[#F5F6F8]"}`}>
                    {getIcon(area.iconName, isOpen)}
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className={`font-serif text-lg font-bold truncate ${isOpen ? "text-white" : "text-navy-main"}`}>
                      {area.title}
                    </h3>
                    <p className={`text-xs font-sans line-clamp-2 leading-relaxed ${isOpen ? "text-white/80" : "text-text-sub"}`}>
                      {area.shortDesc}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 mt-3 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-white" : "text-text-sub group-hover:text-navy-main"
                  }`}
                />
              </button>

              {/* Collapsible content panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`content-${area.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 text-sm text-text-sub leading-relaxed font-sans bg-white border-t border-gray-100/60">
                      <p className="text-gray-600 font-normal">
                        {area.fullDesc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
