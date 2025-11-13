import React from "react";

type Props = {
  className?: string;
  submitLabel?: string;
};

export default function ContactFormBasic({ className = "", submitLabel = "Send Message" }: Props) {
  return (
    <form className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Full Name" className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-300" />
        <input type="email" placeholder="Email" className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-300" />
        <input type="tel" placeholder="Phone" className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-300" />
        <input type="text" placeholder="Subject" className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-300" />
      </div>
      <textarea placeholder="Message" className="w-full min-h-32 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-300" />
      <div className="space-y-2 text-xs text-slate-700">
        <label className="flex items-start gap-2"><input type="checkbox" className="mt-1" /><span>I agree to the <a href="#" className="underline">privacy policy</a></span></label>
        <label className="flex items-start gap-2"><input type="checkbox" className="mt-1" /><span>I agree to receive updates</span></label>
      </div>
      <button type="submit" className="inline-flex items-center justify-center rounded-md bg-teal-400 px-4 py-2 text-slate-900 font-semibold hover:bg-teal-300">{submitLabel}</button>
    </form>
  );
}