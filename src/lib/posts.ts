// Artículos del blog. Contenido informativo y sin promesas médicas; Liliana debe revisarlo antes de publicarse.
// Este archivo no importa nada con alias (@/) para poder probarse con node:test.

export type PostBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string;
  // Slugs de /servicios/[slug] a los que invita el artículo.
  serviceSlugs: string[];
  // Si el artículo habla del Oráculo, enlaza a /oraculo.
  linksOraculo?: boolean;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "que-es-el-reiki-y-que-se-siente",
    title: "¿Qué es el Reiki y qué se siente en una sesión?",
    description:
      "Qué es el Reiki, cómo transcurre una sesión de 60 minutos y qué sensaciones son normales. Explicado sin tecnicismos y con límites claros.",
    date: "2026-10-04",
    category: "Reiki",
    serviceSlugs: ["reiki", "alineacion-de-chakras"],
    body: [
      {
        type: "p",
        text: "El Reiki es una práctica de bienestar que nació en Japón a comienzos del siglo XX, de la mano de Mikao Usui. La palabra une dos ideas: «rei», energía universal, y «ki», energía vital. En una sesión, quien la da coloca las manos suavemente sobre el cuerpo, o cerca de él, con la intención de acompañarte a relajarte y a soltar tensión.",
      },
      { type: "h2", text: "Cómo es una sesión" },
      {
        type: "p",
        text: "Te recuestas vestido, con ropa cómoda, en un lugar tranquilo. No hay que hacer nada en particular: puedes cerrar los ojos, respirar con calma y dejar que la sesión suceda. En Alas de Amor una sesión de Reiki dura alrededor de 60 minutos. Al terminar, tomamos unos minutos para conversar sobre cómo te sentiste.",
      },
      { type: "h2", text: "Qué sensaciones son normales" },
      {
        type: "p",
        text: "No todas las personas sienten lo mismo, y no sentir nada especial también es normal. Entre lo que muchas personas cuentan están:",
      },
      {
        type: "ul",
        items: [
          "Calor o frescura en algunas zonas del cuerpo.",
          "Hormigueo suave o sensación de peso en brazos y piernas.",
          "Una relajación profunda, incluso sueño.",
          "Emociones que suben y se van: ganas de llorar, de reír o de suspirar.",
          "Calma mental al terminar.",
        ],
      },
      { type: "h2", text: "Lo que el Reiki no es" },
      {
        type: "p",
        text: "El Reiki es una terapia complementaria de bienestar. No sustituye el diagnóstico, el tratamiento ni el seguimiento de un profesional de la salud, y la evidencia científica sobre sus efectos todavía es limitada. Si tienes una condición médica, sigue con tu tratamiento y usa el Reiki como un espacio más para cuidarte.",
      },
      { type: "h2", text: "Cómo prepararte" },
      {
        type: "ul",
        items: [
          "Come ligero antes de la sesión y mantente hidratado.",
          "Usa ropa cómoda y deja el celular en silencio.",
          "Llega con una intención sencilla, por ejemplo «quiero descansar» o «quiero soltar el estrés de esta semana».",
          "Toma agua después y date un rato tranquilo antes de volver a tus tareas.",
        ],
      },
      {
        type: "p",
        text: "Si quieres vivirlo, puedes ver el detalle de la sesión y reservar por WhatsApp. Si tienes dudas antes de decidir, escríbenos y las resolvemos.",
      },
    ],
  },
  {
    slug: "barras-de-access-que-pasa-en-una-sesion",
    title: "Barras de Access: qué pasa en una sesión",
    description:
      "Qué son las Barras de Access, cómo es una sesión de 45 a 60 minutos y cómo prepararte. Una guía sencilla para tu primera vez.",
    date: "2026-10-04",
    category: "Barras Access",
    serviceSlugs: ["barras-access", "combo-barras-access-reiki"],
    body: [
      {
        type: "p",
        text: "Las Barras de Access son una técnica que viene de Access Consciousness, un método creado por Gary Douglas. Consiste en tocar suavemente 32 puntos de la cabeza, con la idea de soltar pensamientos, creencias y emociones que ya no te sirven y de dejarte con la mente más tranquila.",
      },
      { type: "h2", text: "Cómo es la sesión" },
      {
        type: "p",
        text: "Te sientas o te recuestas cómodamente. Quien da la sesión toca con las yemas de los dedos los puntos de la cabeza, uno tras otro, sin presión fuerte. No necesitas contar tu historia ni hacer nada: puedes simplemente cerrar los ojos y descansar. La sesión dura entre 45 y 60 minutos.",
      },
      { type: "h2", text: "Qué suele pasar después" },
      {
        type: "ul",
        items: [
          "Sensación de ligereza o de mente más despejada.",
          "Ganas de dormir o de descansar.",
          "Algunas personas notan cambios en cómo ven una situación concreta; otras necesitan unos días para darse cuenta.",
        ],
      },
      {
        type: "p",
        text: "Cada persona lo vive distinto, y no hay una forma correcta de sentirlo. No son resultados garantizados.",
      },
      { type: "h2", text: "Lo que conviene saber" },
      {
        type: "p",
        text: "Las Barras de Access son una práctica de bienestar y no un tratamiento médico ni psicológico. No reemplazan la atención de un profesional de la salud. Si estás pasando por algo difícil, puedes usarlas como un apoyo más, junto con el acompañamiento que ya tengas.",
      },
      { type: "h2", text: "Cómo prepararte" },
      {
        type: "ul",
        items: [
          "Lava tu cabello sin productos pesados si puedes; es una sesión de toque en la cabeza.",
          "Usa ropa cómoda.",
          "Si hay algo en tu mente que quieras soltar, tenlo presente, pero no hace falta explicarlo.",
        ],
      },
      {
        type: "p",
        text: "También existe un combo que une Barras de Access y Reiki en una sola sesión. Puedes ver los detalles y los valores en la página del servicio.",
      },
    ],
  },
  {
    slug: "terapias-a-distancia-como-funcionan",
    title: "Terapias a distancia: cómo funcionan las sesiones en línea",
    description:
      "Cómo es una sesión de bienestar por videollamada, cómo prepararte y qué preguntar antes de reservar, estés en Colombia, Estados Unidos o España.",
    date: "2026-10-04",
    category: "Sesiones en línea",
    serviceSlugs: ["meditacion-guiada-online", "reiki"],
    body: [
      {
        type: "p",
        text: "Muchas personas que nos escriben viven fuera de Cali: en otras ciudades de Colombia, en Estados Unidos o en España. Para ellas, una sesión en línea es la forma de acompañarse sin viajar. Esto es lo que conviene saber antes de reservar.",
      },
      { type: "h2", text: "Cómo es una sesión en línea" },
      {
        type: "p",
        text: "Nos conectamos por videollamada a la hora acordada. Quien da la sesión te guía con la voz: respiración, relajación y la dinámica propia de cada terapia. Tú solo necesitas un lugar tranquilo, buena conexión y disposición para descansar. Terminada la sesión, conversamos unos minutos sobre cómo te sentiste.",
      },
      { type: "h2", text: "Cómo prepararte" },
      {
        type: "ul",
        items: [
          "Elige un lugar donde nadie te interrumpa durante la sesión.",
          "Usa audífonos si puedes: ayudan a escuchar mejor y a concentrarte.",
          "Ten agua cerca y ropa cómoda.",
          "Prueba tu conexión y la cámara unos minutos antes.",
          "Deja el celular en silencio y avisa en casa que no quieres interrupciones.",
        ],
      },
      { type: "h2", text: "La hora, según dónde estés" },
      {
        type: "p",
        text: "Colombia está en la hora UTC−5 todo el año y no cambia de horario en verano. Por eso, si vives en Estados Unidos o en España, la diferencia varía según la época del año. Al reservar, confirma la hora de tu ciudad por WhatsApp para evitar confusiones.",
      },
      { type: "h2", text: "Qué preguntar antes de reservar" },
      {
        type: "ul",
        items: [
          "Si la sesión que te interesa está disponible en línea o solo en persona.",
          "Cuánto dura y cuál es su valor. Mostramos los precios en pesos colombianos, con una equivalencia aproximada en dólares y euros.",
          "Por qué medio vas a pagar desde tu país.",
        ],
      },
      {
        type: "p",
        text: "Las sesiones de bienestar son un complemento y no sustituyen la atención médica ni psicológica. Escríbenos por WhatsApp y te contamos qué sesiones se ofrecen en línea y cómo coordinarlas.",
      },
    ],
  },
  {
    slug: "como-usar-un-oraculo-angelical",
    title: "Cómo usar un oráculo angelical y qué esperar de una lectura",
    description:
      "Cómo usar cartas de ángeles como herramienta de reflexión: un ritual sencillo en cinco pasos y qué esperar de una lectura personalizada.",
    date: "2026-10-04",
    category: "Oráculo",
    serviceSlugs: ["lectura-oraculo-angelical", "lectura-angelical"],
    linksOraculo: true,
    body: [
      {
        type: "p",
        text: "Un oráculo angelical es una baraja de cartas, cada una con un mensaje. No es un manual de predicciones: es una herramienta para detenerte, hacerte una pregunta y mirar tu situación desde otro ángulo. Muchas personas lo usan cada mañana como un momento de pausa.",
      },
      { type: "h2", text: "Un ritual sencillo en cinco pasos" },
      {
        type: "ul",
        items: [
          "Busca un momento tranquilo y respira tres veces, despacio.",
          "Piensa en una pregunta abierta, por ejemplo «¿qué necesito ver hoy?», en lugar de una de sí o no.",
          "Baraja las cartas y elige una con calma, sin pensarlo demasiado.",
          "Lee el mensaje despacio y fíjate en qué frase te toca. Algunas cartas incluyen un pequeño ejercicio para practicar durante el día.",
          "Cierra agradeciendo y anota en un cuaderno lo que te dejó el mensaje.",
        ],
      },
      { type: "h2", text: "Cómo leer el mensaje" },
      {
        type: "p",
        text: "Lee la carta como una invitación, no como una sentencia. Si una frase no te dice nada, déjala; si otra te remueve, quédate ahí un rato y pregúntate por qué. El mensaje cobra sentido en lo que tú haces con él.",
      },
      { type: "h2", text: "Cartas por tu cuenta o lectura personalizada" },
      {
        type: "p",
        text: "Puedes tener tu propio oráculo y usarlo a tu ritmo, o pedir una lectura personalizada con Liliana, en la que se interpretan las cartas contigo y se conversa sobre lo que aparece. Una lectura no predice el futuro con certeza ni reemplaza el consejo de un profesional de la salud, legal o financiero.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function readingMinutes(post: Post): number {
  const words = post.body
    .map((b) => (b.type === "ul" ? b.items.join(" ") : b.text))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("es-CO", { timeZone: "UTC", dateStyle: "long" }).format(new Date(date));
}
