"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    category: "Umum",
    items: [
      {
        q: "Bagaimana cara booking via WhatsApp?",
        a: "Anda cukup klik tombol 'Booking WA' yang tersedia di website ini. Tim admin kami akan segera merespons pesan Anda untuk mengatur jadwal.",
      },
      {
        q: "Apakah bisa datang bersama anak?",
        a: "Tentu saja! Klinik kami ramah keluarga dan dilengkapi dengan fasilitas playground agar si kecil tetap nyaman selama kunjungan.",
      },
      {
        q: "Jam berapa operasional klinik?",
        a: "Kami buka setiap hari Senin - Sabtu mulai pukul 09.00. Khusus hari Minggu kami tutup.",
      },
    ],
  },
  {
    category: "Beauty Care",
    items: [
      {
        q: "Apakah harus konsultasi sebelum treatment?",
        a: "Sangat disarankan. Kami menyediakan skin analyzer untuk menganalisis kondisi kulit Anda secara detail agar treatment yang diberikan tepat sasaran.",
      },
      {
        q: "Berapa kali treatment yang disarankan?",
        a: "Jumlah treatment bervariasi tergantung pada kondisi kulit masing-masing individu. Tim dokter kami akan memberikan rekomendasi saat konsultasi.",
      },
    ],
  },
  {
    category: "Sunat Modern",
    items: [
      {
        q: "Apakah anak boleh didampingi saat sunat?",
        a: "Ya, kami sangat mendukung pendampingan keluarga agar anak merasa lebih tenang dan nyaman selama proses tindakan.",
      },
      {
        q: "Bagaimana persiapan sebelum sunat?",
        a: "Tim kami akan memberikan panduan persiapan lengkap via WhatsApp segera setelah Anda melakukan pendaftaran.",
      },
      {
        q: "Bagaimana dengan kontrol pasca tindakan?",
        a: "Kami menyediakan layanan konsultasi pasca tindakan yang responsif melalui WhatsApp untuk memantau proses pemulihan anak.",
      },
    ],
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Pertanyaan Umum (FAQ)"
          subtitle="Temukan jawaban cepat untuk pertanyaan yang sering diajukan mengenai layanan kami."
        />

        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 px-4 py-2 rounded-full inline-block">
                {group.category}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {group.items.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${groupIdx}-${idx}`} className="border-b border-border">
                    <AccordionTrigger className="text-left font-display font-bold hover:text-primary transition-colors py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
