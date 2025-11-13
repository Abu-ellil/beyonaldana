"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "CONCERTS & EVENTS", href: "/" },
    { label: "INFORMATION", href: "#", sign: true },
    { label: "ABOUT US", sublinks: [
      { label: "OUR STORY", href: "/about/our-story" },
      { label: "CONTACT US", href: "/about/contact-us" }
    ] },
    { label: "CAREERS", href: "/careers" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 p-4 ${
          isScrolled
            ? "bg-slate-900/90 text-white backdrop-blur-sm"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link href="/">
            <img
              src="/beyon-logo.svg"
              alt="Beyon | Al Dana Amphitheatre"
              className="h-8 w-auto transition-opacity duration-300"
              style={{ opacity: isScrolled ? 1 : 0.9 }}
              />
              </Link>
          </div>
          <button
            aria-label="Open menu"
            className="p-2 rounded hover:bg-white/10 transition-colors duration-300"
            onClick={() => setOpen(true)}
          >
            <span
              className={`block w-6 h-[2px] bg-white mb-[5px] transition-all duration-300 ${
                isScrolled ? "opacity-100" : "opacity-90"
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white mb-[5px] transition-all duration-300 ${
                isScrolled ? "opacity-100" : "opacity-90"
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                isScrolled ? "opacity-100" : "opacity-90"
              }`}
            />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#1f2a44] text-white">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/beyon-logo.svg"
                alt="Beyon | Al Dana Amphitheatre"
                className="h-8 w-auto"
              />
            </div>
            <button
              aria-label="Close menu"
              className="p-2 rounded hover:bg-white/10"
              onClick={() => { setOpen(false); setSubmenuOpen(false); }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" />
                <path d="M6 18L18 6" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <nav className="px-6 space-y-2 h-full flex flex-col justify-center">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.sublinks ? (
                  <button
                    className="group flex items-center gap-3 text-2xl font-extrabold tracking-wide"
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  >
                    <span className="text-teal-300 text-lg">+</span>
                    <span
                      className="group-hover:underline underline-offset-4 font-extrabold"
                      style={{
                        fontFamily: '"Titling Gothic FB Compressed", Arial, sans-serif',
                        fontWeight: 900,
                      }}
                    >
                      {item.label}
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-2xl font-extrabold tracking-wide"
                    onClick={() => setOpen(false)}
                  >
                    {item.sign ? (
                      <span className="text-teal-300 text-lg">+</span>
                    ) : (
                      <span className="text-teal-300 text-xl pl-3"></span>
                    )}
                    <span
                      className="group-hover:underline underline-offset-4 font-extrabold"
                      style={{
                        fontFamily: '"Titling Gothic FB Compressed", Arial, sans-serif',
                        fontWeight: 900,
                      }}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}
                {item.sublinks && submenuOpen && (
                  <div className="ml-6 space-y-2">
                    {item.sublinks.map((sublink) => (
                      <Link
                        key={sublink.label}
                        href={sublink.href}
                        className="block text-xl font-extrabold tracking-wide hover:underline underline-offset-4"
                        onClick={() => { setOpen(false); setSubmenuOpen(false); }}
                      >
                        <span className="text-teal-300 text-lg">-</span>
                        <span
                          style={{
                            fontFamily: '"Titling Gothic FB Compressed", Arial, sans-serif',
                            fontWeight: 900,
                          }}
                        >
                          {sublink.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
