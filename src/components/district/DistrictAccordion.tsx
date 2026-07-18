"use client";

const sections = [
  "Basic Information",
  "History",
  "Geography",
  "Demographics",
  "Administration",
  "Economy",
  "Agriculture & Animal Husbandry",
  "Infrastructure",
  "Education",
  "Healthcare",
  "Culture & Heritage",
  "Tourism",
  "Sports",
  "Banking & Finance",
  "Governance & Public Services",
  "Law & Order",
  "Environment",
  "Media & Communication",
  "Rankings & Achievements",
  "Miscellaneous",
];

type DistrictAccordionProps = {
  districtData: Record<string, unknown> | null;
};

export default function DistrictAccordion({
  districtData,
}: DistrictAccordionProps) {
if (!districtData) {
  return <div>District data not available.</div>;
}
  return (
    <div className="mt-8 space-y-3">
      {sections.map((section, index) => (
        <details
          key={section}
          className="rounded-lg border border-rule bg-paper-card dark:border-rule-dark dark:bg-night-card"
        >
          <summary className="cursor-pointer list-none px-5 py-4 font-semibold">
            {index + 1}. {section}
          </summary>

          <div className="border-t border-rule px-5 py-4 dark:border-rule-dark">
            <div className="text-sm text-ink-soft dark:text-ink-inverse">
  {section === "Basic Information" ? (
  <>
    <div>
      Headquarters:{" "}
      {(districtData as {
        basicInformation?: {
          headquarters?: string;
          established?: string;
        };
      }).basicInformation?.headquarters ?? ""}
    </div>

    <div>
      Established:{" "}
      {(districtData as {
        basicInformation?: {
  headquarters?: string;
  established?: string;
  areaKm2?: number;
};
      }).basicInformation?.established ?? ""}
    </div>
<div>
  Area:{" "}
  {((districtData as {
    basicInformation?: {
      areaKm2?: number;
    };
  }).basicInformation?.areaKm2 ?? 0).toLocaleString("en-IN")}{" "}
  km²
</div>
<div>
  Population:{" "}
  {((districtData as {
  basicInformation?: {
    population?: number;
  };
}).basicInformation?.population ?? 0).toLocaleString("en-IN")}
</div>
<div>
  District Code:{" "}
  {(districtData as {
    basicInformation?: {
      districtCode?: string;
    };
  }).basicInformation?.districtCode ?? ""}
</div>
<div>
  State:{" "}
  {(districtData as {
    basicInformation?: {
      state?: string;
    };
  }).basicInformation?.state ?? ""}
</div>
<div>
  Division:{" "}
  {(districtData as {
    basicInformation?: {
      division?: string;
    };
  }).basicInformation?.division ?? ""}
</div>
<div>
  Subdivisions:{" "}
  {(districtData as {
    basicInformation?: {
      subdivision?: number;
    };
  }).basicInformation?.subdivision ?? ""}
</div>
<div>
  Anchal (Circle):{" "}
  {(districtData as {
    basicInformation?: {
      anchals?: number;
    };
  }).basicInformation?.anchals ?? ""}
</div>
<div>
  Blocks:{" "}
  {(districtData as {
    basicInformation?: {
      blocks?: number;
    };
  }).basicInformation?.blocks ?? ""}
</div>
<div>
  Panchayats:{" "}
  {(districtData as {
    basicInformation?: {
      panchayats?: number;
    };
  }).basicInformation?.panchayats ?? ""}
</div>
<div>
  Villages:{" "}
  {(districtData as {
    basicInformation?: {
      villages?: number;
    };
  }).basicInformation?.villages ?? ""}
</div>
<div>
  Towns/Cities:{" "}
  {(districtData as {
    basicInformation?: {
      towns?: number;
    };
  }).basicInformation?.towns ?? ""}
</div>
<div>
  Police Stations:{" "}
  {(districtData as {
    basicInformation?: {
      policeStations?: number;
    };
  }).basicInformation?.policeStations ?? ""}
</div>
<div>
  Lok Sabha Constituencies:{" "}
  {(districtData as {
    basicInformation?: {
      lokSabhaConstituencies?: number;
    };
  }).basicInformation?.lokSabhaConstituencies ?? ""}
</div>
<div>
  Assembly Constituencies:{" "}
  {(districtData as {
    basicInformation?: {
      assemblyConstituencies?: number;
    };
  }).basicInformation?.assemblyConstituencies ?? ""}
</div>
<div>
  PIN Code Range:{" "}
  {(districtData as {
    basicInformation?: {
      pinCodeRange?: string;
    };
  }).basicInformation?.pinCodeRange ?? ""}
</div>
<div>
  Vehicle Registration Code:{" "}
  {(districtData as {
    basicInformation?: {
      vehicleRegistrationCode?: string;
    };
  }).basicInformation?.vehicleRegistrationCode ?? ""}
</div>
<div>
  Time Zone:{" "}
  {(districtData as {
    basicInformation?: {
      timeZone?: string;
    };
  }).basicInformation?.timeZone ?? ""}
</div>
<div>
  Elevation:{" "}
  {(districtData as {
    basicInformation?: {
      elevation?: string;
    };
  }).basicInformation?.elevation ?? ""}
</div>
<div>
  Latitude:{" "}
  {(districtData as {
    basicInformation?: {
      coordinates?: {
        latitude?: string;
      };
    };
  }).basicInformation?.coordinates?.latitude ?? ""}
</div>

<div>
  Longitude:{" "}
  {(districtData as {
    basicInformation?: {
      coordinates?: {
        longitude?: string;
      };
    };
  }).basicInformation?.coordinates?.longitude ?? ""}
</div>
<div>
  Official Website:{" "}
  <a
    href={
      (districtData as {
        basicInformation?: {
          officialWebsite?: string;
        };
      }).basicInformation?.officialWebsite ?? "#"
    }
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    {(districtData as {
      basicInformation?: {
        officialWebsite?: string;
      };
    }).basicInformation?.officialWebsite ?? ""}
  </a>
</div>
  </>
) : (
  `Information for ${section}`
)}
</div>
          </div>
        </details>
      ))}
    </div>
  );
}
