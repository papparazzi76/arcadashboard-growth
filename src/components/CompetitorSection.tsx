import { useState } from "react";
import { Button } from "@/components/ui/button";

const competitorsData = {
  lider: {
    title: 'El Líder Nacional: Aquí tu Reforma',
    content: `
      <p class="text-muted-foreground mb-4">Opera a gran escala bajo un modelo de franquicia, con fuerte inversión en branding y tecnología. Su estrategia es omnicanal y busca un alcance masivo.</p>
      <h5 class="font-semibold mb-3 text-foreground">Puntos Clave:</h5>
      <ul class="list-disc list-inside space-y-3 text-muted-foreground">
        <li><strong>Fortalezas:</strong> Gran alcance, consistencia de marca, modelo escalable, CTAs claros en redes. Dominan TikTok con contenido viral.</li>
        <li><strong>Debilidades:</strong> Reputación online mixta por problemas de gestión, comunicación a veces genérica y percibida como impersonal.</li>
        <li><strong>Lección Estratégica:</strong> La escala atrae, pero la calidad del servicio es vital para la reputación a largo plazo.</li>
      </ul>
    `
  },
  premium: {
    title: 'El Especialista Premium: ARTY Cocinas & Obras',
    content: `
      <p class="text-muted-foreground mb-4">Se posiciona en el segmento de alta gama, especializándose en cocinas y baños. Su estrategia se basa en la calidad de materiales y alianzas con marcas de prestigio.</p>
      <h5 class="font-semibold mb-3 text-foreground">Puntos Clave:</h5>
      <ul class="list-disc list-inside space-y-3 text-muted-foreground">
        <li><strong>Fortalezas:</strong> Posicionamiento claro y coherente, sólida reputación online (4.8 en Google), credibilidad por asociación con marcas líderes como Santos.</li>
        <li><strong>Debilidades:</strong> Alcance en redes más limitado, contenido de alta calidad pero poco diversificado y con menor interacción.</li>
        <li><strong>Lección Estratégica:</strong> La especialización y la reputación son activos potentísimos para atraer a un nicho de alto valor.</li>
      </ul>
    `
  },
  influencer: {
    title: 'El Arquetipo del Influencer: Natalia Zubizarreta',
    content: `
      <p class="text-muted-foreground mb-4">El negocio se construye en torno a la marca personal de su fundadora. Vende un estilo de vida y una filosofía de diseño, no solo un servicio.</p>
      <h5 class="font-semibold mb-3 text-foreground">Puntos Clave:</h5>
      <ul class="list-disc list-inside space-y-3 text-muted-foreground">
        <li><strong>Fortalezas:</strong> Comunidad masiva y extremadamente fiel en Instagram (350k), credibilidad inmensa, conexión emocional profunda con la audiencia.</li>
        <li><strong>Debilidades:</strong> Estrategia personalista y no replicable para una empresa, modelo de negocio deliberadamente no escalable (solo reformas integrales).</li>
        <li><strong>Lección Estratégica:</strong> El poder de la narrativa y la marca personal para generar una confianza y un deseo inigualables.</li>
      </ul>
    `
  },
  local: {
    title: 'Los Campeones Locales: tAs Obras & La Reina Obrera',
    content: `
      <p class="text-muted-foreground mb-4">PYMES que compiten eficazmente a través de la hiper-especialización, atacando los puntos de dolor clave del cliente: la confianza y el diseño de calidad.</p>
      <h5 class="font-semibold mb-3 text-foreground">Puntos Clave:</h5>
      <ul class="list-disc list-inside space-y-3 text-muted-foreground">
        <li><strong>Fortalezas (tAs):</strong> Foco absoluto en la prueba social. Usan testimonios reales para generar una confianza local muy fuerte, atacando el "déficit de confianza".</li>
        <li><strong>Fortalezas (La Reina Obrera):</strong> Prestigio basado en el reconocimiento de la industria (premios, prensa) y una filosofía de diseño clara. Usan Houzz para conectar con un público experto.</li>
        <li><strong>Lección Estratégica:</strong> No es necesario competir en volumen. El éxito se puede construir en un nicho de valor muy específico.</li>
      </ul>
    `
  }
};

export const CompetitorSection = () => {
  const [activeCompetitor, setActiveCompetitor] = useState<keyof typeof competitorsData>('lider');

  const competitors = [
    { key: 'lider' as const, title: 'El Líder Nacional', subtitle: 'Ej: Aquí tu Reforma' },
    { key: 'premium' as const, title: 'El Especialista Premium', subtitle: 'Ej: ARTY Cocinas' },
    { key: 'influencer' as const, title: 'El Influencer', subtitle: 'Ej: Natalia Zubizarreta' },
    { key: 'local' as const, title: 'Los Campeones Locales', subtitle: 'Ej: tAs Obras, La Reina Obrera' },
  ];

  return (
    <section id="competencia" className="py-24 bg-surface-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Análisis del Panorama Competitivo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            El mercado está compuesto por diversos arquetipos, desde grandes franquicias hasta 
            influencers y especialistas locales. Analizar sus fortalezas y debilidades nos permite 
            definir un posicionamiento único y diferenciado.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 space-y-4">
            {competitors.map((competitor, index) => (
              <Button
                key={competitor.key}
                onClick={() => setActiveCompetitor(competitor.key)}
                variant={activeCompetitor === competitor.key ? "default" : "outline"}
                className={`w-full text-left p-6 h-auto justify-start animate-slide-up transition-all duration-300 ${
                  activeCompetitor === competitor.key 
                    ? 'bg-primary text-primary-foreground shadow-elegant scale-105' 
                    : 'surface-card hover:shadow-lg hover:scale-102'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <h4 className="font-bold text-lg mb-1">{competitor.title}</h4>
                  <p className="text-sm opacity-80">{competitor.subtitle}</p>
                </div>
              </Button>
            ))}
          </div>

          <div className="lg:w-2/3 surface-premium p-8 min-h-[400px] animate-scale-in">
            <h3 className="text-2xl font-bold text-primary mb-6">
              {competitorsData[activeCompetitor].title}
            </h3>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: competitorsData[activeCompetitor].content }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};