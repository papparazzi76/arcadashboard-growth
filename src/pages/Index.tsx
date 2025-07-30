import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MarketSection } from "@/components/MarketSection";
import { CompetitorSection } from "@/components/CompetitorSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { CalendarSection } from "@/components/CalendarSection";
import { InvestmentSection } from "@/components/InvestmentSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "mercado", "competencia", "hoja-de-ruta", "calendario", "inversion"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border/50 shadow-card">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/7bfff763-7eba-46b7-964e-c871702cee8c.png" 
              alt="Arca Grupo Carranza" 
              className="h-12 w-auto" 
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: "mercado", label: "Mercado" },
              { id: "competencia", label: "Competencia" },
              { id: "hoja-de-ruta", label: "Hoja de Ruta" },
              { id: "calendario", label: "Calendario" },
              { id: "inversion", label: "Inversión" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? "bg-secondary text-secondary-foreground" 
                    : "hover:bg-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-gradient-hero text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
              Estrategia de Crecimiento
              <br />
              <span className="text-secondary-glow">Digital</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Un análisis interactivo del mercado de reformas en España y un plan estratégico 
              para construir una comunidad de <strong className="text-secondary-glow">30,000 seguidores</strong> para finales de 2027.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
              {[
                { number: "5k", period: "Fin 2025", active: false },
                { number: "15k", period: "2026", active: false },
                { number: "30k", period: "Fin 2027", active: true }
              ].map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <div className={`text-center animate-scale-in p-6 rounded-2xl backdrop-blur-sm ${
                    milestone.active 
                      ? "bg-secondary/20 shadow-glow" 
                      : "bg-surface/10"
                  }`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <p className={`text-4xl md:text-5xl font-bold mb-2 ${
                      milestone.active ? "text-secondary-glow" : "text-primary-foreground"
                    }`}>
                      {milestone.number}
                    </p>
                    <p className="text-sm text-primary-foreground/80 font-medium">{milestone.period}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block text-3xl text-primary-foreground/60 mx-8">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Button 
              onClick={() => scrollToSection("mercado")}
              size="lg"
              className="btn-secondary px-8 py-4 text-lg font-semibold rounded-full shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Explorar Estrategia
            </Button>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <MarketSection />

      {/* Competitor Section */}
      <CompetitorSection />

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Calendar Section */}
      <CalendarSection />

      {/* Investment Section */}
      <InvestmentSection />

      {/* Footer */}
      <footer className="surface-hero text-primary-foreground mt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <img 
              src="/lovable-uploads/7bfff763-7eba-46b7-964e-c871702cee8c.png" 
              alt="Arca Grupo Carranza" 
              className="h-20 mx-auto mb-8 brightness-0 invert" 
            />
            <h3 className="text-3xl font-bold mb-6">Medición del Éxito: KPIs Clave</h3>
            <p className="text-xl text-primary-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              El éxito se medirá mensualmente a través de un panel de control para optimizar 
              la estrategia de forma continua, asegurando que cada acción contribuya a los objetivos.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {[
                "Tasa de Crecimiento",
                "Tasa de Interacción", 
                "Alcance e Impresiones",
                "Clics al Sitio Web",
                "Leads Cualificados",
                "CPC / CPL"
              ].map((kpi, index) => (
                <div 
                  key={index}
                  className="bg-surface/10 backdrop-blur-sm px-4 py-3 rounded-full text-sm font-medium border border-primary-foreground/20 hover:bg-surface/20 transition-all duration-300"
                >
                  {kpi}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;