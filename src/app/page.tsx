import { FooterDisclaimer, Navbar } from "@/components/layout/Navbar";
import { HomeTerminal } from "@/components/stock/HomeTerminal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05030a] text-zinc-100">
      <Navbar />
      <HomeTerminal />
      <FooterDisclaimer />
    </div>
  );
}
