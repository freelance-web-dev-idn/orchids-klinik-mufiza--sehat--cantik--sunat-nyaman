"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Santi",
    text: "Dokternya ramah banget dan ngejelasin detail banget. Treatment beauty care-nya juga nyaman, alatnya canggih pakai skin analyzer jadi tahu masalah kulit kita apa.",
    rating: 5,
  },
  {
    name: "Budi",
    text: "Sunat modern di sini memuaskan. Anak saya tenang karena suasananya santai, edukasi buat orang tua juga jelas banget pasca tindakan. Sangat responsif via WA.",
    rating: 5,
  },
  {
    name: "Rina",
    text: "Tempatnya bersih, wangi, dan ada playground-nya. Jadi kalau bawa anak gak rewel pas nunggu. Pelayanan staff dan perawatnya jempolan, sangat ramah.",
    rating: 5,
  },
  {
    name: "Andi",
    text: "Harga sangat affordable dan worth it dengan pelayanan sekelas ini. Klinik umum dan bidannya juga oke, komunikatif banget kalau konsultasi.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30" id="testimoni">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Apa Kata Mereka?"
          subtitle="Rating 5.0 dari 75 ulasan Google membuktikan dedikasi kami dalam melayani Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 rounded-[2.5rem] border border-border relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {t.name[0]}
                </div>
                <span className="font-display font-bold text-foreground">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <a href="https://www.google.com/search?q=Klinik+Pratama+Mufiza+reviews" target="_blank" rel="noopener noreferrer">
              Lihat Semua Ulasan di Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
