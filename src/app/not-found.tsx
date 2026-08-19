import Link from "next/link";

export default function NotFoundRoute() {
  return (
    <section className="flex min-h-[50vh] items-center justify-center bg-warm-white px-4 py-32 text-center">
      <div className="gradient-card rounded-3xl border border-white/50 p-10 shadow-xl">
        <p className="font-display text-6xl font-bold text-reiki-800">404</p>
        <Link
          href="/"
          className="role-cta mt-6 inline-flex rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 px-8 py-4 text-white"
        >
          Alas de Amor
        </Link>
      </div>
    </section>
  );
}
