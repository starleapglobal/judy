import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Events | Rev. Dr. Judi Weaver",
};

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3822624/pexels-photo-3822624.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
          alt="Circle of people meditating at sunrise"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-pink-200">
            Live Channelings • Classes • Retreats
          </p>
          <h1 className="font-heading text-3xl md:text-4xl">
            What&apos;s Happening with Heart 4 Souls
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-pink-50">
            Stay current with upcoming live channelings, HeartBEat gatherings,
            classes, and sacred journeys led by Rev. Dr. Judi Weaver.
          </p>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-16 pt-4 md:px-6">
        <section className="space-y-6 rounded-3xl bg-white/95 p-6 shadow-sm md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Featured Series
              </p>
              <h2 className="font-heading text-2xl text-pink-800 md:text-3xl">
                Seasonal Channelings &amp; Activations
              </h2>
            </div>
            <span className="rounded-full bg-[#effcee] px-4 py-1 text-xs font-semibold text-emerald-800">
              Online • Zoom &amp; HeartBEat
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 text-sm text-emerald-900">
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-2xl border border-pink-100 bg-[#fff7fb] px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
                    12/12 • 12:00 PM
                  </p>
                  <p className="font-semibold">Portal Attunement</p>
                </div>
                <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white">
                  Free in HeartBEat
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-pink-100 bg-white px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
                    12/21 • 7:00 PM
                  </p>
                  <p className="font-semibold">Winter Solstice Gateway Channeling</p>
                </div>
                <span className="rounded-full bg-[#effcee] px-3 py-1 text-[11px] font-semibold text-emerald-800">
                  Zoom
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-pink-100 bg-white px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
                    12/28 • 7:00 PM
                  </p>
                  <p className="font-semibold">Illuminate Your Pathway</p>
                </div>
                <span className="rounded-full bg-[#effcee] px-3 py-1 text-[11px] font-semibold text-emerald-800">
                  Zoom
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-pink-100 bg-white px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
                    1/1 • 7:00 PM
                  </p>
                  <p className="font-semibold">New Year&apos;s LIVE Channeling Forecast</p>
                </div>
                <span className="rounded-full bg-[#effcee] px-3 py-1 text-[11px] font-semibold text-emerald-800">
                  HeartBEat
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <p>
                These powerful transmissions support you through energetic
                gateways, anchoring more light, clarity, and guidance for the
                year ahead. Replay access is available for HeartBEat members.
              </p>
              <p>
                Join live to ask questions, receive personal messages, and sit in
                community with other Lightworkers and seekers.
              </p>
              <Link
                href="/heartbeat"
                className="inline-flex rounded-full bg-pink-600 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm hover:bg-pink-700"
              >
                Join HeartBEat for Details
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl bg-white/95 p-6 shadow-sm md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:p-10">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Deep Dive Training
            </p>
            <h2 className="font-heading text-2xl text-pink-800 md:text-3xl">
              M.A.S.T.E.R.S. in Training
            </h2>
            <p className="text-sm text-emerald-900 md:text-base">
              Seven-week LIVE series beginning January 7th, 6–8pm EST.
              Fast-track your evolution and step into your own mastery with
              grounded teachings, experiential practice, and live Q&amp;A.
            </p>
            <ul className="text-sm text-emerald-900 space-y-1">
              <li>M – Me: Who am I?</li>
              <li>A – Activating &amp; Understanding Awareness &amp; Integration</li>
              <li>S – Sensitivities: Embrace New Frequencies in You</li>
              <li>T – Team Support: Your Spiritual Team &amp; New Members</li>
              <li>E – Explore Connection &amp; Experience Consciousness</li>
              <li>R – Realms &amp; Reality: Expanding your World</li>
              <li>S – Source: Working with Unlimited Light &amp; Love Every Day</li>
            </ul>
          </div>
          <div className="relative h-60 overflow-hidden rounded-3xl border border-pink-100 bg-black/5 md:h-full">
            <Image
              src="https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg"
              alt="Woman teaching spiritual class outdoors"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl bg-white/95 p-6 shadow-sm md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:p-10">
          <div className="relative h-60 overflow-hidden rounded-3xl border border-emerald-100 bg-black/5 md:h-full">
            <Image
              src="https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg"
              alt="Temple ruins at sunrise near the sea"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3 md:pl-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Sacred Travel
            </p>
            <h2 className="font-heading text-2xl text-pink-800 md:text-3xl">
              Mystery School at Sea &amp; Sacred Journeys
            </h2>
            <p className="text-sm md:text-base text-emerald-900">
              Several times a year, Judi leads small group spiritual travel to
              sacred lands across the world. Upcoming adventures include the
              Mystery School at Sea Mediterranean cruise to Greece &amp; Turkey,
              ceremonies in Peru&apos;s Ancient Temples, Glastonbury, and more.
            </p>
            <p className="text-sm md:text-base text-emerald-900">
              These journeys blend ceremony, ancient mystery school wisdom, and
              modern integration to help you return to your soul truth and life
              path.
            </p>
            <Link
              href="/spiritual-travel"
              className="inline-flex rounded-full bg-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700"
            >
              Explore Spiritual Travel
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

