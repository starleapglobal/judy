import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SOUL Spiritual Travel | Rev. Dr. Judi Weaver",
};

export default function SpiritualTravelPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1480861/pexels-photo-1480861.jpeg"
          alt="Sunrise over sacred mountains and valley"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-pink-200">
            Peru • Greece • England • Beyond
          </p>
          <h1 className="font-heading text-3xl md:text-4xl">
            SOUL Spiritual Travel
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-pink-50">
            Is your soul seeking sacred spiritual lands? Travel with Judi to
            places where the veils are thin and the ancient ones still whisper.
          </p>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-16 pt-4 md:px-6">
        <section className="grid gap-8 rounded-3xl bg-white/95 p-6 shadow-sm md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:p-10 md:items-center">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Why We Travel
            </p>
            <h2 className="font-heading text-2xl text-pink-800 md:text-3xl">
              A Journey Back to Your Soul
            </h2>
            <p className="text-sm md:text-base text-emerald-900 max-w-xl">
              Spiritual travel brings you back to yourself and helps you refocus
              on your path. Each pilgrimage weaves together ceremony, channeled
              guidance, and time with the land itself.
            </p>
            <p className="text-sm md:text-base text-emerald-900 max-w-xl">
              Past journeys have included the Hopi Reservation, Sedona, the
              Sacred Valley and Lake Titicaca in Peru, Mount Shasta, and more.
              These trips are designed to accelerate your spiritual growth and
              help you remember who you truly are.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-3xl border border-emerald-100 bg-black/5 md:h-80">
            <Image
              src="https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg"
              alt="Group standing on a mountain overlook in reflection"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl bg-white/95 p-6 shadow-sm md:grid-cols-3 md:p-10">
          <article className="space-y-3 text-sm text-emerald-900">
            <h3 className="font-heading text-lg text-pink-800">
              Mystery School at Sea
            </h3>
            <p>
              10-day Mediterranean Cruise to Greece &amp; Turkey with exclusive
              shore excursions to ancient mystery school sites and on-board
              presentations.
            </p>
            <p className="text-xs text-emerald-700">
              Athens, Nafplio, Rhodes, Kavala, Thessaloniki, and Ephesus.
            </p>
          </article>
          <article className="space-y-3 text-sm text-emerald-900">
            <h3 className="font-heading text-lg text-pink-800">
              Ancient Temples &amp; Ceremonies – Peru
            </h3>
            <p>
              Travel through the Sacred Valley and Ancient Mystical Temples,
              holding ceremony with wisdom keepers and connecting with the
              spirits of the land.
            </p>
            <p className="text-xs text-emerald-700">
              Pathways to deepen your relationship with Pachamama.
            </p>
          </article>
          <article className="space-y-3 text-sm text-emerald-900">
            <h3 className="font-heading text-lg text-pink-800">
              Glastonbury &amp; Future Journeys
            </h3>
            <p>
              Pilgrimage to Avalon&apos;s heart along with upcoming journeys to the
              Amazon, Thailand, Bali, and other sacred lands.
            </p>
            <p className="text-xs text-emerald-700">
              A soul family experience in some of the world&apos;s most mystical
              places.
            </p>
          </article>
        </section>

        <section className="rounded-3xl bg-white/95 p-6 shadow-sm md:p-10">
          <h2 className="font-heading text-2xl text-pink-800 md:text-3xl mb-3">
            Ready to Journey?
          </h2>
          <p className="text-sm md:text-base text-emerald-900 max-w-3xl">
            If you feel called to travel with Judi, visit the Contact page to
            inquire about upcoming trips or join HeartBEat to receive
            announcements and special opportunities. Follow the nudge—your soul
            may be inviting you into your next initiation.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link
              href="/contact"
              className="rounded-full bg-pink-600 px-6 py-2 font-semibold text-white shadow-sm hover:bg-pink-700"
            >
              Ask About Upcoming Trips
            </Link>
            <Link
              href="/heartbeat"
              className="rounded-full border border-pink-300 bg-white/80 px-6 py-2 font-semibold text-pink-700 hover:bg-white"
            >
              Receive Travel Announcements
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

