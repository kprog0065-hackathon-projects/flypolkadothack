"use client";

import Image from "next/image";

// Example lower-tier luxury goods
const goods = [
  {
    name: "Dior Sauvage Eau de Toilette",
    brand: "Dior",
    category: "Fragrance",
    price: 145, // USD
    image: "/shopitems/diorsauvagetoilet.png",
  },
  {
    name: "Gucci Ace Sneakers",
    brand: "Gucci",
    category: "Sneakers",
    price: 680,
    image: "/shopitems/gucciacesneaker.png",
  },
  {
    name: "Comme des Garçons Logo Pouch",
    brand: "Comme des Garçons",
    category: "Small Leather Goods",
    price: 260, // USD
    image: "/shopitems/commepouch.png",
  },
  {
    name: "Montblanc Meisterstück Classic Pen",
    brand: "Montblanc",
    category: "Accessories",
    price: 420,
    image: "/shopitems/montblancpen.png",
  },
  {
    name: "Ray-Ban Wayfarer Sunglasses",
    brand: "Ray-Ban",
    category: "Eyewear",
    price: 185,
    image: "/shopitems/raybanglasses.png",
  },
  {
    name: "Salvatore Ferragamo Leather Belt",
    brand: "Ferragamo",
    category: "Accessories",
    price: 380,
    image: "/shopitems/salvatorbelt.png",
  },
];

const FLY_DISCOUNT = 0.02;
const FLY_EXCHANGE = 1.0; // Set dynamically from your backend/feed (1 FLY = 1 USD for mockup)

export default function LuxuryShopPage() {
  return (
    <section className="min-h-screen bg-black px-6 pt-32">
      <h2 className="text-4xl font-bold text-[#FFC439] mb-12 text-center">Shop Luxury Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {goods.map(item => {
          const flyPrice = ((item.price * (1 - FLY_DISCOUNT)) / FLY_EXCHANGE).toFixed(2);
          return (
            <div
              key={item.name}
              className="bg-[#181818] rounded-2xl shadow-lg overflow-hidden border-2 border-[#232323] hover:border-[#E6007A] transition p-6 flex flex-col"
            >
              <div className="flex justify-center items-center h-52 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200} // <== Add width (pixels)
                  height={192} // <== Add height (pixels)
                  className="object-contain max-h-48 rounded-xl"
                />
              </div>
              <div className="flex-1">
                <span className="text-[#FFC439] text-sm font-bold">{item.brand}</span>
                <div className="text-xl font-bold text-white mb-1">{item.name}</div>
                <span className="bg-[#353535] text-white text-xs rounded px-3 py-1 mr-2">{item.category}</span>
              </div>
              <div className="mt-4 mb-2 text-base text-gray-200">
                <span className="line-through mr-3 text-[#FFC439]">${item.price.toFixed(2)}</span>
                <span className="font-bold text-[#E6007A] text-lg">${flyPrice} </span>
                <span className="text-sm text-gray-400">({flyPrice} FLY)</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">
                *FLY price discounted by 2%. Final price may vary by FLY market rate.
              </div>
              <button className="w-full bg-gradient-to-r from-[#FFC439] to-[#E6007A] text-black font-bold py-2 rounded-lg hover:opacity-90 transition mt-auto">
                Buy with FLY
              </button>
              <button className="w-full mt-2 bg-black border border-[#FFC439] text-[#FFC439] font-semibold py-2 rounded-lg hover:bg-[#181818] hover:text-white transition">
                Buy with Card / Stablecoin
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
