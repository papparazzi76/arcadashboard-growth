import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration } from "chart.js/auto";

export const MarketSection = () => {
  const visadosRef = useRef<HTMLCanvasElement>(null);
  const motivacionRef = useRef<HTMLCanvasElement>(null);
  const fuentesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const chartColors = {
      primary: 'hsl(20, 75%, 52%)', // Arca Orange
      primaryBg: 'rgba(227, 114, 34, 0.2)',
      secondary: 'hsl(204, 21%, 25%)', // Arca Blue
      secondaryBg: 'rgba(55, 66, 74, 0.2)',
      neutral: 'rgba(173, 181, 189, 0.8)',
      neutralBg: 'rgba(173, 181, 189, 0.2)',
    };

    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom' as const,
          labels: {
            padding: 20,
            color: '#343a40',
            font: { family: "'Inter', 'Verdana', sans-serif" }
          }
        },
        tooltip: {
          backgroundColor: '#FFFFFF',
          titleColor: '#343a40',
          bodyColor: '#343a40',
          borderColor: '#E5E7EB',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: function(context: any) {
              let label = context.dataset.label || '';
              if (label) label += ': ';
              if (context.parsed.y !== null) label += context.parsed.y + '%';
              return label;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: '#F1F3F5' },
          ticks: { color: '#6C757D' }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#6C757D' }
        }
      }
    };

    // Visados Chart
    if (visadosRef.current) {
      new Chart(visadosRef.current, {
        type: 'bar',
        data: {
          labels: ['Visados de Reforma', 'Visados Obra Nueva'],
          datasets: [{
            label: 'Incremento 2024 vs 2023',
            data: [7.3, 16.7],
            backgroundColor: [chartColors.primaryBg, chartColors.secondaryBg],
            borderColor: [chartColors.primary, chartColors.secondary],
            borderWidth: 2,
            borderRadius: 8
          }]
        },
        options: { ...defaultOptions, plugins: { ...defaultOptions.plugins, legend: { display: false } } }
      });
    }

    // Motivación Chart
    if (motivacionRef.current) {
      new Chart(motivacionRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Necesidad Imperiosa', 'Deseo de Mejora'],
          datasets: [{
            data: [48, 52],
            backgroundColor: [chartColors.secondary, chartColors.primary],
            borderColor: '#FFFFFF',
            borderWidth: 4
          }]
        },
        options: {
          ...defaultOptions,
          scales: undefined,
          cutout: '60%'
        }
      });
    }

    // Fuentes Chart
    if (fuentesRef.current) {
      new Chart(fuentesRef.current, {
        type: 'bar',
        data: {
          labels: ['Búsqueda en Internet', 'Recomendación Personal'],
          datasets: [{
            label: 'Fuente de Información',
            data: [40, 38],
            backgroundColor: [chartColors.primaryBg, chartColors.neutralBg],
            borderColor: [chartColors.primary, chartColors.neutral],
            borderWidth: 2,
            borderRadius: 8
          }]
        },
        options: { ...defaultOptions, plugins: { ...defaultOptions.plugins, legend: { display: false } } }
      });
    }
  }, []);

  return (
    <section id="mercado" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Radiografía del Mercado Español
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            El sector de las reformas muestra un mercado polarizado. Aunque menos hogares reforman, 
            los que lo hacen invierten más en proyectos de mayor calado, impulsados por la necesidad 
            y la búsqueda de eficiencia energética.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="surface-card p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-bold text-xl mb-4 text-primary">Dinamismo del Sector</h3>
            <p className="text-muted-foreground mb-6">
              Los visados de obra nueva y rehabilitación crecieron un 7% en 2024, 
              con un notable impulso en el sector residencial.
            </p>
            <div className="chart-container">
              <canvas ref={visadosRef}></canvas>
            </div>
          </div>

          <div className="surface-card p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-bold text-xl mb-4 text-primary">Motivación del Consumidor</h3>
            <p className="text-muted-foreground mb-6">
              La decisión de reformar se divide casi por igual entre la necesidad 
              funcional y el deseo de mejora estética y de confort.
            </p>
            <div className="chart-container">
              <canvas ref={motivacionRef}></canvas>
            </div>
          </div>

          <div className="surface-card p-8 animate-slide-up md:col-span-2 lg:col-span-1" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-bold text-xl mb-4 text-primary">Fuentes de Información</h3>
            <p className="text-muted-foreground mb-6">
              A pesar de la creciente digitalización, la recomendación personal mantiene 
              un peso casi idéntico al de la búsqueda online.
            </p>
            <div className="chart-container">
              <canvas ref={fuentesRef}></canvas>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary-glow border border-secondary/30 p-8 rounded-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="font-bold text-xl mb-4 text-secondary flex items-center">
              <span className="text-2xl mr-3">⚠️</span>
              El Déficit de Confianza
            </h4>
            <p className="text-foreground/80 leading-relaxed">
              El miedo a retrasos, sobrecostes y malos acabados es el mayor freno para el cliente. 
              La prueba social (reseñas, testimonios) y las garantías contractuales son cruciales. 
              La estrategia debe centrarse en construir y demostrar fiabilidad de manera sistemática.
            </p>
          </div>

          <div className="bg-accent border border-border p-8 rounded-2xl animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h4 className="font-bold text-xl mb-4 text-primary flex items-center">
              <span className="text-2xl mr-3">💡</span>
              La Paradoja de Pinterest
            </h4>
            <p className="text-foreground/80 leading-relaxed">
              Los clientes llegan con expectativas poco realistas basadas en imágenes online. 
              Existe una oportunidad clave en posicionarse como "traductor experto", que adapta 
              la inspiración a la realidad del espacio y el presupuesto del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};