"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star, ShieldCheck, Baby, HeartPulse } from "lucide-react";
import Image from "next/image";

export function ClinicHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/5 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-10 -z-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Star className="w-4 h-4 fill-primary" />
              <span>Rating 5.0 dari 75 ulasan Google</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
              Klinik Pratama Mufiza untuk <span className="text-primary italic">Perawatan</span>, Kesehatan, dan Sunat Modern
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Klinik bersih dan nyaman dengan layanan lengkap di Bandung. Beauty care dengan skin analyzer, sunat modern ramah anak, klinik umum, dan bidan. Ditangani tim yang komunikatif dan profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/20">
                <a href="https://wa.me/6282126845767" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg">
                <a href="#layanan">Lihat Layanan</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-border">
              <div className="flex flex-col items-center sm:items-start gap-1">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground leading-none mt-1">Bersih & Nyaman</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <Baby className="w-6 h-6 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground leading-none mt-1">Playground Anak</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <HeartPulse className="w-6 h-6 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground leading-none mt-1">Penjelasan Detail</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <Star className="w-6 h-6 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground leading-none mt-1">Tim Profesional</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
                alt="Klinik Pratama Mufiza Interior"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
            </div>
            
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border hidden md:flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <HeartPulse className="text-secondary w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Layanan</p>
                <p className="font-display font-bold text-foreground leading-none">Terpercaya</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-border hidden md:flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Star className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Rating Google</p>
                <p className="font-display font-bold text-foreground leading-none">Sempurna 5.0</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
