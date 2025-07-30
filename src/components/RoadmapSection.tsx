import { useState } from "react";
import { Button } from "@/components/ui/button";

const phasesData = {
  '1': {
    title: 'Fase 1 (2025): Cimientos y Comunidad',
    goal: '5,000 seguidores',
    content: `
      <p class="text-muted-foreground mb-6">El objetivo principal es construir una base sólida de seguidores locales y altamente cualificados, priorizando la calidad sobre la cantidad.</p>
      <h5 class="font-semibold mb-4 text-foreground text-lg">Acciones Clave:</h5>
      <ul class="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
        <li>Optimización de perfiles en Instagram y Facebook.</li>
        <li>Inversión inicial en fotografía y vídeo profesional de 10-15 proyectos.</li>
        <li>Implementación de un sistema proactivo para solicitar testimonios en vídeo.</li>
        <li>Uso de hashtags hiperlocales para atraer a una audiencia con alta intención de compra.</li>
        <li>Interacción manual y genuina con cuentas del ecosistema local.</li>
      </ul>
    `
  },
  '2': {
    title: 'Fase 2 (2026): Expansión y Autoridad',
    goal: '10,000 - 15,000 seguidores',
    content: `
      <p class="text-muted-foreground mb-6">El foco se desplaza hacia la expansión del alcance y el posicionamiento de la marca como una autoridad reconocida en el sector.</p>
      <h5 class="font-semibold mb-4 text-foreground text-lg">Acciones Clave:</h5>
      <ul class="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
        <li>Introducción de formatos de vídeo corto (Reels/TikToks) de carácter educativo.</li>
        <li>Colaboraciones con micro-influencers de decoración y estilo de vida.</li>
        <li>Lanzamiento de las primeras campañas de publicidad de pago en Meta.</li>
        <li>Publicación de contenido "Behind the Scenes" para humanizar la marca y generar confianza.</li>
      </ul>
    `
  },
  '3': {
    title: 'Fase 3 (2027): Liderazgo e Influencia',
    goal: '30,000 seguidores',
    content: `
      <p class="text-muted-foreground mb-6">El objetivo final es consolidar la marca como un referente nacional, optimizando los canales para la conversión directa de seguidores en clientes.</p>
      <h5 class="font-semibold mb-4 text-foreground text-lg">Acciones Clave:</h5>
      <ul class="list-disc list-inside space-y-3 text-muted-foreground leading-relaxed">
        <li>Creación de series de contenido insignia de alto valor (ej. "La Reforma del Mes").</li>
        <li>Colaboraciones estratégicas con influencers de mayor tamaño y marcas de materiales.</li>
        <li>Optimización de la conversión con lead magnets y campañas de retargeting avanzadas.</li>
        <li>Fomento activo del Contenido Generado por el Usuario (UGC) con un hashtag de marca.</li>
      </ul>
    `
  }
};

export const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState<keyof typeof phasesData>('1');

  const phases = [
    { key: '1' as const, label: 'Fase 1: Cimientos (2025)' },
    { key: '2' as const, label: 'Fase 2: Expansión (2026)' },
    { key: '3' as const, label: 'Fase 3: Liderazgo (2027)' },
  ];

  const contentPillars = [
    { percentage: '40%', title: 'Prueba de Excelencia', description: 'Proyectos "Antes y Después", House Tours. Para inspirar y demostrar calidad.' },
    { percentage: '30%', title: 'Educación y Valor', description: 'Guías, consejos, "cómo se hace". Para construir autoridad y resolver dudas.' },
    { percentage: '20%', title: 'Humanización de Marca', description: '"Detrás de las cámaras", equipo, testimonios. Para crear conexión emocional.' },
    { percentage: '10%', title: 'Interacción Comunitaria', description: 'Encuestas, Q&A, UGC. Para fomentar el engagement y la lealtad.' },
  ];

  return (
    <section id="hoja-de-ruta" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            La Hoja de Ruta Estratégica: 2025-2027
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Definimos nuestra identidad como <strong className="text-secondary">"El Artesano Digital Confiable"</strong>. 
            Un arquetipo que fusiona confianza, calidad y capacidad educativa. 
            El crecimiento se estructura en tres fases progresivas.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {phases.map((phase, index) => (
            <Button
              key={phase.key}
              onClick={() => setActivePhase(phase.key)}
              variant={activePhase === phase.key ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 animate-scale-in ${
                activePhase === phase.key 
                  ? 'bg-secondary text-secondary-foreground shadow-glow' 
                  : 'hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {phase.label}
            </Button>
          ))}
        </div>

        <div className="surface-premium p-10 min-h-[350px] mb-16 animate-slide-up">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-primary mb-4 md:mb-0">
              {phasesData[activePhase].title}
            </h3>
            <div className="bg-secondary-glow text-secondary px-4 py-2 rounded-full text-sm font-bold">
              Objetivo: {phasesData[activePhase].goal}
            </div>
          </div>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: phasesData[activePhase].content }}
          />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Pilares de Contenido Estratégico
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {contentPillars.map((pillar, index) => (
              <div 
                key={index}
                className="surface-card p-8 hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-secondary mb-4">{pillar.percentage}</div>
                <h4 className="font-bold text-lg mb-3 text-primary">{pillar.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};