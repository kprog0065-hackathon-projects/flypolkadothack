import Image from "next/image";
import Link from "next/link";

const TABS = [
  {
    name: "Luxury Bags",
    href: "/marketplace/bags",
    img: "/tabs/bagcollectiontab.png",
    alt: "Designer handbags",
  },
  {
    name: "Ready-to-Wear Collections",
    href: "/marketplace/ready-to-wear",
    img: "/tabs/rtwcollectiontab.png",
    alt: "Fashion look RTW",
  },
  {
    name: "Luxury Shoes",
    href: "/marketplace/shoes",
    img: "/tabs/luxuryshoestab.png",
    alt: "Luxury shoes",
  },
];

export default function MarketplaceTabsPage() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-14 text-[#FFC439]">RWA Collectibles Marketplace</h1>
      <div className="flex flex-col md:flex-row gap-16 px-8 w-full justify-center">
        {TABS.map(tab => (
          <Link href={tab.href} key={tab.href} className="group">
            <div
              className={`relative w-80 h-80 rounded-3xl shadow-2xl flex items-center justify-center transition-transform hover:scale-105 cursor-pointer`}
            >
              <Image
                src={tab.img}
                alt={tab.alt}
                width={320}
                height={320}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 rounded-3xl" style={{ backgroundColor: "rgba(10,10,10,0.15)" }} />
              <span className="relative text-3xl md:text-4xl font-bold text-white text-center z-10 drop-shadow-lg">
                {tab.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
