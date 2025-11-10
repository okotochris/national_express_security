// content/industries.ts
export interface Industry {
  title: string;
  content: string;
  image: string;
  url: string;
}

export const industries: Industry[] = [
  {
    title: "Fruit",
    content:
      "Our cold-chain logistics keeps fruits fresh and nutritious from farm to international markets, with strict temperature control and fast transit times.",
    image: "/fruit.jpg",
    url: "/fruit",
  },
  {
    title: "Pharmaceutical",
    content:
      "We transport sensitive medical goods with regulatory compliance, secure handling, and temperature-controlled solutions to maintain product integrity.",
    image: "/pharma.jpg",
    url: "/pharmacy",
  },
  {
    title: "Cars Part",
    content:
      "From engines to small components, we ensure reliable and timely delivery to assembly lines and distributors through optimized automotive logistics.",
    image: "/carparts.jpg",
    url: "/carpart",
  },
  {
    title: "Mining and Minerals",
    content:
      "Heavy-duty logistics for moving mining equipment, raw minerals, and resources from remote sites to global markets efficiently and safely.",
    image: "/mining.jpg",
    url: "/mining",
  },
  {
    title: "Agriculture",
    content:
      "We support the movement of agricultural goods — grains, fertilizers, and machinery — ensuring seamless farm-to-market logistics through reliable supply chains and temperature-controlled solutions.",
    image: "/agriculture.jpg",
    url: "/agriculture",
  },
  {
    title: "Plastic and Rubber Product",
    content:
      "Comprehensive logistics solutions for plastic and rubber industries, supporting international trade with flexible, cost-effective transport.",
    image: "/plastic.jpg",
    url: "/plastic",
  },
  {
    title: "Chemical and Petrochemical",
    content:
      "Specialized handling and secure transport of hazardous and non-hazardous chemicals with safety as top priority.",
    image: "/chemical.jpg",
    url: "/chemical",
  },
  {
    title: "Food and Beverage",
    content:
      "Reliable logistics for perishable and non-perishable food items, ensuring freshness, safety, and timely delivery across continents.",
    image: "/food.jpg",
    url: "/food",
  },
  {
    title: "Pulp Paper and Forestry Product",
    content:
      "Efficient movement of forestry products and pulp & paper materials to support industries and global supply chains.",
    image: "/pulp.jpg",
    url: "/pulp",
  },
  {
    title: "Retail",
    content:
      "Agile logistics solutions for retail businesses, supporting fast restocking, warehousing, and last-mile delivery worldwide.",
    image: "/retail.jpg",
    url: "/retail",
  },
];
