import Link from 'next/link';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import ContactFormBasic from '@/components/forms/ContactFormBasic';
import NewsletterForm from '@/components/forms/NewsletterForm';

export const metadata = {
  title: "Our Story | Al Dana Amphitheatre — Clone",
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <section className="relative h-52 sm:h-64 lg:h-80 overflow-hidden bg-slate-900 text-white flex items-end justify-start p-4 bg-[url('/Contact-Us.jpg.webp')] bg-cover bg-center ">
        <h1 className="text-3xl sm:text-4xl font-black tracking-wide">OUR STORY</h1>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-6">
        <nav className="text-xs text-slate-900">
          <Link href="/" className="hover:underline">HOME</Link> <span className="mx-2">›</span> <span className="text-red-500">OUR STORY</span>
        </nav>
      </section>
      <section className="mx-auto max-w-5xl px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <h3 className="text-xl font-black">ARCHITECTURE</h3>
            <p className="text-sm text-slate-900">Modern design with attention to acoustics and audience experience.</p>
          </div>
          <ImagePlaceholder className="w-full h-48 rounded-xl" label="Architecture" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <ImagePlaceholder className="w-full h-48 rounded-xl md:order-2" label="Community" />
          <div className="space-y-3 md:order-1">
            <h3 className="text-xl font-black">COMMUNITY</h3>
            <p className="text-sm text-slate-900">Built to bring people together through music and culture.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <h3 className="text-xl font-black">SUSTAINABILITY</h3>
            <p className="text-sm text-slate-900">Efficient systems and sustainable materials throughout.</p>
          </div>
          <ImagePlaceholder className="w-full h-48 rounded-xl" label="Sustainability" />
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="bg-[#1f2a44] text-white rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center text-3xl">📞</div>
          </div>
          <div>
            <h4 className="text-2xl font-black mb-2">GET IN TOUCH</h4>
            <ContactFormBasic />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-black mb-4">BE THE FIRST TO KNOW ABOUT OUR EVENTS</h3>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}