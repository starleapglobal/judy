import Image from "next/image";

export const metadata = {
  title: "Contact | Rev. Dr. Judi Weaver",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"
          alt="Hands holding a warm cup in soft morning light"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-pink-200">
            Sessions • Questions • Invitations
          </p>
          <h1 className="font-heading text-3xl md:text-4xl">
            Contact Judi
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-pink-50">
            Ready to book a 1-on-1 session, ask a question about HeartBEat,
            inquire about a spiritual journey, or invite Judi to speak? Reach
            out below.
          </p>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-16 pt-4 md:px-6">
        <section className="grid gap-8 rounded-3xl bg-white/95 p-6 shadow-sm md:grid-cols-[3fr,2fr] md:p-10">
          <form className="space-y-4 text-sm">
            <div>
              <label className="block text-emerald-900 mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-emerald-900 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-emerald-900 mb-1" htmlFor="topic">
                What are you reaching out about?
              </label>
              <select
                id="topic"
                className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option>Book a 1-on-1 Session</option>
                <option>HeartBEat Community</option>
                <option>SOUL Spiritual Travel</option>
                <option>Events / Speaking</option>
                <option>General Question</option>
              </select>
            </div>
            <div>
              <label className="block text-emerald-900 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-xl border border-emerald-200 bg-[#effcee] px-3 py-2 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Share anything you&apos;d like Judi to know before connecting."
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700"
            >
              Send Message (UI only)
            </button>
            <p className="text-xs text-emerald-900">
              This is a front-end demo form. In a production setup, this would
              send directly to Judi&apos;s secure email or CRM.
            </p>
          </form>

          <div className="space-y-3 rounded-3xl border border-emerald-100 bg-white p-6 text-sm text-emerald-900">
            <h2 className="font-heading text-xl text-pink-800 mb-1">
              Additional Ways to Connect
            </h2>
            <p>
              For current offerings, events, and spiritual travel details,
              please visit the main site judiweaver.com.
            </p>
            <div>
              <p className="mb-1 font-semibold">Location</p>
              <p>Ormond-by-the-Sea, Florida (serving clients worldwide via Zoom)</p>
            </div>
            <div>
              <p className="mb-1 font-semibold">Stay Connected</p>
              <p>Join HeartBEat for free weekly gatherings and messages.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

