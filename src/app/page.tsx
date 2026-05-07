import { FooterDisclaimer, Navbar } from "@/components/layout/Navbar";
import { HomeTerminal } from "@/components/stock/HomeTerminal";

export default function Home() {
  return (
    <div className="app-shell min-h-screen text-zinc-100">
      <Navbar />
      <HomeTerminal />
      <FooterDisclaimer />
    </div>
  );
}
