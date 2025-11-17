"use client";

import Image from "next/image";

const SHOES = [
  {
    name: "Jimmy Choo Nude & Gold Pumps Collection, 2023",
    description:
      "A trio of pointed-toe pumps—classic nude, caramel brown, and metallic gold—showcasing Jimmy Choo's 2023 signature styles. These heels blend modern minimalism with high-glamour, perfect for evening or elevated daywear.",
    image: "/nfts/shoe1.png",
    priceFly: "1,450 FLY",
    priceUSD: "$2,900",
    fractions: { available: 55, total: 80 },
    attributes: [
      { trait_type: "Brand", value: "Jimmy Choo" },
      { trait_type: "Color", value: "Nude, Brown, Gold" },
      { trait_type: "Style", value: "Pointed-toe Pumps" },
      { trait_type: "Year", value: "2023" },
      { trait_type: "Material", value: "Leather" },
      { trait_type: "Edition", value: "Red Carpet Trio" },
    ],
  },
  {
    name: "Christian Louboutin Signature Black Boots, 2022",
    description:
      "A collectible set of Louboutin black boots: knee-high patent, classic leather, and lace-up stiletto. Each features the house's iconic red sole—Parisian, bold, and instantly recognizable in high fashion.",
    image: "/nfts/shoe2.png",
    priceFly: "1,960 FLY",
    priceUSD: "$3,300",
    fractions: { available: 34, total: 50 },
    attributes: [
      { trait_type: "Brand", value: "Christian Louboutin" },
      { trait_type: "Color", value: "Black" },
      { trait_type: "Style", value: "Various Boots" },
      { trait_type: "Year", value: "2022" },
      { trait_type: "Material", value: "Patent/Leather" },
      { trait_type: "Edition", value: "Signature Boots" },
    ],
  },
  {
    name: "Prada Braided Leather Sandals Trio, 2023",
    description:
      "This set features Prada's neutral sandals: strappy gold heels, raffia-inspired wedges, and minimalist brown mules. A fresh take on 90s luxury with tactile finishes, fit for runway and summer collection highlights.",
    image: "/nfts/shoe3.png",
    priceFly: "1,200 FLY",
    priceUSD: "$2,350",
    fractions: { available: 76, total: 100 },
    attributes: [
      { trait_type: "Brand", value: "Prada" },
      { trait_type: "Color", value: "Gold, Tan, Brown" },
      { trait_type: "Style", value: "Sandals & Mules" },
      { trait_type: "Year", value: "2023" },
      { trait_type: "Material", value: "Leather/Woven" },
      { trait_type: "Edition", value: "Braided Sandals Set" },
    ],
  },
];

export default function ShoesPage() {
  return (
    <section className="min-h-screen bg-black px-8 py-16 pt-20">
      <h2 className="text-4xl font-bold text-[#FFC439] mb-10 text-center border-b-2 border-[#FFC439] pb-4 tracking-wide">
        Luxury Shoes NFT Collections
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {SHOES.map((shoe, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-2xl w-[370px] flex flex-col shadow-2xl border border-[#FFC439] items-center p-7"
            style={{ minHeight: 610 }}
          >
            <div className="bg-white rounded-xl flex items-center justify-center mb-5 shadow-lg aspect-[6/5] w-[245px] overflow-hidden border border-[#FFC439]">
              <Image src={shoe.image} alt={shoe.name} width={220} height={180} className="object-contain" unoptimized />
            </div>
            <div className="text-center font-bold text-[#FFC439] text-lg mb-2">{shoe.name}</div>
            <div className="text-sm text-gray-200 text-center mb-2">{shoe.description}</div>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {shoe.attributes.map(attr => (
                <span
                  key={attr.trait_type}
                  className="border border-[#FFC439] text-xs px-2 py-1 rounded text-[#FFC439] bg-zinc-800"
                >
                  <span className="font-bold">{attr.trait_type}:</span> {attr.value}
                </span>
              ))}
            </div>
            <div className="flex items-end justify-between w-full mt-auto">
              <div>
                <div className="font-bold text-[#FFC439] text-[1.1rem] mb-1">
                  Price: <span className="text-[#E6007A]">{shoe.priceFly}</span>
                  <span className="text-white"> ({shoe.priceUSD})</span>
                </div>
                <div className="text-[0.97rem] text-[#FFC439]">
                  Fractions: {shoe.fractions.available} / {shoe.fractions.total}
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
