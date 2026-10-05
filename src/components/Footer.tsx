import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";
import { getServiceSlug } from "@/lib/services";

export default function Footer() {
  const t = useTranslations();

  const navLinks = [
    { href: "/", labelKey: "nav.inicio" },
    { href: "/nosotros", labelKey: "nav.nosotros" },
    { href: "/servicios", labelKey: "nav.servicios" },
    { href: "/oraculo", labelKey: "nav.oraculo" },
    { href: "/testimonios", labelKey: "nav.testimonios" },
    { href: "/blog", labelKey: "nav.blog" },
    { href: "/agendar", labelKey: "nav.agendar" },
    { href: "/contacto", labelKey: "nav.contacto" },
  ];

  const serviceLinks = [
    { id: "reiki", key: "nosotros.services.reiki" },
    { id: "access", key: "nosotros.services.access" },
    { id: "angelical", key: "nosotros.services.angelical" },
    { id: "chakras", key: "nosotros.services.chakras" },
    { id: "meditacion", key: "nosotros.services.meditacion" },
    { id: "facelight", key: "nosotros.services.facelight" },
  ];

  return (
    <footer className="bg-gradient-to-b from-aqua-50 via-warm-white to-reiki-100 border-t-4 border-aqua-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-28 w-auto" />
            </div>
            <p className="text-reiki-600 max-w-md mb-6">
              {t("footer.description")}
            </p>
            <h4 className="font-display text-2xl font-semibold text-reiki-800 mb-4">
              {t("social.followTitle")}
            </h4>
            <SocialLinks variant="chip" showLabel />
          </div>

          <div>
            <h4 className="font-display text-2xl font-semibold text-reiki-800 mb-4">
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
            <h4 className="font-display text-2xl font-semibold text-reiki-800 mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ id, key }) => (
                <li key={key}>
                  <Link
                    href={`/servicios/${getServiceSlug(id) ?? ""}`}
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
          <p className="text-reiki-600 text-xs mt-2">
            {t("footer.therapy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
