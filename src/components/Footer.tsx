import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F6F8] border-t border-gray-200/80 pt-16 pb-12 w-full mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-gray-200">
          {/* Column 1: Brand & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-xl font-bold tracking-tight text-navy-main">
              Vantagem Legal
            </span>
            <p className="text-sm text-text-sub max-w-sm leading-relaxed font-sans">
              Prestamos serviços de consultoria e representação jurídica pautados pela transparência, pelo rigor técnico e por um profundo compromisso com o sucesso e segurança dos nossos clientes.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="#facebook"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-text-sub hover:text-white hover:bg-navy-main hover:border-navy-main transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-text-sub hover:text-white hover:bg-navy-main hover:border-navy-main transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-text-sub hover:text-white hover:bg-navy-main hover:border-navy-main transition-all duration-200"
                aria-label="Linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-text-sub hover:text-white hover:bg-navy-main hover:border-navy-main transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Points */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-navy-main uppercase tracking-wider">
              Contactos
            </h4>
            <ul className="space-y-3 text-sm text-text-sub font-sans">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-navy-main flex-shrink-0" />
                <a href="tel:+351213456789" className="hover:text-navy-main transition-colors">
                  +351 213 456 789
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-navy-main flex-shrink-0" />
                <a href="mailto:geral@vantagemlegal.pt" className="hover:text-navy-main transition-colors">
                  geral@vantagemlegal.pt
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Address & Hours */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-navy-main uppercase tracking-wider">
              Horário & Localização
            </h4>
            <ul className="space-y-3 text-sm text-text-sub font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-navy-main flex-shrink-0 mt-0.5" />
                <span>
                  Av. da Liberdade, 180, 4º Esq<br />
                  1250-142 Lisboa, Portugal
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-navy-main flex-shrink-0" />
                <span>Segunda a Sexta, 8h - 17h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright area */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-text-sub font-sans gap-4">
          <p>
            &copy; {currentYear} Vantagem Legal Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-navy-main transition-colors">
              Política de Privacidade
            </a>
            <a href="#terms" className="hover:text-navy-main transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
