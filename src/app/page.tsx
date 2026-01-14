import { ClinicNavbar } from "@/components/ClinicNavbar";
import { ClinicHero } from "@/components/ClinicHero";
import { CoreServices } from "@/components/CoreServices";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BeautyDetail } from "@/components/BeautyDetail";
import { SunatDetail } from "@/components/SunatDetail";
import { Facilities } from "@/components/Facilities";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactMap } from "@/components/ContactMap";
import { ClinicFooter } from "@/components/ClinicFooter";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative pb-20 md:pb-0">
      <ClinicNavbar />
      <ClinicHero />
      <CoreServices />
      <WhyChooseUs />
      <BeautyDetail />
      <SunatDetail />
      <Facilities />
      <Testimonials />
      <FAQ />
      <ContactMap />
      <ClinicFooter />
      <MobileStickyBar />
    </main>
  );
}
