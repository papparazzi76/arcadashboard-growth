export const InvestmentSection = () => {
  const digitalAdData = [
    { label: "Presupuesto Inicial", value: "500€ - 1,000€ / mes", highlight: true },
    { label: "CPC Estimado (Tráfico)", value: "0,40€ - 1,20€", highlight: false },
    { label: "CPM Estimado (Notoriedad)", value: "5€ - 10€", highlight: false },
  ];

  const influencerData = [
    { label: "Presupuesto Anual", value: "2,000€ - 5,000€", highlight: true },
    { label: "Tarifa Micro-Influencer", value: "100€ - 300€ / post", highlight: false },
    { label: "Tarifa Influencer Medio", value: "300€ - 1,000€+ / post", highlight: false },
  ];

  return (
    <section id="inversion" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Plan de Inversión y Recursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            El crecimiento sostenido requiere una inversión estratégica en publicidad digital 
            y colaboraciones con influencers, especialmente a partir de la Fase 2.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="surface-premium p-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-6">
              <div className="text-3xl mr-4">📱</div>
              <h3 className="text-2xl font-bold text-primary">Publicidad Digital (Meta Ads)</h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Presupuesto mensual recomendado a partir de la Fase 2 para campañas de 
              notoriedad, tráfico y conversión.
            </p>
            <div className="space-y-6">
              {digitalAdData.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-4 px-6 bg-accent/50 rounded-lg border border-border/30 transition-all duration-300 hover:shadow-md"
                >
                  <span className="font-medium text-foreground">{item.label}</span>
                  <span className={`font-bold text-lg ${
                    item.highlight ? 'text-secondary' : 'text-primary'
                  }`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-premium p-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-6">
              <div className="text-3xl mr-4">🤝</div>
              <h3 className="text-2xl font-bold text-primary">Marketing de Influencia</h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Inversión anual flexible para colaboraciones auténticas, priorizando 
              micro-influencers locales alineados con la marca.
            </p>
            <div className="space-y-6">
              {influencerData.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-4 px-6 bg-accent/50 rounded-lg border border-border/30 transition-all duration-300 hover:shadow-md"
                >
                  <span className="font-medium text-foreground">{item.label}</span>
                  <span className={`font-bold text-lg ${
                    item.highlight ? 'text-secondary' : 'text-primary'
                  }`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="surface-card p-8 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-primary mb-4 flex items-center justify-center">
              <span className="text-2xl mr-3">💡</span>
              Recomendación Estratégica
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              La inversión debe ser gradual y basada en datos. Comenzar con presupuestos 
              conservadores en la Fase 1, midiendo ROI y escalando en las siguientes fases. 
              Priorizar siempre la autenticidad sobre el alcance masivo, especialmente en 
              las colaboraciones con influencers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};