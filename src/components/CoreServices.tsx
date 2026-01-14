"use client";

import { motion } from "framer-motion";
import { Sparkles, Baby, Stethoscope, HeartPulse, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";

const services = [
  {
    title: "Mufiza Beauty Care",
    description: "Perawatan wajah dan skincare dengan evaluasi kondisi kulit menggunakan skin analyzer. Ditangani dokter dan terapis yang ramah.",
    icon: Sparkles,
    cta: "Booking Konsultasi Beauty Care",
    color: "bg-secondary/10 text-secondary",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    href: "https://wa.me/6282126845767?text=Halo%20Mufiza,%20saya%20ingin%20booking%20Beauty%20Care"
  },
  {
    title: "Sunat Modern Al-Fatih",
    description: "Layanan khitan modern ramah anak. Anak didampingi, orang tua mendapat edukasi sebelum dan setelah tindakan. Fasilitas bersih.",
    icon: Baby,
    cta: "Tanya Jadwal Sunat",
    color: "bg-primary/10 text-primary",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    href: "https://wa.me/6282126845767?text=Halo%20Mufiza,%20saya%20ingin%20tanya%20jadwal%20Sunat"
  },
  {
    title: "Klinik Umum",
    description: "Pemeriksaan kesehatan umum dengan layanan yang cepat, ramah, dan jelas. Ditangani oleh tenaga medis berpengalaman.",
    icon: Stethoscope,
    cta: "Daftar Pemeriksaan",
    color: "bg-blue-100 text-blue-600",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    href: "https://wa.me/6282126845767?text=Halo%20Mufiza,%20saya%20ingin%20daftar%20pemeriksaan%20umum"
  },
  {
    title: "Layanan Bidan",
    description: "Layanan kebidanan dengan pendampingan yang hangat dan profesional untuk kesehatan ibu dan anak.",
    icon: HeartPulse,
    cta: "Konsultasi Bidan",
    color: "bg-rose-100 text-rose-600",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2070&auto=format&fit=crop",
    href: "https://wa.me/6282126845767?text=Halo%20Mufiza,%20saya%20ingin%20konsultasi%20dengan%20Bidan"
  },
];

export function CoreServices() {
  return (
    <section className="py-20 bg-white" id="layanan">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Layanan Unggulan Kami"
          subtitle="Kami menyediakan solusi kesehatan dan kecantikan yang terintegrasi untuk seluruh anggota keluarga Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute bottom-4 left-4 p-2 rounded-xl ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="line-clamp-3 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button asChild variant="ghost" className="w-full justify-between group/btn hover:bg-primary/5 hover:text-primary p-0">
                    <a href={service.href} target="_blank" rel="noopener noreferrer">
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
