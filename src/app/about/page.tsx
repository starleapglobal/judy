import Image from "next/image";

export const metadata = {
  title: "About Rev. Dr. Judi Weaver | Heart4Souls",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3823006/pexels-photo-3823006.jpeg"
          alt="Woman in meditation facing the sun"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-pink-200">
            Doctor of Metaphysics • Channel • Shamanic Practitioner
          </p>
          <h1 className="font-heading text-3xl md:text-4xl">
            Meet Rev. Dr. Judi Weaver
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-pink-50">
            A gentle, grounded guide devoted to helping you remember your own
            wisdom, power, and connection to the Divine.
          </p>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-16 pt-4 md:px-6">
        <section className="grid gap-8 rounded-3xl bg-white/95 p-6 shadow-sm md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:p-10 md:items-start">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl text-pink-800 md:text-3xl">
              A Journey of Light, Love, and Transformation
            </h2>
            <p className="text-sm md:text-base text-emerald-900 max-w-xl">
              Judi is a Spiritual Trance Channel Medium, Doctor of Metaphysics
              &amp; Healing, Published Author, and Shamanic Practitioner. Since
              the 1990s, she has helped people on their spiritual journeys
              through ancient practices, multidimensional teachings, and
              grounded mentorship.
            </p>
            <p className="text-sm md:text-base text-emerald-900 max-w-xl">
              She founded Heart 4 Souls, a non-profit organization dedicated to
              the development of spiritual practices and healing modalities,
              because she has a passion for training Lightworkers. Judi
              believes everyone with a curious and compassionate heart deserves
              access to quality, individualized spiritual learning.
            </p>
            <p className="text-sm md:text-base text-emerald-900 max-w-xl">
              Her philosophy is that every person should eventually outgrow
              their teacher or mentor—including her. She is committed to
              putting the tools for spiritual growth in your hands and helping
              you step into your power and purpose.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl border border-pink-100 bg-black/5 md:h-96">
            <Image
              src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
              alt="Spiritual teacher sitting in meditation outdoors"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl bg-white/95 p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="space-y-3">
            <h3 className="font-heading text-2xl text-pink-800 mb-1">
              How I Work With You
            </h3>
            <p className="text-sm md:text-base text-emerald-900">
              Every session and training is tailored to you—your needs, your
              soul&apos;s path, and your spiritual aspirations. Whether through
              1-on-1 channeling, healing sessions, coursework, or spiritual
              travel, we work together to help you remember your innate wisdom
              and gifts.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-2xl text-pink-800 mb-1">
              A Guide to What&apos;s Beyond
            </h3>
            <p className="text-sm md:text-base text-emerald-900">
              We are each surfing the tides of transformation and being shifted
              into new areas of growth. With Divine Guidance and Healing
              Energies, Judi helps you walk this path with grace—connecting
              with your spiritual team, higher self, and the realms of light
              that are always supporting you.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

