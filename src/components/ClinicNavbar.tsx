"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Beranda", href: "#" },
  { name: "Layanan", href: "#layanan" },
  { name: "Tentang", href: "#tentang" },
  { name: "Fasilitas", href: "#fasilitas" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontak", href: "#kontak" },
];

export function ClinicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 border-border"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col items-start">
            <span className="text-xl md:text-2xl font-display font-bold text-primary leading-none">
              KLINIK MUFIZA
            </span>
            <span className="text-[10px] md:text-xs font-medium text-muted-foreground tracking-widest uppercase">
              Pratama & Sunat Modern
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="sm" className="rounded-full px-6">
              <a href="https://wa.me/6282126845767" target="_blank" rel="noopener noreferrer">
                Booking WA
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="flex flex-col items-center gap-6 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full rounded-full">
            <a href="https://wa.me/6282126845767" target="_blank" rel="noopener noreferrer">
              Chat WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
