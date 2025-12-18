import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg"
          alt="Silhouette of a woman meditating at sunrise over the ocean"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-pink-200">
            Heart 4 Souls • HeartBEat
          </p>
          <h1 className="font-heading text-3xl leading-snug md:text-4xl lg:text-5xl">
            Welcome to Heart 4 Souls.
            <br />
            Your journey of healing and
            <br className="hidden md:block" />
            transformation begins here.
          </h1>
          <p className="mt-5 max-w-xl text-sm md:text-base text-pink-50">
            Spiritual channeling, healing modalities, and shamanic practices
            from Rev. Dr. Judi Weaver to heal the soul and reconnect with the
            earth.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm">
            <Link
              href="/events"
              className="rounded-full bg-pink-600 px-6 py-2 font-semibold text-white shadow-sm hover:bg-pink-700"
            >
              Explore My Offerings
            </Link>
            <Link
              href="/heartbeat"
              className="rounded-full border border-pink-200/80 bg-white/10 px-6 py-2 font-semibold text-pink-50 hover:bg-white/20"
            >
              Join HeartBEat
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-6 md:px-6">
        {/* Two paths, one heart */}
        <section className="space-y-8 rounded-3xl bg-white/95 p-6 shadow-sm md:p-10">
          <div className="text-center space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-600">
              Two Paths, One Heart
            </p>
            <h2 className="font-heading text-2xl text-pink-800 md:text-3xl">
              The Heart of Healing
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-emerald-900 md:text-base">
              Blending spiritual guidance with the ancient rhythm of shamanic
              practice to heal the soul and reconnect with the earth.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-3xl border border-pink-100 bg-[#fff7fb] p-6 shadow-sm">
              <div className="space-y-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/10 text-pink-600">
                  ♥
                </div>
                <h3 className="font-heading text-xl text-pink-800">
                  Heart 4 Souls
                </h3>
                <p className="text-sm text-emerald-900">
                  Dedicated to spiritual guidance, trance channeling, metaphysical
                  education, and deep energetic healing through love.
                </p>
              </div>
              <div className="mt-5">
                <Link
                  href="/about"
                  className="text-sm font-semibold text-pink-700 hover:text-pink-800"
                >
                  Discover Heart 4 Souls →
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-3xl border border-emerald-100 bg-[#effcee] p-6 shadow-sm">
              <div className="space-y-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  ♪
                </div>
                <h3 className="font-heading text-xl text-pink-800">
                  HeartBEat
                </h3>
                <p className="text-sm text-emerald-900">
                  Shamanic drum journeys, rhythm practices, and soul teachings to
                  reconnect with the heartbeat of Mother Earth.
                </p>
              </div>
              <div className="mt-5">
                <Link
                  href="/heartbeat"
                  className="text-sm font-semibold text-pink-700 hover:text-pink-800"
                >
                  Explore the Rhythm →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Judi */}
        <section className="grid gap-8 rounded-3xl bg-white/95 p-6 shadow-sm md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:p-10 md:items-center">
          <div className="relative h-72 overflow-hidden rounded-3xl border border-pink-100 bg-black/5 md:h-96">
            <Image
              src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg"
              alt="Woman meditating outdoors at sunrise"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 md:pl-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Meet Judi Weaver
            </p>
            <h2 className="font-heading text-2xl text-pink-800 md:text-3xl">
              A Journey of Light, Love, and Transformation
            </h2>
            <p className="text-sm md:text-base text-emerald-900">
              &quot;I believe that every soul has its own unique rhythm and
              divine purpose. My mission is to help you rediscover that
              connection through love.&quot;
            </p>
            <p className="text-sm md:text-base text-emerald-900">
              With decades of experience in spiritual connection and shamanic
              traditions, Judi brings a grounded, compassionate approach to
              metaphysical healing. Whether through channeling, one-on-one
              sessions, or guiding you in the dreamtime, she opens doorways to
              higher consciousness.
            </p>
            <Link
              href="/about"
              className="inline-flex rounded-full bg-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700"
            >
              Read My Story
            </Link>
          </div>
        </section>

        {/* Sacred offerings */}
        <section className="space-y-6 rounded-3xl bg-white/95 p-6 shadow-sm md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Sacred Offerings
              </p>
              <h2 className="font-heading text-2xl text-pink-800 md:text-3xl">
                Pathways to Your Personal Evolution
              </h2>
            </div>
            <Link
              href="/events"
              className="text-xs font-semibold text-pink-700 hover:text-pink-800"
            >
              View All Services →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
                  alt="Crystals and candle arranged on an altar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5 text-sm text-emerald-900">
                <h3 className="font-heading text-lg text-pink-800">
                  Crystal Light Therapy
                </h3>
                <p>
                  Align your energy field and release heavy blocks using sacred
                  crystals, light codes, and channelled frequency.
                </p>
                <Link
                  href="/events"
                  className="mt-auto text-xs font-semibold text-pink-700 hover:text-pink-800"
                >
                  Learn More →
                </Link>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
                  alt="Silhouette in meditation at sunset"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5 text-sm text-emerald-900">
                <h3 className="font-heading text-lg text-pink-800">
                  Trance Channeling
                </h3>
                <p>
                  Receive guided messages, soul-level insights, and energetic
                  adjustments from higher realms through Judi&apos;s trance
                  channel.
                </p>
                <Link
                  href="/contact"
                  className="mt-auto text-xs font-semibold text-pink-700 hover:text-pink-800"
                >
                  Book a Session →
                </Link>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm">
              <div className="relative h-40">
                <Image
                  src="https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg"
                  alt="Group of people sitting in circle outdoors"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5 text-sm text-emerald-900">
                <h3 className="font-heading text-lg text-pink-800">
                  Workshops &amp; Retreats
                </h3>
                <p>
                  Immerse yourself in group experiences designed to deepen your
                  practice, awaken your gifts, and build community.
                </p>
                <Link
                  href="/events"
                  className="mt-auto text-xs font-semibold text-pink-700 hover:text-pink-800"
                >
                  Explore Gatherings →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* CTA band */}
        <section className="rounded-3xl bg-gradient-to-r from-[#effcee] via-white to-[#ffe0f1] p-8 text-center shadow-sm md:p-10">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Ready to Awaken Your Soul?
          </p>
          <h2 className="font-heading text-2xl text-pink-800 md:text-3xl">
            Book a session or join our mailing list to receive light, love, and
            updates on upcoming events.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <Link
              href="/contact"
              className="rounded-full bg-pink-600 px-6 py-2 font-semibold text-white shadow-sm hover:bg-pink-700"
            >
              Book a Session
            </Link>
            <Link
              href="/heartbeat"
              className="rounded-full border border-pink-300 bg-white/80 px-6 py-2 font-semibold text-pink-700 hover:bg-white"
            >
              Join HeartBEat
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
