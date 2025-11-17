"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    title: "Fractional NFT Marketplace",
    desc: "Invest in luxury fashion pieces through blockchain technology",
    accent: "bg-[#FFC439]",
    href: "/marketplace",
  },
  {
    title: "Vote on New Designs",
    desc: "Shape the future of fashion and earn rewards for your predictions",
    accent: "bg-[#E6007A]",
    href: "/vote",
  },
  {
    title: "Exclusive Rewards",
    desc: "Unlock luxury benefits and earn Fly tokens for your participation",
    accent: "bg-[#FFC439]",
    href: "/rewards",
  },
  {
    title: "Luxury Discounts",
    desc: "Access exclusive deals from premium fashion brands",
    accent: "bg-[#E6007A]",
    href: "/discounts",
  },
];

const KPIS = [
  { value: "$2.4M+", label: "Total Value Traded" },
  { value: "15K+", label: "Active Voters" },
  { value: "50+", label: "Luxury Partners" },
];

const LandingPage: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-black">
    {/* Logo Centerpiece */}
    <section className="flex flex-col items-center pt-15 pb-2">
      <div className="p-4 bg-black">
        <Image
          src="/flylogoblack.png"
          alt="Fly logo"
          width={300}
          height={300}
          className="border-1 border-[#FFC439] rounded bg-black"
          priority
        />
      </div>
    </section>

    {/* Hero */}
    <section className="flex flex-col items-center justify-center pb-10 px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFC439] text-center leading-tight">
        The Future of <span className="text-[#E6007A]">Luxury Fashion</span>
      </h1>
      <p className="mt-6 max-w-xl text-center text-lg text-white">
        A next-generation platform blending blockchain technology with luxury fashion. Trade fractional ownership,
        discover emerging talent, and unlock exclusive rewards.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/marketplace"
          className="bg-[#FFC439] text-black font-semibold px-8 py-3 rounded-lg hover:bg-[#FFD966] transition"
        >
          Explore Marketplace
        </Link>
        <Link
          href="/discoverfashion"
          className="bg-[#E6007A] text-white font-semibold px-8 py-3 rounded-lg hover:bg-pink-700 transition"
        >
          Explore New Designers
        </Link>
      </div>
    </section>

    {/* Features */}
    <section className="w-full px-4 pb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#E6007A] mb-8">Discover the Platform</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {FEATURES.map((feat, i) => (
          <Link
            href={feat.href}
            key={i}
            className="flex flex-col gap-4 items-start bg-[#131313] text-white shadow-lg rounded-2xl border-2 border-transparent hover:border-[#E6007A] p-7 w-72 transition"
          >
            <div className={`w-9 h-9 rounded-lg ${feat.accent}`} />
            <div className="font-bold text-[#FFC439] text-lg mb-1">{feat.title}</div>
            <div className="mb-2">{feat.desc}</div>
            <span className="text-[#E6007A] font-semibold mt-auto">Explore &rarr;</span>
          </Link>
        ))}
      </div>
    </section>

    {/* KPIs */}
    <section className="mt-auto bg-gradient-to-r from-black via-black to-[#E6007A99] py-14">
      <div className="flex flex-col md:flex-row justify-center gap-14 max-w-5xl mx-auto px-4">
        {KPIS.map((kpi, i) => (
          <div key={i} className="text-center flex-1">
            <div className="text-3xl md:text-4xl font-bold text-[#FFC439]">{kpi.value}</div>
            <div className="text-white text-lg mt-1">{kpi.label}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default LandingPage;
