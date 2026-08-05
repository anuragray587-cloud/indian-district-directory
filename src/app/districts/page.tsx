import type { Metadata } from "next";
import { DistrictsClient } from "@/components/district/DistrictsClient";

export const metadata: Metadata = {
  title: "Districts | Indian District Directory",
  description:
    "Explore all districts of India with detailed administrative, demographic and geographical information.",
};

export default function DistrictsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <DistrictsClient />
      </div>
    </main>
  );
}
