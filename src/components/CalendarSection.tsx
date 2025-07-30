import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const publications = {
  '2025-08-01': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: '¡Empezamos agosto con una transformación espectacular! ☀️ Desliza para ver el antes y después de esta cocina en Valladolid. De un espacio oscuro y anticuado a un centro de luz y vida familiar. ✨', cta: '¿Qué te parece el cambio? ¡Cuéntanos en los comentarios! 👇', hashtags: '#reformasvalladolid #diseñodecocinas #antesydespues #reformasintegrales #decoracion #interiordesign #arcagrupocarranza', kpis: 'Alcance: 2.5k, Interacciones: 150, Clics al perfil: 20' },
  '2025-08-02': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Infografía/Imágenes', copy: '¿Pensando en reformar este otoño? 🍂 ¡Es el momento perfecto para planificar! Te dejamos 5 pasos clave para empezar con buen pie. 1. Define tus necesidades. 2. Fija un presupuesto realista...', cta: 'Guarda este post y empieza a soñar con tu nuevo hogar. 🏡', hashtags: '#planificarreforma #reformasotoño #diseñointeriores #hogar #arcagrupocarranza', kpis: 'Alcance: 1.8k, Interacciones: 120, Guardados: 80' },
  '2025-08-03': { theme: 'Prueba de Excelencia', platform: 'Instagram', type: 'Feed', format: 'Imagen única de detalle', copy: 'Domingos de calma y luz. ✨ Nos perdemos en los detalles de este baño que entregamos en Palencia. La combinación de la madera natural y el blanco puro nunca falla. #PazEnElHogar', cta: 'Doble toque si te gustaría relajarte aquí. ❤️', hashtags: '#diseñodebaños #relax #domingo #interiorismo #reformaspalencia #detallesquemarcanladiferencia', kpis: 'Alcance: 2.2k, Interacciones: 250, Comentarios: 15' },
  '2025-08-04': { theme: 'Prueba de Excelencia', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo Antes y Después', copy: '¡Lunes de transformación! Así convertimos un pasillo largo y oscuro en un espacio funcional y lleno de luz con soluciones de carpintería a medida. 🚪✨', cta: '¿Necesitas aprovechar mejor un espacio difícil? ¡Te leemos!', hashtags: '#reformasburgos #antesydespues #carpinteriaamedida #solucionesparaelhogar #diseñointeligente', kpis: 'Visualizaciones: 7k, Interacciones: 300, Guardados: 50' },
  '2025-08-05': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Feed', format: 'Tip Rápido (Imagen + Texto)', copy: 'Tip del día: ¿Sabías que pintar el techo de un color ligeramente más claro que las paredes puede hacer que una habitación parezca más alta? ¡Un truco de profesional para ganar amplitud visual!', cta: 'Guarda este tip para tu próxima reforma. 😉', hashtags: '#arcatips #trucosdecoracion #pintura #interiorismo #amplitudvisual #consejoreforma', kpis: 'Alcance: 1.5k, Interacciones: 100, Guardados: 90' },
  '2025-08-06': { theme: 'Humanización de Marca', platform: 'Instagram (Stories)', type: 'Stories', format: 'Vídeo corto', copy: 'Hoy en la oficina, el equipo de diseño está debatiendo sobre la nueva paleta de materiales para un proyecto en Valladolid. ¡Pura inspiración en marcha! 💡', cta: '¿Qué material no puede faltar en la casa de tus sueños?', hashtags: '#equiposrca #diseñadores #proceso_creativo #materialesdeconstruccion #reformasvalladolid', kpis: 'Alcance: 1.2k, Interacciones (respuestas/clics): 40' },
  '2025-08-07': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: 'Un salón para vivirlo. En este proyecto en Burgos, integramos la terraza para crear un espacio diáfano y versátil, perfecto para disfrutar en cualquier época del año. Desliza para ver todos los ángulos.', cta: 'Si pudieras cambiar algo de tu salón, ¿qué sería? ¡Cuéntanos!', hashtags: '#reformasintegrales #salonesmodernos #diseñodesalones #reformasburgos #espaciosabiertos #decoraciondeinteriores', kpis: 'Alcance: 2.8k, Interacciones: 180, Clics al perfil: 25' },
  '2025-08-08': { theme: 'Interacción Comunitaria', platform: 'Instagram (Stories)', type: 'Stories (Encuesta)', format: 'Sticker de Encuesta', copy: '¡Viernes de debate! Para una cocina moderna, ¿qué prefieres?', cta: 'Opción A: Tiradores integrados (minimalista) vs. Opción B: Tiradores decorativos (con carácter). ¡VOTA!', hashtags: '#encuestadeco #cocinas #diseñodecocinas #debatereformas #interiorismo', kpis: 'Alcance: 1.5k, Votos totales: 500' },
  '2025-08-09': { theme: 'Educación y Valor', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo corto (How-to)', copy: '¿Cómo calculamos el presupuesto de tu reforma? 🧐 Te lo explicamos en 30 segundos. ¡Transparencia total desde el primer día!', cta: '¿Quieres un presupuesto detallado y sin sorpresas? ¡Link en bio!', hashtags: '#presupuestoreforma #transparencia #reformasintegrales #construccion #arcagrupocarranza', kpis: 'Visualizaciones: 4.5k, Interacciones: 200, Clics al enlace: 10' },
  '2025-08-10': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Vídeo (Feed)', format: 'Testimonio en vídeo', copy: 'La opinión de nuestros clientes es nuestra mayor garantía. ❤️ Escucha la experiencia de Ana y Javier tras la reforma de su vivienda con nosotros. ¡Gracias por vuestra confianza!', cta: '¿Tú también quieres vivir una experiencia así? Pide tu presupuesto sin compromiso en el enlace de la bio. 🔗', hashtags: '#clientessatisfechos #testimoniosreales #confianza #calidad #reformasconalma #arcagrupocarranza', kpis: 'Visualizaciones: 3k, Interacciones: 120, Clics al enlace: 15' },
  '2025-08-11': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Vídeo (Feed)', format: 'Testimonio en vídeo', copy: 'La opinión de nuestros clientes es nuestra mayor garantía. ❤️ Escucha la experiencia de Ana y Javier tras la reforma de su vivienda con nosotros. ¡Gracias por vuestra confianza!', cta: '¿Tú también quieres vivir una experiencia así? Pide tu presupuesto sin compromiso en el enlace de la bio. 🔗', hashtags: '#clientessatisfechos #testimoniosreales #confianza #calidad #reformasconalma #arcagrupocarranza', kpis: 'Visualizaciones: 3k, Interacciones: 120, Clics al enlace: 15' },
  '2025-08-12': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Feed', format: 'Tip Rápido (Imagen + Texto)', copy: '¿Luz cálida, neutra o fría? 💡 Cada estancia de tu casa tiene una necesidad de iluminación diferente. Te contamos cuál usar en la cocina, el salón y el baño para crear el ambiente perfecto.', cta: 'Guarda este post para iluminar bien tu hogar. 💾', hashtags: '#arcatips #iluminacion #diseñoiluminacion #luzcalida #luzfria #decoracion #interiorismo', kpis: 'Alcance: 1.6k, Interacciones: 110, Guardados: 100' },
  '2025-08-13': { theme: 'Humanización de Marca', platform: 'Instagram, Facebook', type: 'Feed', format: 'Imagen de equipo', copy: 'Hoy os presentamos a Laura, una de nuestras arquitectas. Es la experta en transformar espacios pequeños en hogares increíblemente funcionales. ¡Su superpoder es ganar metros donde no los hay! 💪', cta: '¡Saluda a Laura en los comentarios!', hashtags: '#equipoarca #arquitecta #diseñointeligente #conocealequipo #profesionales #reformas', kpis: 'Alcance: 1.9k, Interacciones: 150, Comentarios: 20' },
  '2025-08-14': { theme: 'Prueba de Excelencia', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo Antes y Después', copy: 'Este baño pedía a gritos una reforma. ¡Y se la dimos! Menos metros, pero más sensación de amplitud, luz y estilo. ¿Qué os parece el resultado?', cta: 'Si tu baño necesita un cambio, ¡escríbenos!', hashtags: '#reformasdebaños #antesydespues #bañospequeños #diseñodebaños #reformasvalladolid #transformacion', kpis: 'Visualizaciones: 8k, Interacciones: 350, Guardados: 60' },
  '2025-08-15': { theme: 'Interacción Comunitaria', platform: 'Instagram (Stories)', type: 'Stories (Encuesta)', format: 'Sticker de Encuesta', copy: '¡Feliz 15 de agosto! Día festivo y de relax. ¿Cómo es tu rincón favorito para desconectar en casa?', cta: 'Opción A: Sofá y manta 🛋️ vs. Opción B: Un baño relajante 🛀. ¡VOTA!', hashtags: '#diadefiesta #relaxencasa #desconexion #momentosparati #decoracion', kpis: 'Alcance: 1.4k, Votos totales: 450' },
  '2025-08-16': { theme: 'Educación y Valor', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo corto (Mito/Realidad)', copy: '3 cosas que (quizás) no sabías sobre el pladur. ¡El número 3 es clave para colgar estanterías pesadas sin miedo! 🤫', cta: '¿Conocías estos trucos? ¡Te leemos!', hashtags: '#pladur #trucosreformas #bricolaje #reformadecasa #arcatips #sabiasque', kpis: 'Visualizaciones: 5.5k, Interacciones: 250, Compartidos: 40' },
  '2025-08-17': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Feed', format: 'Imagen única inspiracional', copy: 'Domingo de lectura en este rincón de ensueño que creamos en nuestro último proyecto en Burgos. Buena luz, un asiento cómodo y una estantería a medida. No se necesita más. 📖✨', cta: 'Doble toque si tú también necesitas un rincón así. ❤️', hashtags: '#rincondelectura #paz #diseñoamedida #librerias #interiorismo #reformasburgos #domingo', kpis: 'Alcance: 2.4k, Interacciones: 280, Comentarios: 25' },
  '2025-08-18': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: '¡Empezamos la semana con fuerza! Os mostramos el antes y después de este salón en Palencia. Un espacio que pedía a gritos más luz y una distribución moderna. Desliza para ver la magia. ✨', cta: '¿Cuál es tu detalle favorito de la transformación? ¡Déjanos un comentario!', hashtags: '#reformasintegrales #diseñodesalones #antesydespues #reformasPalencia #decoracion #livingroommakeover', kpis: 'Alcance: 2.7k, Interacciones: 170, Clics al perfil: 22' },
  '2025-08-19': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Feed', format: 'Tip Rápido (Imagen + Texto)', copy: '¿Necesito licencia de obra para cambiar las ventanas? 🤔 ¡Resolvemos tus dudas! Para la mayoría de los casos, solo necesitas una comunicación previa o una declaración responsable. ¡Más fácil de lo que parece!', cta: 'Guarda este post y consulta siempre a un profesional. 💡', hashtags: '#licenciasdeobra #reformasegura #arcatips #dudasreformas #ventanas #eficienciaenergetica', kpis: 'Alcance: 1.7k, Interacciones: 115, Guardados: 110' },
  '2025-08-20': { theme: 'Humanización de Marca', platform: 'Instagram (Stories)', type: 'Stories', format: 'Vídeo corto / Boomerang', copy: '¡El motor que no se ve! Hoy os colamos en nuestro departamento de administración. Ellos se encargan de que todos los papeles, licencias y presupuestos estén en perfecto orden. 👏', cta: '¡Un aplauso para el equipo de gestión!', hashtags: '#equipoarca #detrasdelascamaras #administracion #trabajoenequipo #organizacion', kpis: 'Alcance: 1.3k, Interacciones: 45' },
  '2025-08-21': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: 'Una oficina que inspira. Transformamos este espacio de trabajo en Valladolid para fomentar la creatividad y el bienestar. ¿El resultado? Un lugar al que apetece ir a trabajar.', cta: 'Etiqueta a tu jefe si necesitas una oficina así. 😉', hashtags: '#reformasdeoficinas #diseñodeoficinas #espaciosdetrabajo #reformasvalladolid #interiorismocorporativo', kpis: 'Alcance: 2.1k, Interacciones: 140, Compartidos: 15' },
  '2025-08-22': { theme: 'Interacción Comunitaria', platform: 'Instagram (Stories)', type: 'Stories (Encuesta)', format: 'Sticker de Encuesta', copy: '¡Viernes de inspiración! Si pudieras elegir un estilo para tu próxima reforma, ¿cuál sería?', cta: 'Opción A: Nórdico minimalista 🤍 vs. Opción B: Industrial con carácter 🧱. ¡A VOTAR!', hashtags: '#estilosdecorativos #nordico #industrial #encuestadeco #inspiraciondeco', kpis: 'Alcance: 1.6k, Votos totales: 550' },
  '2025-08-23': { theme: 'Educación y Valor', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo corto', copy: '¡El color SÍ importa! 🎨 Te enseñamos cómo elegir la paleta de colores perfecta para tu hogar en 3 simples pasos. ¡No te pierdas el truco final!', cta: '¿Cuáles son los colores de tu casa? ¡Cuéntanos!', hashtags: '#psicologiadelcolor #paletadecolores #pintura #decoracioninteriores #arcatips #diseño', kpis: 'Visualizaciones: 6k, Interacciones: 280, Guardados: 130' },
  '2025-08-24': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Feed', format: 'Imagen única inspiracional', copy: 'Atardeceres de agosto desde una terraza que reformamos para ser el mejor mirador de la ciudad. Un pequeño oasis urbano para despedir el día. 🌅', cta: 'Doble toque si te apuntas a este plan. ❤️', hashtags: '#terrazasconencanto #reformasdeexteriores #oasisurbano #atardecer #diseño #relax', kpis: 'Alcance: 2.5k, Interacciones: 300, Comentarios: 30' },
  '2025-08-25': { theme: 'Prueba de Excelencia', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo Antes y Después', copy: 'De dormitorio anticuado a suite de hotel. 🏨✨ Armarios a medida, un cabecero que es protagonista y una iluminación que invita al descanso. ¡Así fue la transformación!', cta: '¿Tu dormitorio necesita un cambio? ¡Hablemos!', hashtags: '#reformasdedormitorios #antesydespues #diseñodeinteriores #dormitoriosmodernos #suite #transformacion', kpis: 'Visualizaciones: 7.5k, Interacciones: 320, Guardados: 70' },
  '2025-08-26': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Infografía comparativa', copy: 'Ventanas: ¿PVC o Aluminio con Rotura de Puente Térmico? Analizamos las ventajas de cada material en aislamiento, durabilidad y precio para que hagas la mejor inversión en eficiencia energética.', cta: 'Guarda esta guía antes de cambiar tus ventanas. 💾', hashtags: '#ventanas #pvc #aluminio #eficienciaenergetica #ahorroenergetico #reformaintegral #arcatips', kpis: 'Alcance: 2.0k, Interacciones: 150, Guardados: 120' },
  '2025-08-27': { theme: 'Humanización de Marca', platform: 'Instagram, Facebook', type: 'Vídeo (Feed)', format: 'Testimonio en vídeo', copy: '"El resultado ha superado nuestras expectativas. Pero lo mejor ha sido la tranquilidad durante todo el proceso". Palabras de nuestros clientes de Burgos que nos llenan de orgullo. ¡Gracias por confiar en Arca!', cta: 'La confianza es nuestro pilar. ¿Quieres comprobarlo? Pide tu presupuesto. Link en bio.', hashtags: '#clientessatisfechos #confianza #calidad #testimonio #reformasburgos #equipoprofesional', kpis: 'Visualizaciones: 3.5k, Interacciones: 180, Clics al enlace: 18' },
  '2025-08-28': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: 'Rescatamos la esencia de este piso antiguo en el centro de Valladolid, conservando elementos originales como las vigas de madera y combinándolos con un diseño contemporáneo. Un diálogo entre pasado y presente.', cta: '¿Eres fan de mantener la esencia original en las reformas? ¡Te leemos!', hashtags: '#rehabilitacion #patrimonio #diseñocontemporaneo #vigasdemadera #reformasconencanto #reformasvalladolid', kpis: 'Alcance: 3.2k, Interacciones: 220, Comentarios: 40' },
  '2025-08-29': { theme: 'Interacción Comunitaria', platform: 'Instagram (Stories)', type: 'Stories (Q&A)', format: 'Sticker de Preguntas', copy: '¡Viernes de consultorio! Nuestro arquitecto jefe responde. ¿Dudas sobre presupuestos, plazos, materiales? ¡Es el momento de preguntar sin miedo!', cta: '¡Deja tu pregunta aquí y la responderemos en las próximas stories!', hashtags: '#preguntasyrespuestas #consultorioarca #reformas #dudasreformas #arquitectosresponden', kpis: 'Alcance: 1.8k, Nº de preguntas recibidas: 40' },
  '2025-08-30': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Feed', format: 'Tip Rápido (Imagen + Texto)', copy: '¿Falta de espacio? ¡Piensa en vertical! Las estanterías altas, los muebles a medida hasta el techo y las soluciones de almacenamiento inteligentes son tus mejores aliados para ganar metros útiles.', cta: 'Guarda este consejo para optimizar tu espacio. 💡', hashtags: '#almacenamiento #espaciospequeños #solucionesinteligentes #ordenencasa #diseñoamedida #arcatips', kpis: 'Alcance: 1.9k, Interacciones: 130, Guardados: 150' },
  '2025-08-31': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Feed', format: 'Imagen única de detalle', copy: 'Despedimos agosto con un detalle que nos encanta: la grifería negra mate de esta cocina. Un toque de elegancia y modernidad que eleva cualquier diseño. ⚫✨', cta: 'Doble toque si a ti también te obsesionan los detalles.', hashtags: '#detalles #griferianegra #diseñodecocinas #tendenciasdeco #findemes #interiorismo', kpis: 'Alcance: 2.6k, Interacciones: 310, Comentarios: 28' },
  '2025-09-01': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: '¡Bienvenido septiembre! Empezamos el mes con la energía de este apartamento reformado en Palencia. Un diseño que aprovecha cada metro cuadrado. ¿Listo para empezar nuevos proyectos?', cta: 'Pide tu cita para una valoración gratuita. ¡Link en bio!', hashtags: '#reformasPalencia #apartamentospequeños #diseñofuncional #septiembre #nuevosproyectos #interiorismo', kpis: 'Alcance: 2.6k, Interacciones: 160, Clics: 20' },
  '2025-09-02': { theme: 'Educación y Valor', platform: 'Instagram (Reel)', type: 'Reel', format: 'Vídeo corto', copy: '¿Qué es el REA y por qué es VITAL que la empresa que contrates lo tenga? Te lo explicamos para que tu reforma sea 100% segura y legal.', cta: '¡No te la juegues! Elige siempre profesionales acreditados.', hashtags: '#seguridadenobra #reformasegura #empresasdeconstruccion #legalidad #arcatips', kpis: 'Visualizaciones: 4k, Guardados: 120, Compartidos: 30' },
  '2025-09-03': { theme: 'Humanización de Marca', platform: 'Instagram (Stories)', type: 'Stories', format: 'Vídeo/Boomerang', copy: '¡Visita a nuestros proveedores! Eligiendo las mejores maderas para los próximos proyectos. Calidad que se ve y se toca.', cta: '¿Eres más de roble o de nogal?', hashtags: '#calidad #materiales #carpinteria #detrasdelascamaras #proceso', kpis: 'Alcance: 1.1k, Interacciones: 35' },
  '2025-09-04': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: 'Jueves de proyecto finalizado. Os enseñamos esta reforma integral en Burgos donde el objetivo era claro: abrir espacios y conectar la cocina con el salón. ¡El resultado es pura luz y amplitud! Desliza para ver el plano y el después.', cta: '¿Te gustan las cocinas abiertas al salón? ¡Cuéntanos por qué!', hashtags: '#cocinasabiertas #reformasintegrales #diseñodeinteriores #reformasburgos #espaciosconectados #luznatural', kpis: 'Alcance: 3.0k, Interacciones: 200, Clics al perfil: 25' },
  '2025-09-05': { theme: 'Interacción Comunitaria', platform: 'Instagram (Stories)', type: 'Stories (This or That)', format: 'Sticker de Encuesta', copy: '¡Viernes de decisiones! Para el baño de tus sueños, ¿qué eliges?', cta: 'Opción A: Ducha de obra a ras de suelo 🚿 vs. Opción B: Bañera exenta de diseño 🛀. ¡A votar!', hashtags: '#thisorthat #baños #diseñodebaños #ducha #bañera #debatdeco', kpis: 'Alcance: 1.7k, Votos totales: 600' },
  '2025-09-06': { theme: 'Educación y Valor', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo corto', copy: '¿Suelos de madera en la cocina? 🌳 ¡Sí, se puede! Te contamos qué tipo de madera elegir y qué tratamiento necesita para que sea resistente y duradero. #MitosDeReformas', cta: 'Guarda este Reel si sueñas con una cocina cálida y acogedora.', hashtags: '#suelosdemadera #cocinasconencanto #diseñodecocinas #arcatips #reformas #interiorismo', kpis: 'Visualizaciones: 5.8k, Interacciones: 260, Guardados: 140' },
  '2025-09-07': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Feed', format: 'Imagen única inspiracional', copy: 'La belleza de lo simple. Un rincón de este salón en Valladolid que nos recuerda que a veces, menos es más. Calidad, diseño y buena luz. Feliz domingo.', cta: 'Doble toque si amas el minimalismo cálido. ❤️', hashtags: '#minimalismo #diseño #paz #domingo #decoracion #reformasvalladolid #menosismore', kpis: 'Alcance: 2.3k, Interacciones: 290, Comentarios: 20' },
  '2025-09-08': { theme: 'Prueba de Excelencia', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo Antes y Después', copy: '¡Vuelta al cole, vuelta al orden! Transformamos este trastero caótico en un despacho funcional y lleno de estilo. ¡Ahora sí que apetece teletrabajar!', cta: '¿Necesitas un espacio de trabajo en casa? ¡Podemos ayudarte!', hashtags: '#antesydespues #homeoffice #teletrabajo #ordenencasa #reformas #diseñofuncional', kpis: 'Visualizaciones: 9k, Interacciones: 400, Guardados: 150' },
  '2025-09-09': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Guía visual', copy: '5 ideas para ganar almacenamiento en casa (que quizás no conocías). 1. Bancos con almacenaje. 2. Canapés abatibles. 3. Aprovechar el espacio sobre las puertas...', cta: 'Guarda estas ideas y pon orden en tu vida. 😉', hashtags: '#almacenajeinteligente #orden #organizacion #espaciospequeños #decoracionfuncional #arcatips', kpis: 'Alcance: 2.2k, Interacciones: 180, Guardados: 200' },
  '2025-09-10': { theme: 'Humanización de Marca', platform: 'Instagram, Facebook', type: 'Feed', format: 'Imagen de equipo en obra', copy: 'Os presentamos a Javi, nuestro jefe de obra. Es la persona que se asegura de que cada detalle del proyecto se ejecute a la perfección y en los plazos previstos. ¡Un verdadero crack en la coordinación de equipos!', cta: '¡Un saludo para Javi y todo el equipo de obra!', hashtags: '#equipoarca #jefedeobra #profesionales #construccion #calidad #detrasdelascamaras', kpis: 'Alcance: 2.0k, Interacciones: 160, Comentarios: 25' },
  '2025-09-11': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: 'La importancia de la luz. En esta reforma en Palencia, la iluminación fue la gran protagonista. Combinamos luz general, puntual y ambiental para crear atmósferas diferentes en un mismo espacio.', cta: '¿Crees que la iluminación es clave en una reforma? ¡Te leemos!', hashtags: '#diseñodeiluminacion #iluminacion #luz #interiorismo #reformasPalencia #ambientes', kpis: 'Alcance: 2.8k, Interacciones: 190, Clics: 20' },
  '2025-09-12': { theme: 'Interacción Comunitaria', platform: 'Instagram (Stories)', type: 'Stories (Q&A)', format: 'Sticker de Preguntas', copy: '¡Es viernes y tu reforma lo sabe! Abrimos consultorio para resolver todas esas dudas que te quitan el sueño. ¿Presupuestos? ¿Plazos? ¿Materiales? ¡Dispara!', cta: 'Deja tu pregunta aquí. ¡Las más interesantes las responderemos en un Reel la semana que viene!', hashtags: '#consultorioreformas #preguntasyrespuestas #dudas #reformasintegrales #arquitectura', kpis: 'Alcance: 1.9k, Nº de preguntas: 45' },
  '2025-09-13': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Feed', format: 'Tip Rápido (Imagen + Texto)', copy: '¿Sabías que una buena ventilación en el baño es clave para evitar humedades y moho? Si no tienes ventana, un extractor mecánico es una inversión pequeña con un gran impacto en la salud de tu hogar.', cta: 'Guarda este consejo para un baño más sano. 💨', hashtags: '#saludhogar #ventilacion #bañossanos #humedad #consejoreforma #arcatips', kpis: 'Alcance: 1.8k, Interacciones: 120, Guardados: 130' },
  '2025-09-14': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Vídeo (Feed)', format: 'Testimonio en vídeo', copy: '"Lo que más valoramos fue la comunicación constante. Sabíamos en cada momento en qué punto estaba la obra". La tranquilidad de nuestros clientes es nuestro objetivo. ¡Gracias, familia García, por vuestras palabras!', cta: 'Empieza tu reforma con la tranquilidad que mereces. Pide tu presupuesto. Link en bio.', hashtags: '#testimonio #clientessatisfechos #confianza #comunicacion #reformasintegrales #arcagrupocarranza', kpis: 'Visualizaciones: 3.8k, Interacciones: 200, Clics al enlace: 20' },
  '2025-09-15': { theme: 'Prueba de Excelencia', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo Antes y Después', copy: '¡La primera impresión cuenta! Así transformamos un recibidor soso y sin personalidad en una entrada espectacular que da la bienvenida con estilo. ✨', cta: '¿Qué te parece el cambio? ¡Un recibidor así invita a quedarse!', hashtags: '#antesydespues #reformas #recibidores #diseñodeinteriores #primerasimpresiones #decoracion', kpis: 'Visualizaciones: 8.5k, Interacciones: 380, Guardados: 100' },
  '2025-09-16': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Guía visual', copy: 'Suelos laminados, vinílicos o de madera natural: ¿Cuál es el mejor para tu casa? Desliza para ver una comparativa de sus pros, contras y usos recomendados. 🏠 suelos', cta: 'Guarda esta guía para tu próxima reforma. 💾', hashtags: '#suelos #pavimentos #diseñointeriores #reformaintegral #arcatips #madera #laminado #vinilo', kpis: 'Alcance: 2.5k, Interacciones: 190, Guardados: 220' },
  '2025-09-17': { theme: 'Humanización de Marca', platform: 'Instagram (Stories)', type: 'Stories', format: 'Vídeo corto', copy: '¡Día de selección de azulejos! Acompañamos a nuestros clientes a uno de nuestros proveedores de confianza para elegir los acabados de su nuevo baño. ¡Qué difícil decidirse con tantas maravillas!', cta: '¿Cuál de estos elegirías tú? (Sticker de encuesta con 2 opciones)', hashtags: '#proceso #diseño #elecciones #azulejos #baños #detrasdelascamaras', kpis: 'Alcance: 1.4k, Interacciones: 50' },
  '2025-09-18': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: 'Un salón-comedor para disfrutar en familia. En este proyecto en Valladolid, diseñamos un mueble a medida que integra la TV, almacenamiento y una zona de trabajo. ¡Funcionalidad y diseño en uno!', cta: '¿Necesitas una solución a medida para tu salón? ¡Cuéntanos tu idea!', hashtags: '#mueblesamedida #diseñodesalones #reformasvalladolid #carpinteria #soluciones #interiorismo', kpis: 'Alcance: 3.1k, Interacciones: 210, Comentarios: 35' },
  '2025-09-19': { theme: 'Interacción Comunitaria', platform: 'Instagram (Stories)', type: 'Stories (Encuesta)', format: 'Sticker de Encuesta', copy: '¡Viernes de debate! Para la pared del cabecero en el dormitorio, ¿qué prefieres?', cta: 'Opción A: Papel pintado con personalidad 🌿 vs. Opción B: Un color liso y relajante 🎨. ¡VOTA!', hashtags: '#decoraciondormitorios #papelpintado #pintura #encuestadeco #diseñointeriores', kpis: 'Alcance: 1.8k, Votos totales: 650' },
  '2025-09-20': { theme: 'Educación y Valor', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo corto', copy: 'La regla 60-30-10 para combinar colores como un profesional. 🎨 60% color dominante, 30% secundario y 10% de acento. ¡Así de fácil!', cta: 'Guarda este truco de diseño y aplícalo en tu casa. 😉', hashtags: '#combinarcolores #diseñointeriores #decoracion #arcatips #regla603010 #interiorismo', kpis: 'Visualizaciones: 7k, Interacciones: 300, Guardados: 180' },
  '2025-09-21': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Feed', format: 'Imagen única inspiracional', copy: 'Luz de domingo en la cocina. Este proyecto en Burgos demuestra que no hace falta un espacio enorme para tener una cocina de ensueño. Solo buena planificación y materiales de calidad. Feliz día.', cta: 'Doble toque si esta es la cocina de tus sueños. ❤️', hashtags: '#cocinaspequeñas #diseñodecocinas #luznatural #domingo #inspiraciondeco #reformasburgos', kpis: 'Alcance: 2.7k, Interacciones: 320, Comentarios: 30' },
  '2025-09-22': { theme: 'Prueba de Excelencia', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo Antes y Después', copy: '¡Empezamos la semana con una de esas transformaciones que dejan sin palabras! 🤩 Convertimos un baño anticuado y oscuro en un oasis de luz y relax. ¡Atentos al cambio en la ducha!', cta: '¿Tu baño necesita un cambio así de radical? ¡Escríbenos!', hashtags: '#antesydespues #reformasdebaños #diseñodebaños #bañosmodernos #reformasintegrales #bathroommakeover', kpis: 'Visualizaciones: 9.5k, Interacciones: 420, Guardados: 110' },
  '2025-09-23': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Feed', format: 'Tip Rápido (Imagen + Texto)', copy: '¿Pintura mate, satinada o con brillo? Cada acabado tiene sus ventajas. La mate disimula imperfecciones, la satinada es resistente y lavable, y la brillante es ideal para resaltar detalles. ¿Cuál usas más?', cta: 'Guarda este tip para tu próximo proyecto de pintura. 🎨', hashtags: '#pintura #decoracion #arcatips #interiorismo #acabados #consejodecoracion', kpis: 'Alcance: 1.9k, Interacciones: 140, Guardados: 160' },
  '2025-09-24': { theme: 'Humanización de Marca', platform: 'Instagram (Stories)', type: 'Stories', format: 'Vídeo corto', copy: '¡Día de formación! 📚 Hoy parte de nuestro equipo está en un curso sobre los últimos materiales sostenibles del mercado. ¡Siempre aprendiendo para ofreceros lo mejor!', cta: '¿Te gustaría que usáramos más materiales ecológicos en las reformas?', hashtags: '#formacioncontinua #sostenibilidad #materialesecologicos #equipoarca #innovacion', kpis: 'Alcance: 1.5k, Interacciones: 60' },
  '2025-09-25': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: 'Una cocina diseñada para compartir. En este proyecto en Palencia, la isla central se convierte en el corazón de la casa, uniendo la zona de cocinado con un espacio para desayunos y charlas. Desliza para ver los detalles.', cta: '¿Eres de los que sueña con una isla en la cocina? ¡Cuéntanos!', hashtags: '#diseñodecocinas #cocinasconisla #reformasPalencia #cocinasmodernas #espaciosparacompartir #interiorismo', kpis: 'Alcance: 3.3k, Interacciones: 240, Comentarios: 45' },
  '2025-09-26': { theme: 'Interacción Comunitaria', platform: 'Instagram (Stories)', type: 'Stories (Quiz)', format: 'Sticker de Quiz', copy: '¡Viernes de poner a prueba tus conocimientos de deco! ¿Cómo se llama el estilo que mezcla elementos vintage e industriales?', cta: 'A) Nórdico B) Boho Chic C) Loft. ¡PARTICIPA!', hashtags: '#quizdeco #estilosdecorativos #juego #diseñointeriores #aprendecondiseño', kpis: 'Alcance: 2.0k, Participaciones: 700' },
  '2025-09-27': { theme: 'Educación y Valor', platform: 'Instagram (Reel), TikTok', type: 'Reel', format: 'Vídeo corto', copy: '¿Aislamiento térmico por fuera (SATE) o por dentro? Te explicamos las ventajas de cada sistema para que tu casa sea más eficiente y ahorres en tus facturas este invierno.', cta: 'Guarda este vídeo y prepárate para el frío. ❄️', hashtags: '#aislamiento #eficienciaenergetica #ahorro #SATE #reformas #arcatips', kpis: 'Visualizaciones: 6.5k, Interacciones: 290, Guardados: 170' },
  '2025-09-28': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Feed', format: 'Imagen única inspiracional', copy: 'La luz de septiembre entrando por esta ventana que enmarcamos con una carpintería de madera a medida. Un rincón perfecto para despedir la semana. Feliz domingo.', cta: 'Doble toque si te gustaría pasar la tarde aquí. ❤️', hashtags: '#rinconesconencanto #luz #carpinteriaamedida #diseño #domingo #relax #reformas', kpis: 'Alcance: 2.8k, Interacciones: 340, Comentarios: 35' },
  '2025-09-29': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: '¡Últimos días de septiembre! Y os enseñamos una de nuestras últimas reformas de baño en Burgos. Un espacio pequeño pero muy bien aprovechado con soluciones inteligentes y un diseño que no pasa de moda.', cta: '¿Crees que hemos aprovechado bien el espacio? ¡Te leemos!', hashtags: '#reformasdebaños #bañospequeños #diseñofuncional #reformasburgos #antesydespues #interiorismo', kpis: 'Alcance: 3.0k, Interacciones: 210, Clics al perfil: 28' },
  '2025-09-30': { theme: 'Educación y Valor', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Guía visual', copy: '¡Adiós septiembre, hola planificación de otoño! 🍂 Es el momento ideal para pensar en esas reformas que harán tu casa más acogedora para el invierno. Te dejamos 5 ideas: 1. Renovar la chimenea. 2. Instalar suelo radiante...', cta: 'Guarda estas ideas y empieza a planificar tu hogar de invierno. 🏡', hashtags: '#reformasdeotoño #planificacion #hogaracogedor #invierno #diseñointeriores #arcatips', kpis: 'Alcance: 2.4k, Interacciones: 180, Guardados: 250' },
  '2025-10-01': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: '¡Octubre llega con olor a hogar! 🍂 Empezamos el mes con este proyecto de reforma integral en Valladolid. Una vivienda que ahora respira calidez y estilo en cada rincón. Desliza para enamorarte.', cta: '¿Qué es lo que más te gusta de un hogar en otoño? ¡Te leemos!', hashtags: '#bienvenidooctubre #reformasintegrales #hogar #otoño #diseñodeinteriores #reformasvalladolid', kpis: 'Alcance: 3.2k, Interacciones: 230, Comentarios: 40' },
  '2025-10-15': { theme: 'Prueba de Excelencia', platform: 'Instagram, Facebook', type: 'Carrusel (Feed)', format: 'Imágenes de alta calidad', copy: 'Proyecto del mes: convertimos un baño anticuado en un spa de lujo en Palencia. ✨ Materiales nobles, diseño funcional y una iluminación que enamora. ¿Te imaginas un baño así en tu casa?', cta: 'Descubre más sobre este proyecto en nuestra web. ¡Link en bio!', hashtags: '#reformasdebaños #diseñodebaños #reformaspalencia #antesydespues #interiorismo #bañosmodernos', kpis: 'Alcance: 3k, Interacciones: 200, Clics al enlace: 25' },
  '2025-11-20': { theme: 'Interacción Comunitaria', platform: 'Instagram (Stories)', type: 'Stories (Q&A)', format: 'Sticker de Preguntas', copy: '¡ABRIMOS CONSULTORIO! 💬 Nuestro equipo de arquitectos responde a todas vuestras dudas sobre reformas, presupuestos, licencias... ¡Disparad!', cta: 'Deja aquí tu pregunta 👉', hashtags: '#preguntasyrespuestas #consultorioarca #reformas #dudasreformas #arquitectosresponden', kpis: 'Alcance: 1.5k, Nº de preguntas recibidas: 30' },
  '2025-12-24': { theme: 'Humanización de Marca', platform: 'Instagram, Facebook', type: 'Feed', format: 'Imagen de equipo', copy: 'Todo el equipo de Arca Grupo Carranza os desea unas muy Felices Fiestas. 🎄✨ Gracias por dejarnos entrar en vuestros hogares y por vuestra confianza un año más. ¡A por un 2026 lleno de nuevos proyectos!', cta: '¡Felices fiestas a toda nuestra comunidad!', hashtags: '#feliznavidad #equipoarca #arcagrupocarranza #navidad2025', kpis: 'Alcance: 4k, Interacciones: 300' }
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