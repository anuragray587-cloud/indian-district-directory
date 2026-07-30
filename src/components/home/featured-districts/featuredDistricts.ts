export const featuredDistricts = [
  {
    name: "Begusarai",
    state: "Bihar",
    code: "BGS",
    population: "29,70,541",
    area: "1,918 km²",
    headquarters: "Begusarai",
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    code: "JPR",
    population: "66,26,178",
    area: "11,143 km²",
    headquarters: "Jaipur",
  },
  {
    name: "Mysuru",
    state: "Karnataka",
    code: "MYS",
    population: "30,01,127",
    area: "6,854 km²",
    headquarters: "Mysuru",
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    code: "VNS",
    population: "36,82,194",
    area: "1,535 km²",
    headquarters: "Varanasi",
  },
  {
    name: "Ernakulam",
    state: "Kerala",
    code: "EKM",
    population: "32,82,388",
    area: "3,063 km²",
    headquarters: "Kochi",
  },
  {
    name: "Darjeeling",
    state: "West Bengal",
    code: "DJ",
    population: "18,46,823",
    area: "3,149 km²",
    headquarters: "Darjeeling",
  },
];
export function getFeaturedDistricts<
  T extends { code: string }
>(districts: T[], count: number): T[] {
  if (districts.length <= count) return districts;

  const today = new Date();
  const seed = Number(
    `${today.getUTCFullYear()}${today.getUTCMonth() + 1}${today.getUTCDate()}`
  );

  const shuffled = [...districts].sort((a, b) => {
    const aHash =
      [...a.code].reduce((sum, char) => sum + char.charCodeAt(0), seed);

    const bHash =
      [...b.code].reduce((sum, char) => sum + char.charCodeAt(0), seed);

    return aHash - bHash;
  });

  return shuffled.slice(0, count);
}
