import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "HeartBEat Tribe | Rev. Dr. Judi Weaver",
};

export default function HeartbeatPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3822624/pexels-photo-3822624.jpeg"
          alt="Circle of people meditating with soft sunlight"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-pink-200">
            Community • Channeling • Rhythm
          </p>
          <h1 className="font-heading text-3xl md:text-4xl">
            HeartBEat Tribe
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-pink-50">
            A tribe of seekers receiving answers through live channeling,
            meditations, and weekly rhythm gatherings with Judi.
          </p>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-16 pt-4 md:px-6">
        <section className="grid gap-8 rounded-3xl bg-white/95 p-6 shadow-sm md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:p-10 md:items-center">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Weekly Tribal Gatherings
            </p>
            <h2 className="font-heading text-2xl text-pink-800 md:text-3xl">
              A Rhythm of Support for Your Awakening
            </h2>
            <p className="text-sm md:text-base text-emerald-900 max-w-xl">
              Join our weekly online HeartBEat gatherings every Wednesday at
              7:00 PM starting January 2026. Come as you are and receive
              guidance, healing energy, and practical tools you can weave into
              everyday life.
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="inline-flex items-center rounded-full bg-pink-600 px-4 py-2 font-semibold text-white shadow-sm">
                LIVE Channeling &amp; Meditations
              </span>
              <span className="inline-flex items-center rounded-full bg-[#effcee] px-4 py-2 font-semibold text-pink-800">
                Group &amp; Individual Studies
              </span>
              <span className="inline-flex items-center rounded-full bg-[#fff7fb] px-4 py-2 font-semibold text-pink-700">
                Light Language Activations
              </span>
            </div>
            <p className="mt-3 text-xs text-emerald-900">
              Best of all, it is <span className="font-semibold">FREE</span> to
              join HeartBEat and be part of this expanding circle.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-3xl border border-emerald-100 bg-black/5 md:h-80">
            <Image
              src="https://images.pexels.com/photos/3822625/pexels-photo-3822625.jpeg"
              alt="Woman playing drum during ceremony"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="rounded-3xl bg-white/95 p-6 shadow-sm md:p-10">
          <h2 className="font-heading text-2xl text-pink-800 md:text-3xl mb-3">
            What You&apos;ll Experience
          </h2>
          <ul className="grid gap-4 text-sm text-emerald-900 md:grid-cols-3">
            <li className="rounded-2xl border border-pink-100 bg-[#fff7fb] p-4">
              Weekly live gatherings with trance channeled guidance and Q&amp;A.
            </li>
            <li className="rounded-2xl border border-emerald-100 bg-[#effcee] p-4">
              Transformative meditations and energy activations to align your
              field.
            </li>
            <li className="rounded-2xl border border-pink-100 bg-white p-4">
              A supportive community of Lightworkers and seekers walking beside
              you.
            </li>
          </ul>
        </section>

        <section className="rounded-3xl bg-white/95 p-6 shadow-sm md:p-10">
          <h2 className="font-heading text-2xl text-pink-800 mb-3">
            How to Join
          </h2>
          <p className="text-sm md:text-base text-emerald-900 max-w-3xl">
            Visit the Join HeartBEat section on Judi&apos;s main site to register
            for the community. After joining, you&apos;ll receive call links,
            replays, and announcements for upcoming channelings, classes, and
            special events.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link
              href="/contact"
              className="rounded-full bg-pink-600 px-6 py-2 font-semibold text-white shadow-sm hover:bg-pink-700"
            >
              Ask About HeartBEat
            </Link>
            <Link
              href="/events"
              className="rounded-full border border-pink-300 bg-white/80 px-6 py-2 font-semibold text-pink-700 hover:bg-white"
            >
              See Upcoming HeartBEat Events
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

