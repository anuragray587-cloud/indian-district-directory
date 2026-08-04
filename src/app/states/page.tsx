import { StatesClient } from "@/components/state/StatesClient";
import { StateListingSection } from "@/components/state/listing/StateListingSection";
import type { Metadata } from "next";
import { StateDirectoryHero } from "@/components/state/directory/StateDirectoryHero";

export const metadata: Metadata = {
  title: "States & Union Territories | Indian District Directory",
  description:
    "Explore all 28 States and 8 Union Territories of India with comprehensive information, interactive maps, and district directories.",
};

export default function StatesPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <StatesClient />
     </div>
    </main>
  );
}
