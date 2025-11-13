import Link from 'next/link'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { FaFacebookF, FaTiktok, FaInstagram, FaSnapchat, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

export default function FooterSidebar() {
  return (
    <section className="bg-[#1f2a44] text-white p-6  space-y-8">
      <div>
        <h4 className="text-blue-300 text-sm font-black tracking-widest">MENU</h4>
        <nav className="mt-4 space-y-3">
          <Link href="/" className="block text-sm font-black">CONCERTS & EVENTS</Link>
          <Link href="#" className="block text-sm font-black"><span className="text-blue-300 mr-2">+</span>INFORMATION</Link>
          <Link href="/about/our-story" className="block text-sm font-black"><span className="text-blue-300 mr-2">+</span>ABOUT US</Link>
          <Link href="/careers" className="block text-sm font-black">CAREERS</Link>
        </nav>
      </div>

      <div>
        <h4 className="text-blue-300 text-sm font-black tracking-widest">SOCIAL MEDIA</h4>
        <div className="mt-4 flex items-center gap-4">
          <button aria-label="Facebook" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center"><FaFacebookF size={16} /></button>
          <button aria-label="TikTok" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center"><FaTiktok size={16} /></button>
          <button aria-label="Instagram" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center"><FaInstagram size={16} /></button>
          <button aria-label="Snapchat" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center"><FaSnapchat size={16} /></button>
          <button aria-label="LinkedIn" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center"><FaLinkedinIn size={16} /></button>
          <button aria-label="X" className="h-8 w-8 rounded-full border border-white/70 flex items-center justify-center"><FaXTwitter size={16} /></button>
        </div>
      </div>

      <div>
        <h4 className="text-blue-300 text-sm font-black tracking-widest">PROUD PARTNER</h4>
        <div className="mt-4 space-y-4">
          <img src="/footer-ico/Mumtalakat-logo.svg" className="" alt="Mumtalakat" />
          <img src="/footer-ico/bahrain-logo.svg" className="h-14 " alt="Mumtalakat" />
        </div>
      </div>

      <div>
        <h4 className="text-blue-300 text-sm font-black tracking-widest">CERTIFICATIONS</h4>
        <div className="mt-4">
           <img src="/footer-ico/11.png" className="h-28 " alt="Mumtalakat" />
        </div>
      </div>

      <div>
        <h4 className="text-blue-300 text-sm font-black tracking-widest">AWARDS</h4>
        <div className="mt-4 flex items-center gap-1">
          <img src="/footer-ico/award-logo.svg" className="h-22" alt="Mumtalakat" />
           <img src="/footer-ico/creative-award.png.webp" className="h-22 " alt="Mumtalakat" />
        </div>
      </div>
    </section>
  )
}