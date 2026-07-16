"use client";

import { useState } from "react";

type Tab = "info" | "districts";

interface StateTabsProps {
  info: React.ReactNode;
  districts: React.ReactNode;
}

export default function StateTabs({
  info,
  districts,
}: StateTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("districts");

  return (
    <div className="w-full">
      <div className="mb-6 flex rounded-xl border overflow-hidden">
        <button
          onClick={() => setActiveTab("info")}
          className={`flex-1 py-3 font-semibold ${
            activeTab === "info"
              ? "bg-blue-600 text-white"
              : "bg-white text-black"
          }`}
        >
          📁 State Information
        </button>

        <button
          onClick={() => setActiveTab("districts")}
          className={`flex-1 py-3 font-semibold ${
            activeTab === "districts"
              ? "bg-blue-600 text-white"
              : "bg-white text-black"
          }`}
        >
          📁 Districts
        </button>
      </div>

      {activeTab === "info" ? info : districts}
    </div>
  );
}
