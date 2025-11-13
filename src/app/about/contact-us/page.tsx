import Link from 'next/link';
import ContactFormBasic from '@/components/forms/ContactFormBasic';
import NewsletterForm from '@/components/forms/NewsletterForm';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export const metadata = {
  title: "Contact Us | Al Dana Amphitheatre — Clone",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <section className="relative h-52 sm:h-64 lg:h-80 overflow-hidden bg-[url('/Contact-Us.jpg.webp')] bg-cover bg-center text-white flex items-end justify-start">
        <h1 className="text-3xl sm:text-4xl font-black tracking-wide m-4">CONTACT US</h1>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-6">
        <nav className="text-xs text-slate-900">
          <Link href="/" className="hover:underline">HOME</Link> <span className="mx-2">›</span> <span className="text-red-500">CONTACT US</span>
        </nav>
      </section>
      <section className="mx-auto max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#1f2a44] text-white rounded-xl p-6">
          <h2 className="text-2xl font-black mb-4">GET IN TOUCH</h2>
          <p className="text-sm mb-4">Complete the form and our team will contact you.</p>
          <ContactFormBasic />
        </div>
        <div className="space-y-6">
          <ImagePlaceholder className="w-full h-64 rounded-xl" label="Map Placeholder" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white shadow p-6 text-center">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">📞</div>
              <div className="text-sm">+973 1234 5678</div>
            </div>
            <div className="rounded-xl bg-white shadow p-6 text-center">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">✉️</div>
              <div className="text-sm">info@aldana.com.bh</div>
            </div>
            <div className="rounded-xl bg-white shadow p-6 text-center">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">📍</div>
              <div className="text-sm">Bahrain</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-black mb-4">BE THE FIRST TO KNOW ABOUT OUR EVENTS</h3>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}