import Link from "next/link";
import { Phone, Instagram, MapPin, Clock, MessageCircle } from "lucide-react";

export function ClinicFooter() {
  return (
    <footer className="bg-muted py-12 md:py-16 border-t border-border" id="kontak">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col items-start">
              <span className="text-xl font-display font-bold text-primary leading-none">
                KLINIK MUFIZA
              </span>
              <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">
                Pratama & Sunat Modern
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Klinik bersih dan nyaman dengan layanan lengkap. Beauty care, sunat modern ramah anak, klinik umum, dan bidan.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" className="p-2 bg-background rounded-full hover:text-primary transition-colors border border-border">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/6282126845767" className="p-2 bg-background rounded-full hover:text-primary transition-colors border border-border">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground italic">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span>Jl. Rancameong No.5, Babakan Penghulu, Kec. Cinambo, Kota Bandung, Jawa Barat 40295</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>0821-2684-5767</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground italic">Jam Operasional</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Senin - Rabu</span>
                <span>09.00 - 17.00</span>
              </li>
              <li className="flex justify-between font-medium text-primary">
                <span>Kamis</span>
                <span>Buka mulai 09.00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Jumat - Sabtu</span>
                <span>09.00 - 17.00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Minggu</span>
                <span>Tutup</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground italic">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#layanan" className="hover:text-primary transition-colors">Mufiza Beauty Care</Link></li>
              <li><Link href="#layanan" className="hover:text-primary transition-colors">Sunat Modern Al-Fatih</Link></li>
              <li><Link href="#layanan" className="hover:text-primary transition-colors">Klinik Umum</Link></li>
              <li><Link href="#layanan" className="hover:text-primary transition-colors">Layanan Bidan</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Klinik Pratama Mufiza. All rights reserved.</p>
          <p className="max-w-md text-center md:text-right italic">
            Informasi di website bersifat umum. Untuk tindakan dan hasil terbaik, konsultasikan kondisi Anda melalui WhatsApp atau kunjungan langsung.
          </p>
        </div>
      </div>
    </footer>
  );
}
