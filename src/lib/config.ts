const config = {
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://alas-de-amor.vercel.app",
  },

  contact: {
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+57 304 3732955",
    phoneRaw: (process.env.NEXT_PUBLIC_CONTACT_PHONE || "+57 304 3732955").replace(/[\s+]/g, ""),
    whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || "573043732955",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Lilo_rodas87@hotmail.com",
    hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || "Lunes a Sábado: 8:00 AM - 6:00 PM",
  },

  business: {
    name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Alas de Amor",
    country: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || "Colombia",
  },

  social: {
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "https://www.facebook.com/liliana.rodas.9615",
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://instagram.com/alasdeamor",
  },
};

export default config;
