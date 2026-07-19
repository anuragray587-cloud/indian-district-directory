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
) : section === "History" ? (
  <>
    <div>
  Historical Importance:{" "}
  {(districtData as {
    history?: {
      historicalImportance?: string;
    };
  }).history?.historicalImportance ?? ""}
</div>
<div>
  Formation History:{" "}
  {(districtData as {
    history?: {
      formationHistory?: string;
    };
  }).history?.formationHistory ?? ""}
</div>
<div>
  Freedom Movement:{" "}
  {(districtData as {
    history?: {
      freedomMovement?: string;
    };
  }).history?.freedomMovement ?? ""}
</div>
<div>
  Archaeological Importance:{" "}
  {(districtData as {
    history?: {
      archaeologicalImportance?: string;
    };
  }).history?.archaeologicalImportance ?? ""}
</div>
<div>
  ASI Protected Monuments:{" "}
  {(
    districtData as {
      history?: {
        asiProtectedMonuments?: string[];
      };
    }
  ).history?.asiProtectedMonuments?.length
    ? (
        districtData as {
          history?: {
            asiProtectedMonuments?: string[];
          };
        }
      ).history!.asiProtectedMonuments!.join(", ")
    : "None"}
</div>
<div>
  Historical Timeline:{" "}
  {(
    districtData as {
      history?: {
        historicalTimeline?: string[];
      };
    }
  ).history?.historicalTimeline?.length
    ? (
        districtData as {
          history?: {
            historicalTimeline?: string[];
          };
        }
      ).history!.historicalTimeline!.join(" → ")
    : "Not available"}
</div>
  </>
) : section === "Geography" ? (
  <>
    <div>
  Location:{" "}
  {(districtData as {
    geography?: {
      location?: string;
    };
  }).geography?.location ?? ""}
</div>
<div>
  Boundaries:
  <ul>
    <li>
      North:{" "}
      {(districtData as {
        geography?: {
          boundaries?: {
            north?: string;
          };
        };
      }).geography?.boundaries?.north ?? ""}
    </li>
    <li>
      South:{" "}
      {(districtData as {
        geography?: {
          boundaries?: {
            south?: string;
          };
        };
      }).geography?.boundaries?.south ?? ""}
    </li>
    <li>
      East:{" "}
      {(districtData as {
        geography?: {
          boundaries?: {
            east?: string;
          };
        };
      }).geography?.boundaries?.east ?? ""}
    </li>
    <li>
      West:{" "}
      {(districtData as {
        geography?: {
          boundaries?: {
            west?: string;
          };
        };
      }).geography?.boundaries?.west ?? ""}
    </li>
  </ul>
</div>
<div>
  Area:{" "}
  {(districtData as {
    geography?: {
      area?: string;
    };
  }).geography?.area ?? ""}
</div>
<div>
  Elevation:{" "}
  {(districtData as {
    geography?: {
      elevation?: string;
    };
  }).geography?.elevation ?? ""}
</div>
<div>
  Climate:{" "}
  {(districtData as {
    geography?: {
      climate?: string;
    };
  }).geography?.climate ?? ""}
</div>
<div>
  Rainfall:{" "}
  {(districtData as {
    geography?: {
      rainfall?: string;
    };
  }).geography?.rainfall ?? ""}
</div>
<div>
  Rivers:{" "}
  {(districtData as {
    geography?: {
      rivers?: string[];
    };
  }).geography?.rivers?.length
    ? (
        districtData as {
          geography?: {
            rivers?: string[];
          };
        }
      ).geography!.rivers!.join(", ")
    : "None"}
</div>
<div>
  Hills:{" "}
  {(districtData as {
    geography?: {
      hills?: string[];
    };
  }).geography?.hills?.length
    ? (
        districtData as {
          geography?: {
            hills?: string[];
          };
        }
      ).geography!.hills!.join(", ")
    : "None"}
</div>
<div>
  Forests:{" "}
  {(districtData as {
    geography?: {
      forests?: string;
    };
  }).geography?.forests ?? ""}
</div>
<div>
  Soil Types:{" "}
  {(districtData as {
    geography?: {
      soilTypes?: string[];
    };
  }).geography?.soilTypes?.length
    ? (
        districtData as {
          geography?: {
            soilTypes?: string[];
          };
        }
      ).geography!.soilTypes!.join(", ")
    : "None"}
</div>
<div>
  Natural Resources:{" "}
  {(districtData as {
    geography?: {
      naturalResources?: string[];
    };
  }).geography?.naturalResources?.length
    ? (
        districtData as {
          geography?: {
            naturalResources?: string[];
          };
        }
      ).geography!.naturalResources!.join(", ")
    : "None"}
</div>
  </>
) : section === "Demographics" ? (
  <>
<div>
  Total Population:{" "}
  {(districtData as {
    demographics?: {
      totalPopulation?: string;
    };
  }).demographics?.totalPopulation || "Not available"}
</div>
<div>
  Male Population:{" "}
  {(districtData as {
    demographics?: {
      malePopulation?: string;
    };
  }).demographics?.malePopulation || "Not available"}
</div>
<div>
  Female Population:{" "}
  {(districtData as {
    demographics?: {
      femalePopulation?: string;
    };
  }).demographics?.femalePopulation || "Not available"}
</div>
<div>
  Sex Ratio:{" "}
  {(districtData as {
    demographics?: {
      sexRatio?: string;
    };
  }).demographics?.sexRatio || "Not available"}
</div>
<div>
  Population Density:{" "}
  {(districtData as {
    demographics?: {
      populationDensity?: string;
    };
  }).demographics?.populationDensity || "Not available"}
</div>
<div>
  Literacy Rate:{" "}
  {(districtData as {
    demographics?: {
      literacyRate?: string;
    };
  }).demographics?.literacyRate || "Not available"}
</div>
<div>
  Male Literacy Rate:{" "}
  {(districtData as {
    demographics?: {
      maleLiteracyRate?: string;
    };
  }).demographics?.maleLiteracyRate || "Not available"}
</div>
<div>
  Female Literacy Rate:{" "}
  {(districtData as {
    demographics?: {
      femaleLiteracyRate?: string;
    };
  }).demographics?.femaleLiteracyRate || "Not available"}
</div>
<div>
  Urban Population:{" "}
  {(districtData as {
    demographics?: {
      urbanPopulation?: string;
    };
  }).demographics?.urbanPopulation || "Not available"}
</div>
<div>
  Rural Population:{" "}
  {(districtData as {
    demographics?: {
      ruralPopulation?: string;
    };
  }).demographics?.ruralPopulation || "Not available"}
</div>
<div>
  Religions:{" "}
  {(districtData as {
    demographics?: {
      religions?: string[];
    };
  }).demographics?.religions?.length
    ? (
        districtData as {
          demographics?: {
            religions?: string[];
          };
        }
      ).demographics!.religions!.join(", ")
    : "None"}
</div>
<div>
  Languages:{" "}
  {(districtData as {
    demographics?: {
      languages?: string[];
    };
  }).demographics?.languages?.length
    ? (
        districtData as {
          demographics?: {
            languages?: string[];
          };
        }
      ).demographics!.languages!.join(", ")
    : "None"}
</div>
  </>
) : section === "Administration" ? (
  <>
    <>
  <div>
    Administrative Division:{" "}
    {(districtData as {
      administration?: {
        administrativeDivision?: string;
      };
    }).administration?.administrativeDivision || "Not available"}
  </div>

  <div>
    Subdivisions:{" "}
    {(districtData as {
      administration?: {
        subdivisions?: string[];
      };
    }).administration?.subdivisions?.length
      ? (
          districtData as {
            administration?: {
              subdivisions?: string[];
            };
          }
        ).administration!.subdivisions!.join(", ")
      : "None"}
  </div>

  <div>
    Blocks:{" "}
    {(districtData as {
      administration?: {
        blocks?: string[];
      };
    }).administration?.blocks?.length
      ? (
          districtData as {
            administration?: {
              blocks?: string[];
            };
          }
        ).administration!.blocks!.join(", ")
      : "None"}
  </div>

  <div>
    Circles:{" "}
    {(districtData as {
      administration?: {
        circles?: string[];
      };
    }).administration?.circles?.length
      ? (
          districtData as {
            administration?: {
              circles?: string[];
            };
          }
        ).administration!.circles!.join(", ")
      : "None"}
  </div>

  <div>
    Gram Panchayats:{" "}
    {(districtData as {
      administration?: {
        gramPanchayats?: number;
      };
    }).administration?.gramPanchayats ?? "Not available"}
  </div>

  <div>
    Villages:{" "}
    {(districtData as {
      administration?: {
        villages?: number;
      };
    }).administration?.villages ?? "Not available"}
  </div>

  <div>
    Municipal Corporation:{" "}
    {(districtData as {
      administration?: {
        municipalCorporation?: string;
      };
    }).administration?.municipalCorporation || "None"}
  </div>

  <div>
    Municipalities:{" "}
    {(districtData as {
      administration?: {
        municipalities?: string[];
      };
    }).administration?.municipalities?.length
      ? (
          districtData as {
            administration?: {
              municipalities?: string[];
            };
          }
        ).administration!.municipalities!.join(", ")
      : "None"}
  </div>

  <div>
    Nagar Panchayats:{" "}
    {(districtData as {
      administration?: {
        nagarPanchayats?: string[];
      };
    }).administration?.nagarPanchayats?.length
      ? (
          districtData as {
            administration?: {
              nagarPanchayats?: string[];
            };
          }
        ).administration!.nagarPanchayats!.join(", ")
      : "None"}
  </div>

  <div>
    Police Stations:{" "}
    {(districtData as {
      administration?: {
        policeStations?: string[];
      };
    }).administration?.policeStations?.length
      ? (
          districtData as {
            administration?: {
              policeStations?: string[];
            };
          }
        ).administration!.policeStations!.join(", ")
      : "None"}
  </div>

  <div>
    Assembly Constituencies:{" "}
    {(districtData as {
      administration?: {
        assemblyConstituencies?: string[];
      };
    }).administration?.assemblyConstituencies?.length
      ? (
          districtData as {
            administration?: {
              assemblyConstituencies?: string[];
            };
          }
        ).administration!.assemblyConstituencies!.join(", ")
      : "None"}
  </div>

  <div>
    Lok Sabha Constituency:{" "}
    {(districtData as {
      administration?: {
        lokSabhaConstituency?: string;
      };
    }).administration?.lokSabhaConstituency || "Not available"}
  </div>
</>
  </>
) : section === "Economy" ? (
  <>
    <div>
      GDP:{" "}
      {(districtData as {
        economy?: {
          gdp?: string;
        };
      }).economy?.gdp || "Not available"}
    </div>

    <div>
      Major Industries:{" "}
      {(districtData as {
        economy?: {
          majorIndustries?: string[];
        };
      }).economy?.majorIndustries?.length
        ? (
            districtData as {
              economy?: {
                majorIndustries?: string[];
              };
            }
          ).economy!.majorIndustries!.join(", ")
        : "None"}
    </div>

    <div>
      Major Crops:{" "}
      {(districtData as {
        economy?: {
          majorCrops?: string[];
        };
      }).economy?.majorCrops?.length
        ? (
            districtData as {
              economy?: {
                majorCrops?: string[];
              };
            }
          ).economy!.majorCrops!.join(", ")
        : "None"}
    </div>

    <div>
      Major Employers:{" "}
      {(districtData as {
        economy?: {
          majorEmployers?: string[];
        };
      }).economy?.majorEmployers?.length
        ? (
            districtData as {
              economy?: {
                majorEmployers?: string[];
              };
            }
          ).economy!.majorEmployers!.join(", ")
        : "None"}
    </div>

    <div>
      Banking:{" "}
      {(districtData as {
        economy?: {
          banking?: string;
        };
      }).economy?.banking || "Not available"}
    </div>

    <div>
      Industrial Areas:{" "}
      {(districtData as {
        economy?: {
          industrialAreas?: string[];
        };
      }).economy?.industrialAreas?.length
        ? (
            districtData as {
              economy?: {
                industrialAreas?: string[];
              };
            }
          ).economy!.industrialAreas!.join(", ")
        : "None"}
    </div>

    <div>
      Special Economic Features:{" "}
      {(districtData as {
        economy?: {
          specialEconomicFeatures?: string[];
        };
      }).economy?.specialEconomicFeatures?.length
        ? (
            districtData as {
              economy?: {
                specialEconomicFeatures?: string[];
              };
            }
          ).economy!.specialEconomicFeatures!.join(", ")
        : "None"}
    </div>
  </>
) : section === "Agriculture & Animal Husbandry" ? (
  <>
    <div>
  Major Crops:{" "}
  {(districtData as {
    agriculture?: {
      majorCrops?: string[];
    };
  }).agriculture?.majorCrops?.length
    ? (
        districtData as {
          agriculture?: {
            majorCrops?: string[];
          };
        }
      ).agriculture!.majorCrops!.join(", ")
    : "None"}
</div>

<div>
  Cash Crops:{" "}
  {(districtData as {
    agriculture?: {
      cashCrops?: string[];
    };
  }).agriculture?.cashCrops?.length
    ? (
        districtData as {
          agriculture?: {
            cashCrops?: string[];
          };
        }
      ).agriculture!.cashCrops!.join(", ")
    : "None"}
</div>

<div>
  Fruits:{" "}
  {(districtData as {
    agriculture?: {
      fruits?: string[];
    };
  }).agriculture?.fruits?.length
    ? (
        districtData as {
          agriculture?: {
            fruits?: string[];
          };
        }
      ).agriculture!.fruits!.join(", ")
    : "None"}
</div>

<div>
  Vegetables:{" "}
  {(districtData as {
    agriculture?: {
      vegetables?: string[];
    };
  }).agriculture?.vegetables?.length
    ? (
        districtData as {
          agriculture?: {
            vegetables?: string[];
          };
        }
      ).agriculture!.vegetables!.join(", ")
    : "None"}
</div>

<div>
  Irrigation Sources:{" "}
  {(districtData as {
    agriculture?: {
      irrigationSources?: string[];
    };
  }).agriculture?.irrigationSources?.length
    ? (
        districtData as {
          agriculture?: {
            irrigationSources?: string[];
          };
        }
      ).agriculture!.irrigationSources!.join(", ")
    : "None"}
</div>

<div>
  Livestock:{" "}
  {(districtData as {
    agriculture?: {
      livestock?: string[];
    };
  }).agriculture?.livestock?.length
    ? (
        districtData as {
          agriculture?: {
            livestock?: string[];
          };
        }
      ).agriculture!.livestock!.join(", ")
    : "None"}
</div>

<div>
  Dairy Development:{" "}
  {(districtData as {
    agriculture?: {
      dairyDevelopment?: string;
    };
  }).agriculture?.dairyDevelopment || "Not available"}
</div>

<div>
  Fisheries:{" "}
  {(districtData as {
    agriculture?: {
      fisheries?: string;
    };
  }).agriculture?.fisheries || "Not available"}
</div>

<div>
  Agricultural Markets:{" "}
  {(districtData as {
    agriculture?: {
      agriculturalMarkets?: string[];
    };
  }).agriculture?.agriculturalMarkets?.length
    ? (
        districtData as {
          agriculture?: {
            agriculturalMarkets?: string[];
          };
        }
      ).agriculture!.agriculturalMarkets!.join(", ")
    : "None"}
</div>

<div>
  Krishi Vigyan Kendra:{" "}
  {(districtData as {
    agriculture?: {
      krishiVigyanKendra?: string;
    };
  }).agriculture?.krishiVigyanKendra || "Not available"}
</div>
  </>
) : section === "Infrastructure" ? (
  <>
    <div>
  Road Network:{" "}
  {(districtData as {
    infrastructure?: {
      roadNetwork?: string;
    };
  }).infrastructure?.roadNetwork || "Not available"}
</div>

<div>
  National Highways:{" "}
  {(districtData as {
    infrastructure?: {
      nationalHighways?: string[];
    };
  }).infrastructure?.nationalHighways?.length
    ? (
        districtData as {
          infrastructure?: {
            nationalHighways?: string[];
          };
        }
      ).infrastructure!.nationalHighways!.join(", ")
    : "None"}
</div>

<div>
  State Highways:{" "}
  {(districtData as {
    infrastructure?: {
      stateHighways?: string[];
    };
  }).infrastructure?.stateHighways?.length
    ? (
        districtData as {
          infrastructure?: {
            stateHighways?: string[];
          };
        }
      ).infrastructure!.stateHighways!.join(", ")
    : "None"}
</div>

<div>
  Railway Stations:{" "}
  {(districtData as {
    infrastructure?: {
      railwayStations?: string[];
    };
  }).infrastructure?.railwayStations?.length
    ? (
        districtData as {
          infrastructure?: {
            railwayStations?: string[];
          };
        }
      ).infrastructure!.railwayStations!.join(", ")
    : "None"}
</div>

<div>
  Major Railway Junctions:{" "}
  {(districtData as {
    infrastructure?: {
      majorRailwayJunctions?: string[];
    };
  }).infrastructure?.majorRailwayJunctions?.length
    ? (
        districtData as {
          infrastructure?: {
            majorRailwayJunctions?: string[];
          };
        }
      ).infrastructure!.majorRailwayJunctions!.join(", ")
    : "None"}
</div>

<div>
  Air Connectivity:{" "}
  {(districtData as {
    infrastructure?: {
      airConnectivity?: string;
    };
  }).infrastructure?.airConnectivity || "Not available"}
</div>

<div>
  Public Transport:{" "}
  {(districtData as {
    infrastructure?: {
      publicTransport?: string;
    };
  }).infrastructure?.publicTransport || "Not available"}
</div>

<div>
  Electricity:{" "}
  {(districtData as {
    infrastructure?: {
      electricity?: string;
    };
  }).infrastructure?.electricity || "Not available"}
</div>

<div>
  Water Supply:{" "}
  {(districtData as {
    infrastructure?: {
      waterSupply?: string;
    };
  }).infrastructure?.waterSupply || "Not available"}
</div>

<div>
  Internet Connectivity:{" "}
  {(districtData as {
    infrastructure?: {
      internetConnectivity?: string;
    };
  }).infrastructure?.internetConnectivity || "Not available"}
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
