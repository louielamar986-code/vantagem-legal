import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";
import { ContactFormState } from "../types";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });

  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Email format validation helper
  const validateEmail = (email: string) => {
    if (!email) return null;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? null : "Por favor, introduza um endereço de email válido.";
  };

  // Real-time validation handler
  useEffect(() => {
    const emailErr = validateEmail(form.email);
    setEmailError(emailErr);

    const isNameValid = form.name.trim().length > 0;
    const isEmailValid = form.email.trim().length > 0 && emailErr === null;
    const isAreaValid = form.area !== "";
    const isMessageValid = form.message.trim().length >= 10;

    setIsValid(isNameValid && isEmailValid && isAreaValid && isMessageValid);
  }, [form]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      area: "",
      message: "",
    });
    setIsSubmitted(false);
  };  return (
    <div className="bg-white border border-gray-200/80 rounded-custom p-6 sm:p-10 shadow-sm max-w-2xl mx-auto">
      {/* Title block */}
      <div className="text-center mb-8">
        <span className="text-[11px] font-bold tracking-widest text-navy-hover uppercase bg-bg-alt px-3 py-1.5 rounded-custom font-sans border border-gray-200/50">
          MARCAÇÃO DE CONSULTA
        </span>
        <h2 className="text-3xl font-bold text-navy-main mt-3 font-serif">
          Contacto
        </h2>
        <p className="text-sm text-text-sub mt-2 max-w-md mx-auto font-sans">
          Envie-nos a sua questão. Um advogado especialista analisará o seu caso e responderá em menos de 24 horas úteis.
        </p>
      </div>

      <div>
        {isSubmitted ? (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="inline-flex items-center justify-center bg-green-50 text-green-600 p-3 rounded-full mb-1">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-navy-main font-serif">
              Contacto Recebido!
            </h3>
            <div className="text-text-sub text-sm font-sans space-y-2 max-w-md mx-auto leading-relaxed">
              <p>
                Agradecemos o seu contacto, <strong>{form.name}</strong>.
              </p>
              <p>
                Enviámos uma confirmação para <strong>{form.email}</strong>. Entraremos em contacto muito em breve.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={handleReset}
                className="text-xs font-bold text-navy-main hover:text-navy-hover border border-navy-main hover:bg-bg-alt px-5 py-2.5 rounded-custom transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-hover cursor-pointer font-sans"
              >
                Enviar Nova Mensagem
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-bold text-navy-main font-sans uppercase tracking-wider">
                Nome Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Ex: Maria Antónia Silva"
                className="w-full p-3 bg-[#F5F6F8] border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-navy-main font-sans transition-colors placeholder:text-gray-400"
                aria-required="true"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 relative">
                <label htmlFor="email" className="block text-xs font-bold text-navy-main font-sans uppercase tracking-wider">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Ex: maria.silva@email.com"
                  className={`w-full p-3 bg-[#F5F6F8] border rounded-custom text-sm focus:outline-none focus:ring-1 font-sans transition-colors placeholder:text-gray-400 ${
                    emailError
                      ? "border-red-300 focus:ring-red-400"
                      : "border-gray-200 focus:ring-navy-main"
                  }`}
                  aria-required="true"
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? "email-error" : undefined}
                />
                {emailError && (
                  <p id="email-error" className="text-xs text-red-500 mt-1.5 leading-tight">
                    {emailError}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="block text-xs font-bold text-navy-main font-sans uppercase tracking-wider">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Ex: 912 345 678"
                  className="w-full p-3 bg-[#F5F6F8] border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-navy-main font-sans transition-colors placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Dropdown for Interest Area */}
            <div className="space-y-1.5">
              <label htmlFor="area" className="block text-xs font-bold text-navy-main font-sans uppercase tracking-wider">
                Área jurídica de interesse <span className="text-red-500">*</span>
              </label>
              <select
                id="area"
                name="area"
                value={form.area}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[#F5F6F8] border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-navy-main font-sans transition-colors text-text-main"
                aria-required="true"
              >
                <option value="" disabled>
                  Selecione a área jurídica pretendida
                </option>
                <option value="Direito Civil">Direito Civil</option>
                <option value="Direito Empresarial">Direito Empresarial</option>
                <option value="Direito Laboral">Direito Laboral</option>
                <option value="Direito de Família">Direito de Família</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-bold text-navy-main font-sans uppercase tracking-wider">
                Mensagem <span className="text-red-500">*</span>{" "}
                <span className="text-[10px] font-normal text-text-sub normal-case">(Mínimo 10 caracteres)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Descreva sumariamente o seu caso..."
                className="w-full p-3 bg-[#F5F6F8] border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-navy-main font-sans transition-colors resize-none placeholder:text-gray-400"
                aria-required="true"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-3.5 rounded-custom font-bold text-sm transition-all duration-200 cursor-pointer ${
                isValid
                  ? "bg-navy-main text-white hover:bg-navy-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-hover focus-visible:outline-offset-2"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-100"
              }`}
            >
              Enviar Mensagem
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
