"use client";

import { motion } from "framer-motion";
import { Sparkles, Search, MessageCircle, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function BeautyDetail() {
  return (
    <section className="py-20 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Mufiza Beauty Care</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              Kecantikan yang Memancar dari <span className="text-secondary italic">Kulit Sehat</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kami menggabungkan teknologi modern dengan sentuhan personal untuk memberikan hasil yang optimal bagi kulit Anda.
            </p>
            
            <ul className="space-y-4">
              {[
                "Konsultasi kulit dengan skin analyzer untuk diagnosa akurat",
                "Rekomendasi treatment yang dipersonalisasi sesuai kebutuhan",
                "Treatment populer: Camelia Facial untuk kulit lebih segar",
                "Fokus pada kenyamanan dan hasil yang bertahap namun pasti",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm italic text-muted-foreground bg-white/50 p-4 rounded-xl border border-secondary/20">
              Catatan: Hasil perawatan dapat berbeda pada tiap orang tergantung kondisi kulit dan konsistensi perawatan.
            </p>

            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full h-14 px-8 shadow-lg shadow-secondary/20">
              <a href="https://wa.me/6282126845767" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Jadwal Treatment via WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
                alt="Beauty Treatment at Mufiza"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-border hidden md:block max-w-[200px]"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Search className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Analisis</p>
                <p className="text-sm font-display font-bold leading-tight">Skin Analyzer Teknologi Terbaru</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
