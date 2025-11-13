import Image from "next/image";
import Link from 'next/link';
import { subscribeNewsletter } from "@/lib/actions";

export const metadata = {
  title: "Careers | Al Dana Amphitheatre — Clone",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero */}
      <section className="relative h-52 sm:h-64 lg:h-80 overflow-hidden bottom-4 left-6 text-white bg-[url('/career-cover2.jpg.webp')] bg-cover bg-center">
        <Image
          src="/window.svg"
          alt="Careers Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-6 text-white "/>
        <div className="absolute bottom-4 left-6 text-white">
          
          <h1 className="text-3xl sm:text-4xl font-black tracking-wide">CAREERS</h1>
        </div>
      </section>

      {/* Body copy */}
      <section className="mx-auto max-w-3xl px-6 py-8 space-y-4">
        <nav className="text-xs text-slate-900">
          <Link href="/" className="hover:underline">HOME</Link> <span className="mx-2">›</span> <span className="text-red-500">CAREERS</span>
        </nav>
        <p className="text-sm text-slate-900 leading-6">
          We are always on the lookout for exceptional new people to join us. Working at Beyon Al Dana Amphitheatre is more than just a job — it’s a culture. We are like a family, supporting and challenging each other to stand out and to drive innovation, working as a team and having fun along the way.
        </p>
        <p className="text-sm text-slate-900 leading-6">
          Our employees are encouraged to be engaging and proactive. In return, we work hard to develop and support our employees through training initiatives, and by supporting their personal and organisational goals.
        </p>
        <p className="text-sm text-slate-900 leading-6">
          We are committed to showcasing and nurturing talent, in addition to attracting some of the world’s biggest stars and events to our versatile venue. If you are a team player who strives to make a difference, we’d love to hear from you at
          {" "}
          <a href="mailto:careers@aldana.com.bh" className="text-rose-600 font-medium">careers@aldana.com.bh</a>.
        </p>
      </section>

      {/* Subscribe form */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-xl font-extrabold tracking-wide mb-4">BE THE FIRST TO KNOW ABOUT OUR EVENTS</h2>
        <form action={subscribeNewsletter} className="bg-white p-6 rounded shadow grid gap-4">
          <input name="firstName" placeholder="FIRST NAME *" className="border rounded px-3 py-2 text-slate-900" required />
          <input name="lastName" placeholder="LAST NAME *" className="border rounded px-3 py-2 text-slate-900" required />
          <input name="phone" placeholder="PHONE NUMBER" className="border rounded px-3 py-2 text-slate-900" />
          <input type="email" name="email" placeholder="EMAIL *" className="border rounded px-3 py-2 text-slate-900" required />
          <label className="flex items-start gap-2 text-xs text-slate-900">
            <input type="checkbox" name="consent" className="mt-1" required />
            <span>
              I hereby accept Beyon Al Dana Amphitheatre’s Privacy Policy and Terms of Use, and agree to receive electronic newsletters and notifications regarding upcoming events and offers.
            </span>
          </label>
          <div className="flex gap-3">
            <button type="submit" className="rounded bg-rose-600 text-white px-4 py-2 text-sm">SUBSCRIBE</button>
          </div>
        </form>
      </section>
    </div>
  );
}