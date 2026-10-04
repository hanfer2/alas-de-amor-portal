// Testimonios REALES de clientes. Solo se agregan aquí con autorización de la persona.
//
// Mientras la lista esté vacía, la portada oculta la sección de testimonios y /testimonios
// muestra una invitación a compartir la experiencia. Al agregar el primero, ambas se llenan solas
// (y se puede quitar el noindex de src/app/testimonios/layout.tsx y sumar la ruta a src/app/sitemap.ts).
//
// No marcar reseñas con datos estructurados (Review / AggregateRating) salvo que sean verificables.

export type Testimonial = {
  /** Identificador estable, por ejemplo "2026-10-maria". */
  id: string;
  /** Nombre como la persona autorizó mostrarlo: "María G." o "Una clienta". */
  name: string;
  /** Ciudad o país, opcional. */
  location?: string;
  /** Terapia o servicio que tomó. */
  therapy: string;
  /** Texto en sus propias palabras, sin editar el sentido. */
  quote: string;
  /** Calificación de 1 a 5, solo si la persona la dio. */
  rating?: 1 | 2 | 3 | 4 | 5;
  /** Foto real y autorizada en /public/imgs/testimonials/, opcional. Sin foto se muestra la inicial. */
  avatar?: string;
};

export const testimonials: Testimonial[] = [];
