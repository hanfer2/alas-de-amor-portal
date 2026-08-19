const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      `default-src 'self'; script-src 'self' 'unsafe-inline' https://www.instagram.com${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://open.er-api.com https://www.instagram.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-src 'self' https://www.tiktok.com https://www.instagram.com; frame-ancestors 'none'`,
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
