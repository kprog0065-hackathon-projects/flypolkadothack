"use client";

import Image from "next/image";
import Link from "next/link";

// Example NFT bag items (replace with dynamic data)
const bagItems = [
  {
    id: "emerald-evening-gown",
    name: "Emerald Evening Gown",
    brand: "Luxe Atelier",
    tag: "Rare",
    category: "Evening Wear",
    price: 150,
    currency: "FLY",
    available: "42/100",
    img: "/assets/bags/emerald_evening_gown.jpg", // replace with real NFT or bag image
    color: "#FFC439",
  },
  {
    id: "diamond-cufflinks",
    name: "Diamond Cufflinks",
    brand: "Royal Jewelry",
    tag: "Epic",
    category: "Accessories",
    price: 89,
    currency: "FLY",
    available: "23/50",
    img: "/assets/bags/diamond_cufflinks.jpg",
    color: "#E6007A",
  },
  {
    id: "sapphire-necklace",
    name: "Sapphire Necklace",
    brand: "Celestial Gems",
    tag: "Legendary",
    category: "Jewelry",
    price: 220,
    currency: "FLY",
    available: "15/75",
    img: "/assets/bags/sapphire_necklace.jpg",
    color: "#0A0A0A",
  },
];

export default function BagsPage() {
  return (
    <section className="min-h-screen bg-black px-6 pt-32">
      <h2 className="text-4xl font-bold text-[#FFC439] mb-8 text-center">Luxury Bags Fractional Collectibles</h2>
      {/* Marketplace stats */}
      <div className="flex gap-8 justify-center mb-10">
        <div className="bg-[#0A0A0A] border border-[#FFC439] rounded-xl py-6 px-10 text-center text-[#FFC439] font-semibold text-lg">
          247
          <br />
          <span className="font-normal text-base">Total Items</span>
        </div>
        <div className="bg-[#0A0A0A] border border-[#FFC439] rounded-xl py-6 px-10 text-center text-[#2bd282] font-semibold text-lg">
          $2.4M
          <br />
          <span className="font-normal text-base text-[#FFC439]">Total Volume</span>
        </div>
        <div className="bg-[#0A0A0A] border border-[#FFC439] rounded-xl py-6 px-10 text-center text-[#6490ff] font-semibold text-lg">
          15K
          <br />
          <span className="font-normal text-base text-[#FFC439]">Active Traders</span>
        </div>
        <div className="bg-[#0A0A0A] border border-[#FFC439] rounded-xl py-6 px-10 text-center text-[#FFC439] font-semibold text-lg">
          87%
          <br />
          <span className="font-normal text-base">Avg. Ownership</span>
        </div>
      </div>
      {/* NFT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {bagItems.map(item => (
          <div
            key={item.id}
            className={`relative bg-[#181818] border border-[${item.color}] text-white rounded-2xl shadow-lg overflow-hidden transition hover:scale-105`}
          >
            {/* Tag */}
            <span
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: item.color, color: "#0A0A0A" }}
            >
              {item.tag}
            </span>
            {/* NFT image */}
            <div className="flex items-center justify-center h-48 bg-[#232323]">
              <Image src={item.img} alt={item.name} width={200} height={160} className="object-contain max-h-40" />
            </div>
            {/* Details */}
            <div className="p-6">
              <div className="font-bold text-lg text-[#FFC439]">{item.name}</div>
              <div className="font-medium text-gray-300 mb-1">{item.brand}</div>
              <div className="text-xs bg-[#353535] rounded px-2 py-1 inline-block mb-2">{item.category}</div>
              <div className="mt-3 text-sm">
                <span className="text-gray-400">Price per fraction:</span>
                <span className="text-[#FFC439] ml-2">
                  {item.price} {item.currency}
                </span>
              </div>
              <div className="mt-1 text-sm">
                <span className="text-gray-400">Available:</span>
                <span className="ml-2">{item.available}</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-[#353535] rounded-full h-3 mt-4 mb-4">
                <div
                  className="bg-gradient-to-r from-[#FFC439] to-[#E6007A] h-3 rounded-full"
                  style={{ width: "60%" }}
                />
              </div>
              <Link href={`/marketplace/bags/${item.id}`}>
                <button className="w-full bg-gradient-to-r from-[#FFC439] to-[#E6007A] text-black font-bold py-3 rounded-xl text-lg hover:opacity-90 transition mt-1">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
