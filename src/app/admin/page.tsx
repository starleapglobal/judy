import { prisma } from "@/lib/prisma";
import { upsertPage, upsertSection } from "./actions";

const PAGE_CONFIG = [
  { slug: "home", label: "Home" },
  { slug: "events", label: "Events" },
  { slug: "spiritual-travel", label: "SOUL Spiritual Travel" },
  { slug: "heartbeat", label: "HeartBEat" },
  { slug: "about", label: "About" },
  { slug: "contact", label: "Contact" },
] as const;

export const metadata = {
  title: "Admin | Heart4Souls",
};

export default async function AdminPage() {
  const pages = await prisma.page.findMany({
    where: {
      slug: {
        in: PAGE_CONFIG.map((p) => p.slug),
      },
    },
    include: { sections: true },
  });

  const bySlug = new Map(pages.map((p) => [p.slug, p]));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16 space-y-10">
      <section className="rounded-3xl bg-white/90 p-6 md:p-10 shadow-sm">
        <h1 className="font-heading text-3xl md:text-4xl text-pink-800 mb-3">
          Admin Dashboard
        </h1>
        <p className="text-sm md:text-base text-emerald-900 max-w-3xl">
          Update page hero copy and main body content. Enter the admin password
          configured in your <code>.env</code> file as{" "}
          <code>ADMIN_PASSWORD</code> to save changes.
        </p>
      </section>

      <div className="space-y-8">
        {PAGE_CONFIG.map((config) => {
          const page = bySlug.get(config.slug);
          const bodySection = page?.sections.find((s) => s.key === "body");

          return (
            <section
              key={config.slug}
              className="rounded-3xl bg-white/90 p-6 md:p-8 shadow-sm border border-pink-100 space-y-6"
            >
              <h2 className="font-heading text-2xl text-pink-800">
                {config.label}
              </h2>

              <form
                className="grid gap-4 md:grid-cols-2 text-sm"
                action={upsertPage}
              >
                <input type="hidden" name="slug" value={config.slug} />
                <div className="space-y-1">
                  <label className="block text-emerald-900" htmlFor={`${config.slug}-title`}>
                    Page title
                  </label>
                  <input
                    id={`${config.slug}-title`}
                    name="title"
                    defaultValue={page?.title ?? config.label}
                    className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-emerald-900" htmlFor={`${config.slug}-cta-label`}>
                    Hero CTA label
                  </label>
                  <input
                    id={`${config.slug}-cta-label`}
                    name="heroCtaLabel"
                    defaultValue={page?.heroCtaLabel ?? ""}
                    className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="block text-emerald-900" htmlFor={`${config.slug}-hero-title`}>
                    Hero title
                  </label>
                  <input
                    id={`${config.slug}-hero-title`}
                    name="heroTitle"
                    defaultValue={page?.heroTitle ?? ""}
                    className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label
                    className="block text-emerald-900"
                    htmlFor={`${config.slug}-hero-subtitle`}
                  >
                    Hero subtitle
                  </label>
                  <textarea
                    id={`${config.slug}-hero-subtitle`}
                    name="heroSubtitle"
                    rows={3}
                    defaultValue={page?.heroSubtitle ?? ""}
                    className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-emerald-900" htmlFor={`${config.slug}-cta-href`}>
                    Hero CTA link (href)
                  </label>
                  <input
                    id={`${config.slug}-cta-href`}
                    name="heroCtaHref"
                    defaultValue={page?.heroCtaHref ?? ""}
                    className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-emerald-900" htmlFor={`${config.slug}-password`}>
                    Admin password
                  </label>
                  <input
                    id={`${config.slug}-password`}
                    name="password"
                    type="password"
                    className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700"
                  >
                    Save hero content
                  </button>
                </div>
              </form>

              <form
                className="space-y-3 text-sm"
                action={upsertSection}
              >
                <input type="hidden" name="slug" value={config.slug} />
                <input type="hidden" name="key" value="body" />
                <div className="space-y-1">
                  <label className="block text-emerald-900" htmlFor={`${config.slug}-body-heading`}>
                    Main body heading
                  </label>
                  <input
                    id={`${config.slug}-body-heading`}
                    name="heading"
                    defaultValue={bodySection?.heading ?? ""}
                    className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-emerald-900" htmlFor={`${config.slug}-body-content`}>
                    Main body content (supports paragraphs)
                  </label>
                  <textarea
                    id={`${config.slug}-body-content`}
                    name="content"
                    rows={6}
                    defaultValue={bodySection?.content ?? ""}
                    className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div className="text-xs text-emerald-900">
                    This text will be used by the page implementation where body
                    content is supported.
                  </div>
                  <div className="flex gap-3">
                    <input
                      name="password"
                      type="password"
                      placeholder="Admin password"
                      className="w-40 rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700"
                    >
                      Save body content
                    </button>
                  </div>
                </div>
              </form>
            </section>
          );
        })}
      </div>
    </div>
  );
}


