import { notFound } from "next/navigation";

import { SectorPage } from "@/components/market/SectorPage";
import { getSectorBySlug, sectors } from "@/data/market-map";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) notFound();

  return <SectorPage sector={sector} />;
}
