import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "cost",
      question: "Qual é o custo da primeira consulta?",
      answer: "A primeira consulta de diagnóstico é totalmente gratuita. O nosso objetivo é analisar preliminarmente os factos do seu caso, avaliar a viabilidade da ação e explicar os caminhos legais disponíveis sem qualquer compromisso.",
    },
    {
      id: "fees",
      question: "Como funcionam os honorários da vossa consultoria?",
      answer: "Consoante a natureza e complexidade do caso, os honorários podem ser estruturados como avença mensal (ideal para PMEs), valor fixo global (contratos específicos) ou honorários por hora. Celebrámos sempre um acordo escrito antes de iniciar qualquer serviço.",
    },
    {
      id: "duration",
      question: "Quanto tempo demora a resolução de um litígio?",
      answer: "A duração depende significativamente da área do direito e dos prazos judiciais. Privilegiamos a resolução extrajudicial (mediação e acordos), que costuma resolver-se em poucas semanas. Pela via judicial, os prazos podem oscilar entre 12 a 24 meses.",
    },
    {
      id: "confidentiality",
      question: "As minhas informações estão estritamente seguras?",
      answer: "Sim. Todos os advogados da Vantagem Legal estão vinculados ao dever de sigilo profissional estabelecido pela Ordem dos Advogados. Toda a informação e documentos partilhados são confidenciais e protegidos em conformidade com o RGPD.",
    },
    {
      id: "preparation",
      question: "O que devo preparar para a primeira reunião?",
      answer: "Aconselhamos a reunir todos os documentos relevantes para a sua questão, como contratos assinados, correspondência escrita, certidões ou notificações judiciais. Quanto mais detalhada for a documentação, mais precisa será a nossa análise.",
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="text-center">
        <span className="text-[11px] font-bold tracking-widest text-navy-hover uppercase bg-bg-alt px-3 py-1.5 rounded-custom font-sans border border-gray-200/50">
          RESPOSTAS IMEDIATAS
        </span>
        <h2 className="text-3xl font-bold text-navy-main mt-3 font-serif">
          Perguntas Frequentes
        </h2>
        <p className="text-sm text-text-sub mt-2 max-w-lg mx-auto font-sans">
          Esclareça as suas principais dúvidas sobre o funcionamento do nosso apoio jurídico.
        </p>
      </div>

      {/* Accordions list */}
      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className={`bg-white rounded-custom border transition-all duration-300 ${
                isOpen ? "border-navy-main shadow-sm" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-hover focus-visible:outline-offset-[-2px] rounded-custom"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-navy-main" : "text-text-sub"}`} />
                  <span className="font-bold text-sm sm:text-base text-navy-main truncate font-sans">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-text-sub flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-navy-main" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-1 pl-12 text-sm text-text-sub leading-relaxed font-sans border-t border-gray-100 bg-gray-50/30">
                      {faq.answer}
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
