import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function FooterSidebar() {
  return (
    <section className="bg-[#1f2a44] text-white p-6  space-y-8">
      <div>
        <h4 className="text-teal-300 text-sm font-black tracking-widest">MENU</h4>
        <nav className="mt-4 space-y-3">
          <Link href="/" className="block text-sm font-black">CONCERTS & EVENTS</Link>
          <Link href="#" className="block text-sm font-black"><span className="text-teal-300 mr-2">+</span>INFORMATION</Link>
          <Link href="/about/our-story" className="block text-sm font-black"><span className="text-teal-300 mr-2">+</span>ABOUT US</Link>
          <Link href="/careers" className="block text-sm font-black">CAREERS</Link>
        </nav>
      </div>

      <div>
        <h4 className="text-teal-300 text-sm font-black tracking-widest">SOCIAL MEDIA</h4>
        <div className="mt-4 flex items-center gap-4">
          <button aria-label="Facebook" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center text-xs">f</button>
          <button aria-label="TikTok" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center text-xs">♪</button>
          <button aria-label="Instagram" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center text-xs">◎</button>
          <button aria-label="Snapchat" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center text-xs">👻</button>
          <button aria-label="LinkedIn" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center text-xs">in</button>
          <button aria-label="X" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center text-xs">X</button>
        </div>
      </div>

      <div>
        <h4 className="text-teal-300 text-sm font-black tracking-widest">PROUD PARTNER</h4>
        <div className="mt-4 space-y-4">
          <ImagePlaceholder className="h-10 w-48 rounded bg-white/10" label="Mumtalakat" />
          <ImagePlaceholder className="h-12 w-48 rounded bg-white/10" label="Bahrain" />
        </div>
      </div>

      <div>
        <h4 className="text-teal-300 text-sm font-black tracking-widest">CERTIFICATIONS</h4>
        <div className="mt-4">
          <ImagePlaceholder className="h-24 w-24 rounded bg-white" label="GPTW" />
        </div>
      </div>

      <div>
        <h4 className="text-teal-300 text-sm font-black tracking-widest">AWARDS</h4>
        <div className="mt-4 flex items-center gap-4">
          <ImagePlaceholder className="h-16 w-16 rounded-full bg-white/10" label="Award" />
          <ImagePlaceholder className="h-16 w-16 rounded-full bg-white/10" label="Award" />
        </div>
      </div>
    </section>
  )
}