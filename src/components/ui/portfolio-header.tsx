'use client';

import { useEffect, useRef, useState } from 'react';

const menuItems = [
  { label: 'HOME', href: '#home', highlight: true },
  { label: 'WORK', href: '#work' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SERVICES', href: '#services' },
  { label: 'STACK', href: '#stack' },
  { label: 'CONTACT', href: '#contact' },
];

export default function PortfolioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.documentElement.classList.toggle('portfolio-light', isLight);
  }, [isLight]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-6 md:px-8">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between">
        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            className="group relative z-50 grid h-12 w-12 place-items-center rounded-full border border-[#f3e7c8]/15 bg-[#05040a]/55 text-[#d8b76a] shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:border-[#d8b76a]/40 hover:text-[#f3e7c8]"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="relative h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition ${
                  isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-6 rounded-full bg-current transition ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-current transition ${
                  isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>

          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute left-0 top-full mt-3 w-[220px] rounded-2xl border border-[#f3e7c8]/15 bg-[#05040a]/95 p-4 shadow-2xl shadow-black/60 backdrop-blur-2xl"
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block rounded-xl px-3 py-2 text-lg font-black tracking-tight transition hover:bg-[#d8b76a]/10 hover:text-[#d8b76a] ${
                    item.highlight ? 'text-[#d8b76a]' : 'text-[#f7f2e8]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="#home" className="absolute left-1/2 -translate-x-1/2 text-center font-display">
          <span className="block text-2xl font-semibold tracking-[-0.05em] text-[#f7f2e8] md:text-3xl">Godwin</span>
          <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d8b76a]">Sozo Kumah</span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-[#f3e7c8]/15 bg-[#05040a]/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#f3e7c8]/80 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-[#d8b76a]/40 hover:text-[#d8b76a] md:inline-flex"
          >
            DiMiles
          </a>
          <button
            type="button"
            onClick={() => setIsLight((value) => !value)}
            className="relative h-8 w-16 rounded-full border border-[#f3e7c8]/15 bg-[#f3e7c8]/10 transition hover:opacity-80"
            aria-label="Toggle portfolio contrast"
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-gradient-to-br from-[#f7f2e8] to-[#d8b76a] shadow-lg shadow-[#d8b76a]/20 transition-transform duration-300 ${
                isLight ? 'translate-x-1' : 'translate-x-8'
              }`}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
