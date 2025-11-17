"use client";

import Image from "next/image";

const BAGS = [
  {
    name: "Louis Vuitton Capucines MM Bag - Red, 2023",
    description:
      "An iconic Louis Vuitton Capucines MM Bag in vibrant red Taurillon leather, classic top-handle and LV monogram. Originally released in 2013, this 2023 edition exemplifies timeless luxury. Coveted for its elegant structure and collectible status.",
    image: "/nfts/bags1.png",
    priceFly: "5,000 FLY",
    priceUSD: "$12,900",
    fractions: { available: 144, total: 200 },
    attributes: [
      { trait_type: "Brand", value: "Louis Vuitton" },
      { trait_type: "Model", value: "Capucines MM" },
      { trait_type: "Color", value: "Red" },
      { trait_type: "Year", value: "2023" },
      { trait_type: "Material", value: "Taurillon Leather" },
      { trait_type: "Collectible Status", value: "Flagship, Limited Colors" },
    ],
  },
  {
    name: "Gucci Dionysus GG Supreme Shoulder Bag - Beige, 2023",
    description:
      "Gucci’s Dionysus GG Supreme shoulder bag featuring classic GG monogram, taupe suede details, and tigerhead clasp. A top-selling collectible from Gucci’s 2023 luxury accessory line, often seen in unsold inventory cycles and outlets.",
    image: "/nfts/bags2.png",
    priceFly: "3,600 FLY",
    priceUSD: "$8,600",
    fractions: { available: 89, total: 125 },
    attributes: [
      { trait_type: "Brand", value: "Gucci" },
      { trait_type: "Model", value: "Dionysus GG Supreme" },
      { trait_type: "Color", value: "Beige/Ebony" },
      { trait_type: "Year", value: "2023" },
      { trait_type: "Material", value: "GG Coated Canvas / Suede" },
      { trait_type: "Collectible Status", value: "Best Seller / Outlet Classic" },
    ],
  },
  {
    name: "Saint Laurent Sac de Jour Large Bag - Black, 2023",
    description:
      "Saint Laurent’s premium Sac de Jour Large in black calfskin, featuring gold hardware, padlock charm, and timeless tote silhouette. A staple of YSL’s luxury lines, 2023 edition—high demand, but often excess after new redesigns.",
    image: "/nfts/bags3.png",
    priceFly: "4,200 FLY",
    priceUSD: "$10,200",
    fractions: { available: 102, total: 175 },
    attributes: [
      { trait_type: "Brand", value: "Saint Laurent" },
      { trait_type: "Model", value: "Sac de Jour Large" },
      { trait_type: "Color", value: "Black" },
      { trait_type: "Year", value: "2023" },
      { trait_type: "Material", value: "Calfskin Leather / Gold Hardware" },
      { trait_type: "Collectible Status", value: "Premium Model, Outlet Occurrence" },
    ],
  },
];

export default function BagsPage() {
  return (
    <section className="min-h-screen bg-black px-8 py-16 pt-20">
      <h2 className="text-4xl font-bold text-[#FFC439] mb-10 text-center border-b-2 border-[#FFC439] pb-4 tracking-wide">
        Luxury Bags Fractional Collectibles
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {BAGS.map((bag, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-2xl w-[370px] flex flex-col shadow-2xl border border-[#FFC439] items-center p-7"
            style={{ minHeight: 610 }}
          >
            <div className="bg-white rounded-xl flex items-center justify-center mb-5 shadow-lg aspect-[6/5] w-[245px] overflow-hidden border border-[#FFC439]">
              <Image src={bag.image} alt={bag.name} width={220} height={180} className="object-contain" unoptimized />
            </div>
            {/* Name */}
            <div className="text-center font-bold text-[#FFC439] text-lg mb-2">{bag.name}</div>
            {/* Description */}
            <div className="text-sm text-gray-200 text-center mb-2">{bag.description}</div>
            {/* Traits */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {bag.attributes.map(attr => (
                <span
                  key={attr.trait_type}
                  className="border border-[#FFC439] text-xs px-2 py-1 rounded text-[#FFC439] bg-zinc-800"
                >
                  <span className="font-bold">{attr.trait_type}:</span> {attr.value}
                </span>
              ))}
            </div>
            {/* Price + Fractions + Button */}
            <div className="flex items-end justify-between w-full mt-auto">
              <div>
                <div className="font-bold text-[#FFC439] text-[1.1rem] mb-1">
                  Price: <span className="text-[#E6007A]">{bag.priceFly.split(" ")[0]}</span>
                  <span className="text-[#FFC439]">&nbsp;FLY</span>
                  <span className="text-gray-300 ml-2">({bag.priceUSD})</span>
                </div>
                <div className="text-[0.97rem] text-[#FFC439]">
                  Fractions: {bag.fractions.available} / {bag.fractions.total}
                </div>
              </div>
              <button className="ml-4 px-8 py-3 bg-gradient-to-r from-[#FFC439] to-[#E6007A] text-black font-bold rounded-lg text-lg shadow transition hover:opacity-95">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
