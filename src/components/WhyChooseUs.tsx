"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart, Shield, Award, Users, Thermometer } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const reasons = [
  {
    title: "Tim Ramah & Komunikatif",
    description: "Dokter dan staff yang selalu siap mendengarkan dan menjelaskan detail kondisi Anda.",
    icon: Users,
  },
  {
    title: "Penjelasan Detail",
    description: "Kami percaya edukasi pasien adalah kunci. Setiap tindakan dijelaskan secara transparan.",
    icon: Award,
  },
  {
    title: "Tempat Bersih & Wangi",
    description: "Kenyamanan Anda adalah prioritas kami. Lingkungan klinik dijaga selalu steril dan nyaman.",
    icon: Shield,
  },
  {
    title: "Alat Modern & Canggih",
    description: "Menggunakan teknologi terbaru seperti skin analyzer untuk hasil yang lebih akurat.",
    icon: Thermometer,
  },
  {
    title: "Ramah Keluarga",
    description: "Fasilitas lengkap termasuk playground, membuat kunjungan keluarga jadi lebih menyenangkan.",
    icon: Heart,
  },
  {
    title: "Harga Terjangkau",
    description: "Layanan berkualitas tinggi dengan harga yang tetap affordable dan worth it.",
    icon: CheckCircle2,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30" id="tentang">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Mengapa Memilih Klinik Mufiza?"
          subtitle="Kami berkomitmen memberikan pelayanan kesehatan terbaik dengan sentuhan kekeluargaan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
