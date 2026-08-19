import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const t = useTranslations();

  const navLinks = [
    { href: "/", labelKey: "nav.inicio" },
    { href: "/nosotros", labelKey: "nav.nosotros" },
    { href: "/servicios", labelKey: "nav.servicios" },
    { href: "/testimonios", labelKey: "nav.testimonios" },
    { href: "/blog", labelKey: "nav.blog" },
    { href: "/agendar", labelKey: "nav.agendar" },
    { href: "/contacto", labelKey: "nav.contacto" },
  ];

  const serviceKeys = [
    "nosotros.services.reiki",
    "nosotros.services.access",
    "nosotros.services.angelical",
    "nosotros.services.chakras",
    "nosotros.services.meditacion",
    "nosotros.services.facelight",
  ];

  return (
    <footer className="bg-gradient-to-b from-warm-white to-reiki-50 border-t border-reiki-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-14 w-auto mb-4" size={64} />
            </div>
            <p className="text-reiki-600 max-w-md mb-6">
              {t("footer.description")}
            </p>
            <h4 className="font-display text-lg font-semibold text-reiki-800 mb-4">
              {t("social.followTitle")}
            </h4>
            <SocialLinks variant="chip" showLabel />
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-reiki-800 mb-4">
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-reiki-600 hover:text-reiki-800 transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-reiki-800 mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <Link
                    href="/servicios"
                    className="text-reiki-600 hover:text-reiki-800 transition-colors text-sm"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-reiki-100 text-center">
          <p className="text-reiki-500 text-sm">
            &copy; {new Date().getFullYear()} Alas de Amor - Liliana Rodas.
            {` ${t("footer.rights")}`}
          </p>
          <p className="text-reiki-400 text-xs mt-2">
            {t("footer.therapy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
