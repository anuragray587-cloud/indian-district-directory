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
) : section === "Education" ? (
  <>
    <div>
  Literacy Rate:{" "}
  {(districtData as {
    education?: {
      literacyRate?: string;
    };
  }).education?.literacyRate || "Not available"}
</div>

<div>
  Male Literacy:{" "}
  {(districtData as {
    education?: {
      maleLiteracy?: string;
    };
  }).education?.maleLiteracy || "Not available"}
</div>

<div>
  Female Literacy:{" "}
  {(districtData as {
    education?: {
      femaleLiteracy?: string;
    };
  }).education?.femaleLiteracy || "Not available"}
</div>

<div>
  Government Schools:{" "}
  {(districtData as {
    education?: {
      governmentSchools?: string;
    };
  }).education?.governmentSchools || "Not available"}
</div>

<div>
  Private Schools:{" "}
  {(districtData as {
    education?: {
      privateSchools?: string;
    };
  }).education?.privateSchools || "Not available"}
</div>

<div>
  Colleges:{" "}
  {(districtData as {
    education?: {
      colleges?: string[];
    };
  }).education?.colleges?.length
    ? (
        districtData as {
          education?: {
            colleges?: string[];
          };
        }
      ).education!.colleges!.join(", ")
    : "None"}
</div>

<div>
  Universities:{" "}
  {(districtData as {
    education?: {
      universities?: string[];
    };
  }).education?.universities?.length
    ? (
        districtData as {
          education?: {
            universities?: string[];
          };
        }
      ).education!.universities!.join(", ")
    : "None"}
</div>

<div>
  Technical Institutes:{" "}
  {(districtData as {
    education?: {
      technicalInstitutes?: string[];
    };
  }).education?.technicalInstitutes?.length
    ? (
        districtData as {
          education?: {
            technicalInstitutes?: string[];
          };
        }
      ).education!.technicalInstitutes!.join(", ")
    : "None"}
</div>

<div>
  Medical Colleges:{" "}
  {(districtData as {
    education?: {
      medicalColleges?: string[];
    };
  }).education?.medicalColleges?.length
    ? (
        districtData as {
          education?: {
            medicalColleges?: string[];
          };
        }
      ).education!.medicalColleges!.join(", ")
    : "None"}
</div>

<div>
  Notable Educational Institutions:{" "}
  {(districtData as {
    education?: {
      notableEducationalInstitutions?: string[];
    };
  }).education?.notableEducationalInstitutions?.length
    ? (
        districtData as {
          education?: {
            notableEducationalInstitutions?: string[];
          };
        }
      ).education!.notableEducationalInstitutions!.join(", ")
    : "None"}
</div>
  </>
) : section === "Healthcare" ? (
  <>
    <div>
  District Hospital:{" "}
  {(districtData as {
    healthcare?: {
      districtHospital?: string;
    };
  }).healthcare?.districtHospital || "Not available"}
</div>

<div>
  Sub-Divisional Hospitals:{" "}
  {(districtData as {
    healthcare?: {
      subDivisionalHospitals?: string[];
    };
  }).healthcare?.subDivisionalHospitals?.length
    ? (
        districtData as {
          healthcare?: {
            subDivisionalHospitals?: string[];
          };
        }
      ).healthcare!.subDivisionalHospitals!.join(", ")
    : "None"}
</div>

<div>
  Community Health Centres:{" "}
  {(districtData as {
    healthcare?: {
      communityHealthCentres?: string[];
    };
  }).healthcare?.communityHealthCentres?.length
    ? (
        districtData as {
          healthcare?: {
            communityHealthCentres?: string[];
          };
        }
      ).healthcare!.communityHealthCentres!.join(", ")
    : "None"}
</div>

<div>
  Primary Health Centres:{" "}
  {(districtData as {
    healthcare?: {
      primaryHealthCentres?: string;
    };
  }).healthcare?.primaryHealthCentres || "Not available"}
</div>

<div>
  Medical Colleges:{" "}
  {(districtData as {
    healthcare?: {
      medicalColleges?: string[];
    };
  }).healthcare?.medicalColleges?.length
    ? (
        districtData as {
          healthcare?: {
            medicalColleges?: string[];
          };
        }
      ).healthcare!.medicalColleges!.join(", ")
    : "None"}
</div>

<div>
  Ambulance Services:{" "}
  {(districtData as {
    healthcare?: {
      ambulanceServices?: string;
    };
  }).healthcare?.ambulanceServices || "Not available"}
</div>

<div>
  Major Health Programs:{" "}
  {(districtData as {
    healthcare?: {
      majorHealthPrograms?: string[];
    };
  }).healthcare?.majorHealthPrograms?.length
    ? (
        districtData as {
          healthcare?: {
            majorHealthPrograms?: string[];
          };
        }
      ).healthcare!.majorHealthPrograms!.join(", ")
    : "None"}
</div>

<div>
  Blood Banks:{" "}
  {(districtData as {
    healthcare?: {
      bloodBanks?: string[];
    };
  }).healthcare?.bloodBanks?.length
    ? (
        districtData as {
          healthcare?: {
            bloodBanks?: string[];
          };
        }
      ).healthcare!.bloodBanks!.join(", ")
    : "None"}
</div>

<div>
  Notable Hospitals:{" "}
  {(districtData as {
    healthcare?: {
      notableHospitals?: string[];
    };
  }).healthcare?.notableHospitals?.length
    ? (
        districtData as {
          healthcare?: {
            notableHospitals?: string[];
          };
        }
      ).healthcare!.notableHospitals!.join(", ")
    : "None"}
</div>
  </>
) : section === "Culture & Heritage" ? (
  <>
    <div>
  Festivals:{" "}
  {(districtData as {
    cultureAndHeritage?: {
      festivals?: string[];
    };
  }).cultureAndHeritage?.festivals?.length
    ? (
        districtData as {
          cultureAndHeritage?: {
            festivals?: string[];
          };
        }
      ).cultureAndHeritage!.festivals!.join(", ")
    : "None"}
</div>

<div>
  Languages:{" "}
  {(districtData as {
    cultureAndHeritage?: {
      languages?: string[];
    };
  }).cultureAndHeritage?.languages?.length
    ? (
        districtData as {
          cultureAndHeritage?: {
            languages?: string[];
          };
        }
      ).cultureAndHeritage!.languages!.join(", ")
    : "None"}
</div>

<div>
  Folk Dance:{" "}
  {(districtData as {
    cultureAndHeritage?: {
      folkDance?: string[];
    };
  }).cultureAndHeritage?.folkDance?.length
    ? (
        districtData as {
          cultureAndHeritage?: {
            folkDance?: string[];
          };
        }
      ).cultureAndHeritage!.folkDance!.join(", ")
    : "None"}
</div>

<div>
  Folk Music:{" "}
  {(districtData as {
    cultureAndHeritage?: {
      folkMusic?: string[];
    };
  }).cultureAndHeritage?.folkMusic?.length
    ? (
        districtData as {
          cultureAndHeritage?: {
            folkMusic?: string[];
          };
        }
      ).cultureAndHeritage!.folkMusic!.join(", ")
    : "None"}
</div>

<div>
  Traditional Dress:{" "}
  {(districtData as {
    cultureAndHeritage?: {
      traditionalDress?: string;
    };
  }).cultureAndHeritage?.traditionalDress || "Not available"}
</div>

<div>
  Cuisine:{" "}
  {(districtData as {
    cultureAndHeritage?: {
      cuisine?: string[];
    };
  }).cultureAndHeritage?.cuisine?.length
    ? (
        districtData as {
          cultureAndHeritage?: {
            cuisine?: string[];
          };
        }
      ).cultureAndHeritage!.cuisine!.join(", ")
    : "None"}
</div>

<div>
  Handicrafts:{" "}
  {(districtData as {
    cultureAndHeritage?: {
      handicrafts?: string[];
    };
  }).cultureAndHeritage?.handicrafts?.length
    ? (
        districtData as {
          cultureAndHeritage?: {
            handicrafts?: string[];
          };
        }
      ).cultureAndHeritage!.handicrafts!.join(", ")
    : "None"}
</div>

<div>
  Historical Heritage:{" "}
  {(districtData as {
    cultureAndHeritage?: {
      historicalHeritage?: string[];
    };
  }).cultureAndHeritage?.historicalHeritage?.length
    ? (
        districtData as {
          cultureAndHeritage?: {
            historicalHeritage?: string[];
          };
        }
      ).cultureAndHeritage!.historicalHeritage!.join(", ")
    : "None"}
</div>

<div>
  Cultural Organizations:{" "}
  {(districtData as {
    cultureAndHeritage?: {
      culturalOrganizations?: string[];
    };
  }).cultureAndHeritage?.culturalOrganizations?.length
    ? (
        districtData as {
          cultureAndHeritage?: {
            culturalOrganizations?: string[];
          };
        }
      ).cultureAndHeritage!.culturalOrganizations!.join(", ")
    : "None"}
</div>
  </>
) : section === "Tourism" ? (
  <>
    <div>
  Major Tourist Attractions:{" "}
  {(districtData as {
    tourism?: {
      majorTouristAttractions?: string[];
    };
  }).tourism?.majorTouristAttractions?.length
    ? (
        districtData as {
          tourism?: {
            majorTouristAttractions?: string[];
          };
        }
      ).tourism!.majorTouristAttractions!.join(", ")
    : "None"}
</div>

<div>
  Religious Places:{" "}
  {(districtData as {
    tourism?: {
      religiousPlaces?: string[];
    };
  }).tourism?.religiousPlaces?.length
    ? (
        districtData as {
          tourism?: {
            religiousPlaces?: string[];
          };
        }
      ).tourism!.religiousPlaces!.join(", ")
    : "None"}
</div>

<div>
  Historical Sites:{" "}
  {(districtData as {
    tourism?: {
      historicalSites?: string[];
    };
  }).tourism?.historicalSites?.length
    ? (
        districtData as {
          tourism?: {
            historicalSites?: string[];
          };
        }
      ).tourism!.historicalSites!.join(", ")
    : "None"}
</div>

<div>
  Natural Attractions:{" "}
  {(districtData as {
    tourism?: {
      naturalAttractions?: string[];
    };
  }).tourism?.naturalAttractions?.length
    ? (
        districtData as {
          tourism?: {
            naturalAttractions?: string[];
          };
        }
      ).tourism!.naturalAttractions!.join(", ")
    : "None"}
</div>

<div>
  Wildlife Sanctuaries:{" "}
  {(districtData as {
    tourism?: {
      wildlifeSanctuaries?: string[];
    };
  }).tourism?.wildlifeSanctuaries?.length
    ? (
        districtData as {
          tourism?: {
            wildlifeSanctuaries?: string[];
          };
        }
      ).tourism!.wildlifeSanctuaries!.join(", ")
    : "None"}
</div>

<div>
  Annual Fairs:{" "}
  {(districtData as {
    tourism?: {
      annualFairs?: string[];
    };
  }).tourism?.annualFairs?.length
    ? (
        districtData as {
          tourism?: {
            annualFairs?: string[];
          };
        }
      ).tourism!.annualFairs!.join(", ")
    : "None"}
</div>

<div>
  Best Time to Visit:{" "}
  {(districtData as {
    tourism?: {
      bestTimeToVisit?: string;
    };
  }).tourism?.bestTimeToVisit || "Not available"}
</div>
<div>
  Nearby Tourist Destinations:{" "}
  {(districtData as {
    tourism?: {
      nearbyTouristDestinations?: string[];
    };
  }).tourism?.nearbyTouristDestinations?.length
    ? (
        districtData as {
          tourism?: {
            nearbyTouristDestinations?: string[];
          };
        }
      ).tourism!.nearbyTouristDestinations!.join(", ")
    : "None"}
</div>
  </>
) : section === "Sports" ? (
  <>
    <div>
  Major Sports:{" "}
  {(districtData as {
    sports?: {
      majorSports?: string[];
    };
  }).sports?.majorSports?.length
    ? (
        districtData as {
          sports?: {
            majorSports?: string[];
          };
        }
      ).sports!.majorSports!.join(", ")
    : "None"}
</div>

<div>
  Stadiums:{" "}
  {(districtData as {
    sports?: {
      stadiums?: string[];
    };
  }).sports?.stadiums?.length
    ? (
        districtData as {
          sports?: {
            stadiums?: string[];
          };
        }
      ).sports!.stadiums!.join(", ")
    : "None"}
</div>

<div>
  Sports Complexes:{" "}
  {(districtData as {
    sports?: {
      sportsComplexes?: string[];
    };
  }).sports?.sportsComplexes?.length
    ? (
        districtData as {
          sports?: {
            sportsComplexes?: string[];
          };
        }
      ).sports!.sportsComplexes!.join(", ")
    : "None"}
</div>

<div>
  Famous Sportspersons:{" "}
  {(districtData as {
    sports?: {
      famousSportspersons?: string[];
    };
  }).sports?.famousSportspersons?.length
    ? (
        districtData as {
          sports?: {
            famousSportspersons?: string[];
          };
        }
      ).sports!.famousSportspersons!.join(", ")
    : "None"}
</div>

<div>
  Sports Academies:{" "}
  {(districtData as {
    sports?: {
      sportsAcademies?: string[];
    };
  }).sports?.sportsAcademies?.length
    ? (
        districtData as {
          sports?: {
            sportsAcademies?: string[];
          };
        }
      ).sports!.sportsAcademies!.join(", ")
    : "None"}
</div>

<div>
  Annual Sports Events:{" "}
  {(districtData as {
    sports?: {
      annualSportsEvents?: string[];
    };
  }).sports?.annualSportsEvents?.length
    ? (
        districtData as {
          sports?: {
            annualSportsEvents?: string[];
          };
        }
      ).sports!.annualSportsEvents!.join(", ")
    : "None"}
</div>

<div>
  Government Sports Programs:{" "}
  {(districtData as {
    sports?: {
      governmentSportsPrograms?: string[];
    };
  }).sports?.governmentSportsPrograms?.length
    ? (
        districtData as {
          sports?: {
            governmentSportsPrograms?: string[];
          };
        }
      ).sports!.governmentSportsPrograms!.join(", ")
    : "None"}
</div>

<div>
  Sports Achievements:{" "}
  {(districtData as {
    sports?: {
      sportsAchievements?: string[];
    };
  }).sports?.sportsAchievements?.length
    ? (
        districtData as {
          sports?: {
            sportsAchievements?: string[];
          };
        }
      ).sports!.sportsAchievements!.join(", ")
    : "None"}
</div>
  </>
) : section === "Banking & Finance" ? (
  <>
    <div>
  Nationalized Banks:{" "}
  {(districtData as {
    bankingAndFinance?: {
      nationalizedBanks?: string[];
    };
  }).bankingAndFinance?.nationalizedBanks?.length
    ? (
        districtData as {
          bankingAndFinance?: {
            nationalizedBanks?: string[];
          };
        }
      ).bankingAndFinance!.nationalizedBanks!.join(", ")
    : "None"}
</div>

<div>
  Private Banks:{" "}
  {(districtData as {
    bankingAndFinance?: {
      privateBanks?: string[];
    };
  }).bankingAndFinance?.privateBanks?.length
    ? (
        districtData as {
          bankingAndFinance?: {
            privateBanks?: string[];
          };
        }
      ).bankingAndFinance!.privateBanks!.join(", ")
    : "None"}
</div>

<div>
  Regional Rural Banks:{" "}
  {(districtData as {
    bankingAndFinance?: {
      regionalRuralBanks?: string[];
    };
  }).bankingAndFinance?.regionalRuralBanks?.length
    ? (
        districtData as {
          bankingAndFinance?: {
            regionalRuralBanks?: string[];
          };
        }
      ).bankingAndFinance!.regionalRuralBanks!.join(", ")
    : "None"}
</div>

<div>
  Cooperative Banks:{" "}
  {(districtData as {
    bankingAndFinance?: {
      cooperativeBanks?: string[];
    };
  }).bankingAndFinance?.cooperativeBanks?.length
    ? (
        districtData as {
          bankingAndFinance?: {
            cooperativeBanks?: string[];
          };
        }
      ).bankingAndFinance!.cooperativeBanks!.join(", ")
    : "None"}
</div>

<div>
  ATMs:{" "}
  {(districtData as {
    bankingAndFinance?: {
      atms?: string;
    };
  }).bankingAndFinance?.atms || "Not available"}
</div>

<div>
  Digital Banking:{" "}
  {(districtData as {
    bankingAndFinance?: {
      digitalBanking?: string;
    };
  }).bankingAndFinance?.digitalBanking || "Not available"}
</div>

<div>
  Microfinance Institutions:{" "}
  {(districtData as {
    bankingAndFinance?: {
      microfinanceInstitutions?: string[];
    };
  }).bankingAndFinance?.microfinanceInstitutions?.length
    ? (
        districtData as {
          bankingAndFinance?: {
            microfinanceInstitutions?: string[];
          };
        }
      ).bankingAndFinance!.microfinanceInstitutions!.join(", ")
    : "None"}
</div>

<div>
  Financial Inclusion Programs:{" "}
  {(districtData as {
    bankingAndFinance?: {
      financialInclusionPrograms?: string[];
    };
  }).bankingAndFinance?.financialInclusionPrograms?.length
    ? (
        districtData as {
          bankingAndFinance?: {
            financialInclusionPrograms?: string[];
          };
        }
      ).bankingAndFinance!.financialInclusionPrograms!.join(", ")
    : "None"}
</div>

<div>
  Major Insurance Companies:{" "}
  {(districtData as {
    bankingAndFinance?: {
      majorInsuranceCompanies?: string[];
    };
  }).bankingAndFinance?.majorInsuranceCompanies?.length
    ? (
        districtData as {
          bankingAndFinance?: {
            majorInsuranceCompanies?: string[];
          };
        }
      ).bankingAndFinance!.majorInsuranceCompanies!.join(", ")
    : "None"}
</div>
  </>
) : section === "Governance & Public Services" ? (
  <>
    <div>
  District Administration:{" "}
  {(districtData as {
    governanceAndPublicServices?: {
      districtAdministration?: string;
    };
  }).governanceAndPublicServices?.districtAdministration || "Not available"}
</div>

<div>
  Municipal Bodies:{" "}
  {(districtData as {
    governanceAndPublicServices?: {
      municipalBodies?: string[];
    };
  }).governanceAndPublicServices?.municipalBodies?.length
    ? (
        districtData as {
          governanceAndPublicServices?: {
            municipalBodies?: string[];
          };
        }
      ).governanceAndPublicServices!.municipalBodies!.join(", ")
    : "None"}
</div>

<div>
  Police Administration:{" "}
  {(districtData as {
    governanceAndPublicServices?: {
      policeAdministration?: string;
    };
  }).governanceAndPublicServices?.policeAdministration || "Not available"}
</div>

<div>
  Fire Services:{" "}
  {(districtData as {
    governanceAndPublicServices?: {
      fireServices?: string;
    };
  }).governanceAndPublicServices?.fireServices || "Not available"}
</div>

<div>
  Judiciary:{" "}
  {(districtData as {
    governanceAndPublicServices?: {
      judiciary?: string[];
    };
  }).governanceAndPublicServices?.judiciary?.length
    ? (
        districtData as {
          governanceAndPublicServices?: {
            judiciary?: string[];
          };
        }
      ).governanceAndPublicServices!.judiciary!.join(", ")
    : "None"}
</div>

<div>
  Government Offices:{" "}
  {(districtData as {
    governanceAndPublicServices?: {
      governmentOffices?: string[];
    };
  }).governanceAndPublicServices?.governmentOffices?.length
    ? (
        districtData as {
          governanceAndPublicServices?: {
            governmentOffices?: string[];
          };
        }
      ).governanceAndPublicServices!.governmentOffices!.join(", ")
    : "None"}
</div>

<div>
  Public Distribution System:{" "}
  {(districtData as {
    governanceAndPublicServices?: {
      publicDistributionSystem?: string;
    };
  }).governanceAndPublicServices?.publicDistributionSystem || "Not available"}
</div>

<div>
  e-Governance Services:{" "}
  {(districtData as {
    governanceAndPublicServices?: {
      eGovernanceServices?: string[];
    };
  }).governanceAndPublicServices?.eGovernanceServices?.length
    ? (
        districtData as {
          governanceAndPublicServices?: {
            eGovernanceServices?: string[];
          };
        }
      ).governanceAndPublicServices!.eGovernanceServices!.join(", ")
    : "None"}
</div>

<div>
  Citizen Services:{" "}
  {(districtData as {
    governanceAndPublicServices?: {
      citizenServices?: string[];
    };
  }).governanceAndPublicServices?.citizenServices?.length
    ? (
        districtData as {
          governanceAndPublicServices?: {
            citizenServices?: string[];
          };
        }
      ).governanceAndPublicServices!.citizenServices!.join(", ")
    : "None"}
</div>
  </>
) : section === "Law & Order" ? (
  <>
    <div>
  Police District:{" "}
  {(districtData as {
    lawAndOrder?: {
      policeDistrict?: string;
    };
  }).lawAndOrder?.policeDistrict || "Not available"}
</div>

<div>
  Police Stations:{" "}
  {(districtData as {
    lawAndOrder?: {
      policeStations?: string[];
    };
  }).lawAndOrder?.policeStations?.length
    ? (
        districtData as {
          lawAndOrder?: {
            policeStations?: string[];
          };
        }
      ).lawAndOrder!.policeStations!.join(", ")
    : "None"}
</div>

<div>
  Women Police Stations:{" "}
  {(districtData as {
    lawAndOrder?: {
      womenPoliceStations?: string[];
    };
  }).lawAndOrder?.womenPoliceStations?.length
    ? (
        districtData as {
          lawAndOrder?: {
            womenPoliceStations?: string[];
          };
        }
      ).lawAndOrder!.womenPoliceStations!.join(", ")
    : "None"}
</div>

<div>
  Cyber Crime Police Station:{" "}
  {(districtData as {
    lawAndOrder?: {
      cyberCrimePoliceStation?: string;
    };
  }).lawAndOrder?.cyberCrimePoliceStation || "Not available"}
</div>

<div>
  Traffic Police:{" "}
  {(districtData as {
    lawAndOrder?: {
      trafficPolice?: string;
    };
  }).lawAndOrder?.trafficPolice || "Not available"}
</div>

<div>
  Prisons:{" "}
  {(districtData as {
    lawAndOrder?: {
      prisons?: string[];
    };
  }).lawAndOrder?.prisons?.length
    ? (
        districtData as {
          lawAndOrder?: {
            prisons?: string[];
          };
        }
      ).lawAndOrder!.prisons!.join(", ")
    : "None"}
</div>

<div>
  Emergency Numbers:{" "}
  {(districtData as {
    lawAndOrder?: {
      emergencyNumbers?: string[];
    };
  }).lawAndOrder?.emergencyNumbers?.length
    ? (
        districtData as {
          lawAndOrder?: {
            emergencyNumbers?: string[];
          };
        }
      ).lawAndOrder!.emergencyNumbers!.join(", ")
    : "None"}
</div>

<div>
  Crime Prevention Initiatives:{" "}
  {(districtData as {
    lawAndOrder?: {
      crimePreventionInitiatives?: string[];
    };
  }).lawAndOrder?.crimePreventionInitiatives?.length
    ? (
        districtData as {
          lawAndOrder?: {
            crimePreventionInitiatives?: string[];
          };
        }
      ).lawAndOrder!.crimePreventionInitiatives!.join(", ")
    : "None"}
</div>

<div>
  Disaster Management:{" "}
  {(districtData as {
    lawAndOrder?: {
      disasterManagement?: string;
    };
  }).lawAndOrder?.disasterManagement || "Not available"}
</div>
  </>
) : section === "Environment" ? (
  <>
    <div>
  Forest Cover:{" "}
  {(districtData as {
    environment?: {
      forestCover?: string;
    };
  }).environment?.forestCover || "Not available"}
</div>

<div>
  Major Forests:{" "}
  {(districtData as {
    environment?: {
      majorForests?: string[];
    };
  }).environment?.majorForests?.length
    ? (
        districtData as {
          environment?: {
            majorForests?: string[];
          };
        }
      ).environment!.majorForests!.join(", ")
    : "None"}
</div>

<div>
  Protected Areas:{" "}
  {(districtData as {
    environment?: {
      protectedAreas?: string[];
    };
  }).environment?.protectedAreas?.length
    ? (
        districtData as {
          environment?: {
            protectedAreas?: string[];
          };
        }
      ).environment!.protectedAreas!.join(", ")
    : "None"}
</div>

<div>
  Wetlands:{" "}
  {(districtData as {
    environment?: {
      wetlands?: string[];
    };
  }).environment?.wetlands?.length
    ? (
        districtData as {
          environment?: {
            wetlands?: string[];
          };
        }
      ).environment!.wetlands!.join(", ")
    : "None"}
</div>

<div>
  Rivers:{" "}
  {(districtData as {
    environment?: {
      rivers?: string[];
    };
  }).environment?.rivers?.length
    ? (
        districtData as {
          environment?: {
            rivers?: string[];
          };
        }
      ).environment!.rivers!.join(", ")
    : "None"}
</div>

<div>
  Lakes:{" "}
  {(districtData as {
    environment?: {
      lakes?: string[];
    };
  }).environment?.lakes?.length
    ? (
        districtData as {
          environment?: {
            lakes?: string[];
          };
        }
      ).environment!.lakes!.join(", ")
    : "None"}
</div>

<div>
  Biodiversity:{" "}
  {(districtData as {
    environment?: {
      biodiversity?: string[];
    };
  }).environment?.biodiversity?.length
    ? (
        districtData as {
          environment?: {
            biodiversity?: string[];
          };
        }
      ).environment!.biodiversity!.join(", ")
    : "None"}
</div>

<div>
  Environmental Issues:{" "}
  {(districtData as {
    environment?: {
      environmentalIssues?: string[];
    };
  }).environment?.environmentalIssues?.length
    ? (
        districtData as {
          environment?: {
            environmentalIssues?: string[];
          };
        }
      ).environment!.environmentalIssues!.join(", ")
    : "None"}
</div>

<div>
  Conservation Initiatives:{" "}
  {(districtData as {
    environment?: {
      conservationInitiatives?: string[];
    };
  }).environment?.conservationInitiatives?.length
    ? (
        districtData as {
          environment?: {
            conservationInitiatives?: string[];
          };
        }
      ).environment!.conservationInitiatives!.join(", ")
    : "None"}
</div>
  </>
) : section === "Media & Communication" ? (
  <>
    <div>
  Newspapers:{" "}
  {(districtData as {
    mediaAndCommunication?: {
      newspapers?: string[];
    };
  }).mediaAndCommunication?.newspapers?.length
    ? (
        districtData as {
          mediaAndCommunication?: {
            newspapers?: string[];
          };
        }
      ).mediaAndCommunication!.newspapers!.join(", ")
    : "None"}
</div>

<div>
  Television Channels:{" "}
  {(districtData as {
    mediaAndCommunication?: {
      televisionChannels?: string[];
    };
  }).mediaAndCommunication?.televisionChannels?.length
    ? (
        districtData as {
          mediaAndCommunication?: {
            televisionChannels?: string[];
          };
        }
      ).mediaAndCommunication!.televisionChannels!.join(", ")
    : "None"}
</div>

<div>
  Radio Stations:{" "}
  {(districtData as {
    mediaAndCommunication?: {
      radioStations?: string[];
    };
  }).mediaAndCommunication?.radioStations?.length
    ? (
        districtData as {
          mediaAndCommunication?: {
            radioStations?: string[];
          };
        }
      ).mediaAndCommunication!.radioStations!.join(", ")
    : "None"}
</div>

<div>
  News Portals:{" "}
  {(districtData as {
    mediaAndCommunication?: {
      newsPortals?: string[];
    };
  }).mediaAndCommunication?.newsPortals?.length
    ? (
        districtData as {
          mediaAndCommunication?: {
            newsPortals?: string[];
          };
        }
      ).mediaAndCommunication!.newsPortals!.join(", ")
    : "None"}
</div>

<div>
  Postal Services:{" "}
  {(districtData as {
    mediaAndCommunication?: {
      postalServices?: string;
    };
  }).mediaAndCommunication?.postalServices || "Not available"}
</div>

<div>
  Telecommunication:{" "}
  {(districtData as {
    mediaAndCommunication?: {
      telecommunication?: string;
    };
  }).mediaAndCommunication?.telecommunication || "Not available"}
</div>

<div>
  Internet Providers:{" "}
  {(districtData as {
    mediaAndCommunication?: {
      internetProviders?: string[];
    };
  }).mediaAndCommunication?.internetProviders?.length
    ? (
        districtData as {
          mediaAndCommunication?: {
            internetProviders?: string[];
          };
        }
      ).mediaAndCommunication!.internetProviders!.join(", ")
    : "None"}
</div>

<div>
  Mobile Network Operators:{" "}
  {(districtData as {
    mediaAndCommunication?: {
      mobileNetworkOperators?: string[];
    };
  }).mediaAndCommunication?.mobileNetworkOperators?.length
    ? (
        districtData as {
          mediaAndCommunication?: {
            mobileNetworkOperators?: string[];
          };
        }
      ).mediaAndCommunication!.mobileNetworkOperators!.join(", ")
    : "None"}
</div>

<div>
  Digital Media:{" "}
  {(districtData as {
    mediaAndCommunication?: {
      digitalMedia?: string[];
    };
  }).mediaAndCommunication?.digitalMedia?.length
    ? (
        districtData as {
          mediaAndCommunication?: {
            digitalMedia?: string[];
          };
        }
      ).mediaAndCommunication!.digitalMedia!.join(", ")
    : "None"}
</div>
  </>
) : section === "Rankings & Achievements" ? (
  <>
    <div>
  State Rankings:{" "}
  {(districtData as {
    rankingsAndAchievements?: {
      stateRankings?: string[];
    };
  }).rankingsAndAchievements?.stateRankings?.length
    ? (
        districtData as {
          rankingsAndAchievements?: {
            stateRankings?: string[];
          };
        }
      ).rankingsAndAchievements!.stateRankings!.join(", ")
    : "None"}
</div>

<div>
  National Rankings:{" "}
  {(districtData as {
    rankingsAndAchievements?: {
      nationalRankings?: string[];
    };
  }).rankingsAndAchievements?.nationalRankings?.length
    ? (
        districtData as {
          rankingsAndAchievements?: {
            nationalRankings?: string[];
          };
        }
      ).rankingsAndAchievements!.nationalRankings!.join(", ")
    : "None"}
</div>

<div>
  Awards:{" "}
  {(districtData as {
    rankingsAndAchievements?: {
      awards?: string[];
    };
  }).rankingsAndAchievements?.awards?.length
    ? (
        districtData as {
          rankingsAndAchievements?: {
            awards?: string[];
          };
        }
      ).rankingsAndAchievements!.awards!.join(", ")
    : "None"}
</div>

<div>
  Notable Achievements:{" "}
  {(districtData as {
    rankingsAndAchievements?: {
      notableAchievements?: string[];
    };
  }).rankingsAndAchievements?.notableAchievements?.length
    ? (
        districtData as {
          rankingsAndAchievements?: {
            notableAchievements?: string[];
          };
        }
      ).rankingsAndAchievements!.notableAchievements!.join(", ")
    : "None"}
</div>

<div>
  Development Indicators:{" "}
  {(districtData as {
    rankingsAndAchievements?: {
      developmentIndicators?: string[];
    };
  }).rankingsAndAchievements?.developmentIndicators?.length
    ? (
        districtData as {
          rankingsAndAchievements?: {
            developmentIndicators?: string[];
          };
        }
      ).rankingsAndAchievements!.developmentIndicators!.join(", ")
    : "None"}
</div>

<div>
  Records:{" "}
  {(districtData as {
    rankingsAndAchievements?: {
      records?: string[];
    };
  }).rankingsAndAchievements?.records?.length
    ? (
        districtData as {
          rankingsAndAchievements?: {
            records?: string[];
          };
        }
      ).rankingsAndAchievements!.records!.join(", ")
    : "None"}
</div>
  </>
) : section === "Miscellaneous" ? (
  <>
    <div>
  Famous Personalities:{" "}
  {(districtData as {
    miscellaneous?: {
      famousPersonalities?: string[];
    };
  }).miscellaneous?.famousPersonalities?.length
    ? (
        districtData as {
          miscellaneous?: {
            famousPersonalities?: string[];
          };
        }
      ).miscellaneous!.famousPersonalities!.join(", ")
    : "None"}
</div>

<div>
  Nicknames:{" "}
  {(districtData as {
    miscellaneous?: {
      nicknames?: string[];
    };
  }).miscellaneous?.nicknames?.length
    ? (
        districtData as {
          miscellaneous?: {
            nicknames?: string[];
          };
        }
      ).miscellaneous!.nicknames!.join(", ")
    : "None"}
</div>

<div>
  Important Dates:{" "}
  {(districtData as {
    miscellaneous?: {
      importantDates?: string[];
    };
  }).miscellaneous?.importantDates?.length
    ? (
        districtData as {
          miscellaneous?: {
            importantDates?: string[];
          };
        }
      ).miscellaneous!.importantDates!.join(", ")
    : "None"}
</div>

<div>
  Festivals:{" "}
  {(districtData as {
    miscellaneous?: {
      festivals?: string[];
    };
  }).miscellaneous?.festivals?.length
    ? (
        districtData as {
          miscellaneous?: {
            festivals?: string[];
          };
        }
      ).miscellaneous!.festivals!.join(", ")
    : "None"}
</div>

<div>
  Local Foods:{" "}
  {(districtData as {
    miscellaneous?: {
      localFoods?: string[];
    };
  }).miscellaneous?.localFoods?.length
    ? (
        districtData as {
          miscellaneous?: {
            localFoods?: string[];
          };
        }
      ).miscellaneous!.localFoods!.join(", ")
    : "None"}
</div>

<div>
  Famous Markets:{" "}
  {(districtData as {
    miscellaneous?: {
      famousMarkets?: string[];
    };
  }).miscellaneous?.famousMarkets?.length
    ? (
        districtData as {
          miscellaneous?: {
            famousMarkets?: string[];
          };
        }
      ).miscellaneous!.famousMarkets!.join(", ")
    : "None"}
</div>

<div>
  Emergency Contacts:{" "}
  {(districtData as {
    miscellaneous?: {
      emergencyContacts?: string[];
    };
  }).miscellaneous?.emergencyContacts?.length
    ? (
        districtData as {
          miscellaneous?: {
            emergencyContacts?: string[];
          };
        }
      ).miscellaneous!.emergencyContacts!.join(", ")
    : "None"}
</div>

<div>
  Official Website:{" "}
  {(districtData as {
    miscellaneous?: {
      officialWebsite?: string;
    };
  }).miscellaneous?.officialWebsite || "Not available"}
</div>

<div>
  Additional Information:{" "}
  {(districtData as {
    miscellaneous?: {
      additionalInformation?: string[];
    };
  }).miscellaneous?.additionalInformation?.length
    ? (
        districtData as {
          miscellaneous?: {
            additionalInformation?: string[];
          };
        }
      ).miscellaneous!.additionalInformation!.join(", ")
    : "None"}
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
