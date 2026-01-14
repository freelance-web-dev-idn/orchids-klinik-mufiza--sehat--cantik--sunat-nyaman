import { MessageCircle, MapPin, Grid } from "lucide-react";

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
      <div className="bg-background/90 backdrop-blur-md border border-border rounded-full shadow-lg flex items-center justify-around p-2">
        <a
          href="https://wa.me/6282126845767"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 p-2 text-primary"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        <div className="w-px h-8 bg-border" />
        <a
          href="https://maps.app.goo.gl/rBf7X4p5t5Y5z5z5" // Placeholder, I'll use the address if needed
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 p-2 text-foreground"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-medium">Arah</span>
        </a>
        <div className="w-px h-8 bg-border" />
        <a
          href="#layanan"
          className="flex flex-col items-center gap-1 p-2 text-foreground"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-medium">Layanan</span>
        </a>
      </div>
    </div>
  );
}
