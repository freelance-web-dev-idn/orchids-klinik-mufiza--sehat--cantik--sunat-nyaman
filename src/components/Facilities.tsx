"use client";

import { motion } from "framer-motion";
import { Coffee, Baby, ShieldCheck, Microscope, Sofa } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const facilities = [
  {
    title: "Ruang Tunggu Nyaman",
    description: "Dilengkapi AC dan tempat duduk yang empuk untuk kenyamanan Anda.",
    icon: Sofa,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
    {
      title: "Playground Anak",
      description: "Area bermain yang aman agar anak tidak bosan saat menunggu.",
      icon: Baby,
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop"
    },
  {
    title: "Skin Analyzer Modern",
    description: "Teknologi canggih untuk menganalisis kondisi kulit secara akurat.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Ruang Tindakan Steril",
    description: "Menjamin kebersihan dan keamanan dalam setiap prosedur medis.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
  }
];

export function Facilities() {
  return (
    <section className="py-20 bg-white" id="fasilitas">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Fasilitas Klinik"
          subtitle="Kami menyediakan lingkungan yang mendukung penyembuhan dan kenyamanan keluarga Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 bg-muted/20 p-6 rounded-[2rem] border border-border group overflow-hidden"
            >
              <div className="relative w-full sm:w-48 h-48 shrink-0 rounded-2xl overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <facility.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{facility.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
