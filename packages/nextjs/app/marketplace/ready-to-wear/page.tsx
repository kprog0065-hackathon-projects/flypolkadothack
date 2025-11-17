"use client";

import Image from "next/image";

const RTWS = [
  {
    name: "Dior Blue RTW Collection: Coat, Dress, & Suit",
    description:
      "A curated NFT representing a trio of iconic blue Dior ready-to-wear pieces—coat, dress, and suit—inspired by the 2023-2024 RTW collections. This exclusive collection celebrates the maison's heritage tailoring and modern eveningwear in Dior's signature blue palette.",
    image: "/nfts/rtw1.png",
    priceFly: "2,600 FLY",
    priceUSD: "$7,800",
    fractions: { available: 88, total: 120 },
    attributes: [
      { trait_type: "Brand", value: "Dior" },
      { trait_type: "Color", value: "Blue" },
      { trait_type: "Collection Type", value: "Ready-to-Wear" },
      { trait_type: "Curated Items", value: "Coat, Dress, Suit" },
      { trait_type: "Inspiration", value: "2023-2024 Dior RTW" },
      { trait_type: "Coat Style", value: "Wool Double-Breasted / Bar Jacket inspired" },
      { trait_type: "Dress Style", value: "Silk A-line / Embellished Evening" },
      { trait_type: "Suit Style", value: "Tailored Trouser Suit / Hourglass Shape" },
    ],
  },
  {
    name: "Gucci Yellow RTW Collection: Jacket, Dress & Suit",
    description:
      "A curated NFT showcasing three iconic Gucci ready-to-wear pieces in vibrant yellow: a ruffled jacket with bow, a floral-embroidered maxi dress, and an ornate patterned suit. Inspired by Gucci's celebrated runway collections from 2017–2019, each item reflects the maison's creative vision and eclectic luxury.",
    image: "/nfts/rtw2.png",
    priceFly: "2,900 FLY",
    priceUSD: "$8,600",
    fractions: { available: 62, total: 100 },
    attributes: [
      { trait_type: "Brand", value: "Gucci" },
      { trait_type: "Color", value: "Yellow" },
      { trait_type: "Collection Type", value: "Ready-to-Wear" },
      { trait_type: "Curated Items", value: "Jacket, Maxi Dress, Suit" },
      { trait_type: "Inspiration", value: "Gucci RTW 2017-2019" },
      { trait_type: "Jacket Style", value: "Ruffled wool with bow" },
      { trait_type: "Dress Style", value: "Embroidered floral maxi with tiger motif" },
      { trait_type: "Suit Style", value: "Patterned tailored suit" },
    ],
  },
  {
    name: "Saint Laurent Pink RTW Collection: Jacket, Dress & Suit",
    description:
      "An exclusive NFT representing a curated set of pink Saint Laurent ready-to-wear pieces: a mandarin-collar wool jacket, a draped evening dress, and a floral brocade suit. Inspired by Saint Laurent's vibrant tailoring and bold runway looks from circa 2018–2022, these pieces showcase the house's mastery of color and modern luxury.",
    image: "/nfts/rtw3.png",
    priceFly: "2,850 FLY",
    priceUSD: "$7,950",
    fractions: { available: 47, total: 80 },
    attributes: [
      { trait_type: "Brand", value: "Saint Laurent" },
      { trait_type: "Color", value: "Pink" },
      { trait_type: "Collection Type", value: "Ready-to-Wear" },
      { trait_type: "Curated Items", value: "Jacket, Dress, Suit" },
      { trait_type: "Inspiration", value: "Saint Laurent RTW 2018-2022" },
      { trait_type: "Jacket Style", value: "Mandarin-collar wool with black piping" },
      { trait_type: "Dress Style", value: "Draped silk evening dress" },
      { trait_type: "Suit Style", value: "Pink floral brocade tailored suit" },
    ],
  },
];

export default function RTWPage() {
  return (
    <section className="min-h-screen bg-black px-8 py-16 pt-20">
      <h2 className="text-4xl font-bold text-[#FFC439] mb-10 text-center border-b-2 border-[#FFC439] pb-4 tracking-wide">
        Ready-to-Wear NFT Collections
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {RTWS.map((rtw, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-2xl w-[370px] flex flex-col shadow-2xl border border-[#FFC439] items-center p-7"
            style={{ minHeight: 610 }}
          >
            {/* Image */}
            <div className="bg-white rounded-xl flex items-center justify-center mb-5 shadow-lg aspect-[6/5] w-[245px] overflow-hidden border border-[#FFC439]">
              <Image src={rtw.image} alt={rtw.name} width={220} height={180} className="object-contain" unoptimized />
            </div>
            <div className="text-center font-bold text-[#FFC439] text-lg mb-2">{rtw.name}</div>
            <div className="text-sm text-gray-200 text-center mb-2">{rtw.description}</div>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {rtw.attributes.map(attr => (
                <span
                  key={attr.trait_type}
                  className="border border-[#FFC439] text-xs px-2 py-1 rounded text-[#FFC439] bg-zinc-800"
                >
                  <span className="font-bold">{attr.trait_type}:</span> {attr.value}
                </span>
              ))}
            </div>
            {/* Price, Fractions, Buy */}
            <div className="flex items-end justify-between w-full mt-auto">
              <div>
                <div className="font-bold text-[#FFC439] text-[1.1rem] mb-1">
                  Price: <span className="text-[#E6007A]">{rtw.priceFly}</span>
                  <span className="text-white"> ({rtw.priceUSD})</span>
                </div>
                <div className="text-[0.97rem] text-[#FFC439]">
                  Fractions: {rtw.fractions.available} / {rtw.fractions.total}
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
