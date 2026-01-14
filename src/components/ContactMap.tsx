"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Clock, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";

export function ContactMap() {
  return (
    <section className="py-20 bg-muted/30" id="kontak">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Lokasi & Kontak"
          subtitle="Kunjungi klinik kami atau hubungi admin untuk informasi lebih lanjut."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-10 rounded-[2.5rem] border border-border shadow-xl space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Alamat</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Jl. Rancameong No.5, Babakan Penghulu, Kec. Cinambo, Kota Bandung, Jawa Barat 40295
                  </p>
                  <p className="text-sm font-semibold text-primary mt-2 uppercase tracking-wider">Plus Code: 3M5R+XJ</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Telepon & WhatsApp</h4>
                  <p className="text-muted-foreground">0821-2684-5767</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Jam Operasional</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-muted-foreground">
                    <span>Senin - Rabu:</span> <span>09.00 - 17.00</span>
                    <span className="text-primary font-bold italic">Kamis:</span> <span className="text-primary font-bold italic">Buka mulai 09.00</span>
                    <span>Jumat - Sabtu:</span> <span>09.00 - 17.00</span>
                    <span>Minggu:</span> <span>Tutup</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              <Button asChild className="flex-1 rounded-full h-14">
                <a href="https://wa.me/6282126845767" target="_blank" rel="noopener noreferrer">
                  Chat WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1 rounded-full h-14">
                <a href="https://maps.app.goo.gl/3M5R+XJ" target="_blank" rel="noopener noreferrer">
                  <Compass className="mr-2 w-5 h-5" />
                  Petunjuk Arah
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border grayscale hover:grayscale-0 transition-all duration-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.676644262143!2d107.6972037750438!3d-6.929224393070474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2ec6868686d%3A0x6868686868686868!2sKlinik%20Pratama%20Mufiza!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
