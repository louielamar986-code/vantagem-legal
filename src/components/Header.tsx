import { useState, MouseEvent } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Áreas de Atuação", href: "#areas" },
    { label: "Equipa", href: "#equipa" },
    { label: "Casos de Sucesso", href: "#casos" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 64; // height of the sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Optional: set focus to first interactive child for a11y
      const target = element.querySelector("button, input, textarea, select, [tabindex='0']") as HTMLElement;
      if (target) {
        setTimeout(() => target.focus({ preventScroll: true }), 800);
      }
    }
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 h-16 flex items-center justify-between px-6 lg:px-8 bg-white border-b border-gray-100 shadow-sm z-50 flex-shrink-0"
    >
      {/* Logo */}
      <a
        href="#inicio"
        onClick={(e) => handleScrollTo(e, "#inicio")}
        className="text-xl sm:text-2xl font-bold tracking-tight text-navy-main hover:text-navy-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-hover focus-visible:outline-offset-2 transition-colors rounded-custom font-serif-title"
        aria-label="Vantagem Legal - Voltar ao início"
      >
        Vantagem Legal
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-text-sub" aria-label="Navegação principal">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className={`transition-colors py-1 hover:text-navy-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-hover rounded px-1.5 ${
                isActive
                  ? "text-navy-main border-b-2 border-navy-main"
                  : "text-text-sub"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Mobile menu toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-1.5 text-navy-main hover:text-navy-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-hover rounded-custom"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-nav"
        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute top-full left-0 right-0 py-4 px-6 flex flex-col space-y-4 z-50 animate-fadeIn"
          aria-label="Navegação móvel"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-base font-semibold py-2 px-3 rounded-custom transition-colors hover:bg-bg-alt hover:text-navy-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy-hover ${
                  isActive
                    ? "text-navy-main bg-bg-alt border-l-4 border-navy-main"
                    : "text-text-sub"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
