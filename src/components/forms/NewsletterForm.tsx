import React from "react";

type Props = {
  className?: string;
  submitLabel?: string;
};

export default function NewsletterForm({ className = "", submitLabel = "Subscribe" }: Props) {
  return (
    <form className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400" />
        <input type="text" placeholder="Last Name" className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400" />
        <input type="email" placeholder="Email" className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400" />
        <input type="tel" placeholder="Phone" className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400" />
      </div>
      <div className="text-xs text-slate-700">
        <label className="flex items-start gap-2"><input type="checkbox" className="mt-1" /><span>I agree to the <a href="#" className="underline">terms and conditions</a></span></label>
      </div>
      <button type="submit" className="inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-white font-semibold hover:bg-teal-400">{submitLabel}</button>
    </form>
  );
}