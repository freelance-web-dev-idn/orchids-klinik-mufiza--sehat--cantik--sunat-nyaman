"use client";

import { motion } from "framer-motion";
import { Baby, Shield, MessageCircle, Heart, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SunatDetail() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold uppercase tracking-wider">
              <Baby className="w-4 h-4" />
              <span>Sunat Modern Al-Fatih</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              Khitan Nyaman, <span className="text-primary italic">Anak Tenang</span>, Orang Tua Senang
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Metode sunat modern yang dirancang untuk meminimalkan rasa tidak nyaman dan mempercepat proses pemulihan.
            </p>
            
            <ul className="space-y-4">
              {[
                "Layanan ramah anak dengan suasana yang menenangkan",
                "Keluarga diperbolehkan mendampingi selama proses tindakan",
                "Edukasi lengkap bagi orang tua sebelum dan sesudah tindakan",
                "Pemantauan pasca tindakan yang responsif melalui WhatsApp",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 flex gap-4">
              <Info className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm italic text-muted-foreground">
                Tingkat kenyamanan dan masa pemulihan dapat berbeda pada setiap anak tergantung kondisi fisik dan metode yang dipilih.
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full h-14 px-8 shadow-lg shadow-primary/20">
              <a href="https://wa.me/6282126845767" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Konsultasi Sunat via WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-1 relative group"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                alt="Sunat Modern Al-Fatih"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            
            <motion.div 
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-border hidden md:block max-w-[220px]"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="w-6 h-6 fill-primary" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Fasilitas</p>
                <p className="text-sm font-display font-bold leading-tight">Tersedia Playground untuk Si Kecil</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
