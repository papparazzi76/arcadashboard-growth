import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const publications = {
  '2025-8-1': {
    platform: 'Instagram, Facebook',
    theme: 'Prueba de Excelencia',
    type: 'Carrusel (Feed)',
    format: 'Imágenes de alta calidad',
    copy: '¡Empezamos agosto con una transformación espectacular! ☀️ Desliza para ver el antes y después de esta cocina en Valladolid. De un espacio oscuro y anticuado a un centro de luz y vida familiar. ✨',
    cta: '¿Qué te parece el cambio? ¡Cuéntanos en los comentarios! 👇',
    hashtags: '#reformasvalladolid #diseñodecocinas #antesydespues #reformasintegrales #decoracion #interiordesign #arcagrupocarranza',
    kpis: 'Alcance: 2.5k, Interacciones: 150, Clics al perfil: 20'
  },
  '2025-8-4': {
    platform: 'Instagram (Reel), TikTok',
    theme: 'Educación y Valor',
    type: 'Reel',
    format: 'Vídeo corto',
    copy: '3 errores que DEBES EVITAR al elegir la encimera de tu cocina. ¡El número 2 te sorprenderá! 🤯 #TipsDeReformas',
    cta: 'Guarda este vídeo para tu futura reforma. 😉',
    hashtags: '#consejoreforma #diseñointeriores #cocinasmodernas #erroresdecoracion #arcatips',
    kpis: 'Visualizaciones: 5k, Guardados: 100, Compartidos: 25'
  },
  '2025-8-7': {
    platform: 'Instagram (Stories)',
    theme: 'Humanización de Marca',
    type: 'Stories',
    format: 'Vídeo corto / Fotos',
    copy: '¡Día de visita a obra! 👷‍♂️ Acompañad a nuestro arquitecto Miguel mientras supervisa los avances de la reforma integral en Burgos. ¡Esto empieza a tomar forma!',
    cta: 'Responde a esta historia: ¿Qué es lo que más te gusta ver del proceso de una obra?',
    hashtags: '#diariodeobra #reformasburgos #equiposrca #arquitectura #construccion',
    kpis: 'Alcance: 1k, Interacciones (respuestas/clics): 50'
  },
  '2025-9-5': {
    platform: 'Instagram (Reel), TikTok',
    theme: 'Educación y Valor',
    type: 'Reel',
    format: 'Vídeo corto (How-to)',
    copy: '¿Parquet o microcemento? 🤔 Te explicamos las ventajas y desventajas de cada uno para que elijas la mejor opción para tu casa. #DebateDecoración',
    cta: 'Y tú, ¿de qué equipo eres? ¡Vota en los comentarios!',
    hashtags: '#suelos #parquet #microcemento #diseñointeriores #reformaintegral #arcatips',
    kpis: 'Visualizaciones: 6k, Comentarios: 80, Guardados: 150'
  }
};

export const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7, 1)); // August 2025
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                     "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const openModal = (dateStr: string) => {
    if (publications[dateStr as keyof typeof publications]) {
      setSelectedPost(dateStr);
      setIsModalOpen(true);
    }
  };

  const changeMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    if (newDate >= new Date(2025, 7, 1) && newDate <= new Date(2025, 11, 1)) {
      setCurrentDate(newDate);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderCalendar = () => {
    const days = [];
    
    // Add day headers
    dayNames.forEach(day => {
      days.push(
        <div key={day} className="font-bold text-sm text-muted-foreground p-2 text-center">
          {day}
        </div>
      );
    });

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const hasPost = publications[dateStr as keyof typeof publications];
      
      days.push(
        <div 
          key={day}
          className={`calendar-day border rounded-lg p-3 h-20 flex items-center justify-center cursor-pointer transition-all duration-300 ${
            hasPost 
              ? 'bg-secondary-glow border-secondary/30 hover:bg-secondary/20 hover:shadow-lg hover:scale-105' 
              : 'bg-accent hover:bg-accent/60'
          }`}
          onClick={() => hasPost && openModal(dateStr)}
        >
          <span className={`text-sm font-medium ${hasPost ? 'text-secondary' : 'text-muted-foreground'}`}>
            {day}
          </span>
        </div>
      );
    }

    return days;
  };

  const selectedPublication = selectedPost ? publications[selectedPost as keyof typeof publications] : null;

  return (
    <section id="calendario" className="py-24 bg-surface-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Calendario de Contenidos (Fase 1)
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Planificación de publicaciones de agosto a diciembre de 2025. 
            Haz clic en un día para ver los detalles de la publicación programada.
          </p>
        </div>

        <div className="surface-premium p-8 max-w-4xl mx-auto animate-slide-up">
          <div className="flex justify-between items-center mb-8">
            <Button 
              onClick={() => changeMonth(-1)}
              variant="outline"
              className="px-6 py-2 hover:scale-105 transition-transform"
              disabled={currentDate <= new Date(2025, 7, 1)}
            >
              ← Anterior
            </Button>
            <h3 className="text-2xl font-bold text-primary">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <Button 
              onClick={() => changeMonth(1)}
              variant="outline"
              className="px-6 py-2 hover:scale-105 transition-transform"
              disabled={currentDate >= new Date(2025, 11, 1)}
            >
              Siguiente →
            </Button>
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {renderCalendar()}
          </div>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedPublication && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-primary">
                    Publicación del {selectedPost && formatDate(selectedPost)}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-muted-foreground block text-sm">Plataforma/s:</strong>
                      <span className="text-primary font-semibold">{selectedPublication.platform}</span>
                    </div>
                    <div>
                      <strong className="text-muted-foreground block text-sm">Tipo:</strong>
                      <span className="text-primary font-semibold">{selectedPublication.type}</span>
                    </div>
                    <div>
                      <strong className="text-muted-foreground block text-sm">Pilar Temático:</strong>
                      <span className="text-primary font-semibold">{selectedPublication.theme}</span>
                    </div>
                    <div>
                      <strong className="text-muted-foreground block text-sm">Formato:</strong>
                      <span className="text-primary font-semibold">{selectedPublication.format}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <strong className="text-muted-foreground block mb-2 text-sm">Copy de la Publicación:</strong>
                    <div className="bg-accent p-4 rounded-lg">
                      <p className="whitespace-pre-wrap text-foreground">{selectedPublication.copy}</p>
                    </div>
                  </div>
                  
                  <div>
                    <strong className="text-muted-foreground block mb-2 text-sm">Llamada a la Acción (CTA):</strong>
                    <p className="italic text-secondary font-medium">{selectedPublication.cta}</p>
                  </div>
                  
                  <div>
                    <strong className="text-muted-foreground block mb-2 text-sm">Hashtags:</strong>
                    <p className="text-sm text-muted-foreground">{selectedPublication.hashtags}</p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <strong className="text-muted-foreground block mb-2 text-sm">Resultados Esperados (KPIs):</strong>
                    <p className="font-semibold text-primary">{selectedPublication.kpis}</p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};