"use client";

import { useState } from "react";
import Image from "next/image";

// Placeholder for three designer submissions (replace with real data)
const designs = [
  {
    id: 2401,
    image: "/discover/flowingbead.png",
    designer: {
      name: "Jade Chen",
      studio: "Sustainable Couture, Shanghai",
      avatar: "",
    },
    category: "Evening Wear",
    description: "An elegant evening gown with intricate beadwork and flowing silhouette",
    rates: 1247,
  },
  {
    id: 2402,
    image: "/discover/satinemrald.png",
    designer: {
      name: "Marco Baretto",
      studio: "Modern Formalwear, Milan",
      avatar: "/assets/designers/marco.jpg",
    },
    category: "Formal",
    description: "Satin emerald dress with sculptural lines and techno-fabric accents",
    rates: 823,
  },
  {
    id: 2403,
    image: "/discover/redvintage.png",
    designer: {
      name: "Alyssa Park",
      studio: "Red Carpet Designs, Los Angeles",
      avatar: "/assets/designers/alyssa.jpg",
    },
    category: "Cocktail",
    description: "Red cocktail dress inspired by Hollywood vintage glamour",
    rates: 1048,
  },
  {
    id: 2404, // Unique id!
    image: "/discover/flowingdress.png",
    designer: {
      name: "Nya Lopez",
      studio: "Latina Found Studio, Toronto",
      avatar: "/assets/designers/alyssa.jpg",
    },
    category: "Semi-Formal",
    description: "Orange and Purple dress inspired by Latin dance",
    rates: 1048,
  },
];

export default function DiscoveryPage() {
  const [index, setIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const design = designs[index];

  return (
    <section className="min-h-screen bg-black py-10 px-4 flex flex-col md:flex-row gap-6 pt-15">
      {/* Main voting panel (expanded) */}
      <div className="flex-[2] mx-auto">
        <h1 className="text-3xl font-bold text-[#FFC439] mb-2">Rate New Designers</h1>
        <p className="mb-6 text-gray-300">Shape the future of fashion and earn rewards for your predictions</p>

        {/* Progress bar */}
        <div className="bg-[#181818] p-3 rounded-xl mb-6">
          <div className="flex justify-between items-center mb-1 text-white text-sm font-medium">
            <span>Voting Progress</span>
            <span>
              {index + 1} of {designs.length}
            </span>
          </div>
          <div className="w-full h-2 bg-[#353535] rounded">
            <div
              className="h-2 rounded bg-gradient-to-r from-[#FFC439] to-[#E6007A]"
              style={{ width: `${((index + 1) / designs.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Design Card */}
        <div className="bg-[#181818] rounded-2xl shadow-lg overflow-hidden mb-4">
          <div className="relative">
            {/* Top badges */}
            <div className="absolute top-4 left-4 bg-[#353535] text-white rounded-full px-3 py-1 text-xs">
              {design.category}
            </div>
            <div className="absolute top-4 right-4 bg-[#353535] text-white rounded-full px-3 py-1 text-xs">
              {design.rates} rates
            </div>
            {/* Side navigation controls (desktop) */}
            <button
              onClick={() => setIndex(Math.max(index - 1, 0))}
              disabled={index === 0}
              className={`hidden md:flex items-center justify-center absolute top-1/2 left-2 -translate-y-1/2 py-2 px-3 rounded-lg font-bold z-10 ${index === 0 ? "bg-[#353535] text-gray-600" : "bg-[#E6007A] text-white hover:bg-pink-800"}`}
              aria-label="Previous design"
            >
              Prev
            </button>
            <button
              onClick={() => setIndex(Math.min(index + 1, designs.length - 1))}
              disabled={index === designs.length - 1}
              className={`hidden md:flex items-center justify-center absolute top-1/2 right-2 -translate-y-1/2 py-2 px-3 rounded-lg font-bold z-10 ${index === designs.length - 1 ? "bg-[#353535] text-gray-600" : "bg-[#FFC439] text-black hover:bg-yellow-500"}`}
              aria-label="Next design"
            >
              Next
            </button>
            {/* Image */}
            <div className="flex items-center justify-center bg-[#242424]" style={{ height: "min(80vw, 700px)" }}>
              <Image
                src={design.image}
                alt="Designer submission"
                width={800}
                height={700}
                className="w-full h-[480px] md:h-[700px] object-contain bg-[#242424]"
              />
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-2">
              {design.designer.avatar && (
                <Image
                  src={design.designer.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#E6007A]"
                />
              )}
              <div>
                <div className="text-white font-semibold">{design.designer.name}</div>
                <div className="text-gray-400 text-xs">{design.designer.studio}</div>
              </div>
            </div>
            <h3 className="text-white text-lg font-bold mb-2">Design #{design.id}</h3>
            <p className="text-gray-300 mb-2">{design.description}</p>
            <div className="font-medium mb-2 text-white">Rate this design (1-5 stars):</div>
            {/* Star rating */}
            <div className="flex gap-2 mb-3">
              {[1, 2, 3, 4, 5].map(i => (
                <button key={i} onClick={() => setRating(i)}>
                  <span className={`text-2xl ${rating >= i ? "text-[#FFC439]" : "text-gray-600"}`}>★</span>
                </button>
              ))}
            </div>
            {/* Comment box */}
            <textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              className="w-full bg-[#232323] p-3 rounded-xl text-white mb-4"
              rows={2}
              placeholder="Leave your feedback…"
            />
            <div className="flex gap-4 mb-4">
              <button className="bg-gradient-to-r from-[#FFC439] to-[#E6007A] text-black font-bold py-2 px-6 rounded-lg hover:opacity-80 transition">
                Submit Rating
              </button>
              <button className="bg-[#E6007A] text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-800 transition">
                Flag
              </button>
            </div>
            {/* Bottom navigation controls (mobile only) */}
            <div className="flex justify-between md:hidden">
              <button
                onClick={() => setIndex(Math.max(index - 1, 0))}
                disabled={index === 0}
                className={`py-1 px-4 rounded-lg font-bold ${index === 0 ? "bg-[#353535] text-gray-600" : "bg-[#E6007A] text-white hover:bg-pink-800"}`}
              >
                Prev
              </button>
              <button
                onClick={() => setIndex(Math.min(index + 1, designs.length - 1))}
                disabled={index === designs.length - 1}
                className={`py-1 px-4 rounded-lg font-bold ${index === designs.length - 1 ? "bg-[#353535] text-gray-600" : "bg-[#FFC439] text-black hover:bg-yellow-500"}`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar: voting stats/tips, now smaller */}
      <div className="flex-1 w-full max-w-sm ml-auto">
        <div className="bg-[#181818] rounded-xl p-5 mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Your Voting Stats</h2>
          <div className="text-[#FFC439] text-2xl font-bold mb-2">156</div>
          <div className="text-white text-sm mb-3">Designs Voted</div>
          <div className="text-[#2bd282] text-xl font-bold mb-2">12</div>
          <div className="text-white text-sm mb-3">Day Streak</div>
          <div className="text-[#6490ff] text-xl font-bold mb-2">78%</div>
          <div className="text-white text-sm mb-3">Accuracy Rate</div>
          <div className="text-[#FFC439] text-2xl font-bold mb-2">1240</div>
          <div className="text-white text-sm">FLY Tokens Earned</div>
        </div>
        <div className="bg-[#181818] rounded-xl p-5">
          <h2 className="font-bold text-white text-lg mb-3">Voting Tips</h2>
          <ul>
            <li className="mb-2">
              <span className="text-[#FFC439] mr-2">●</span>Consider design innovation and market appeal
            </li>
            <li className="mb-2">
              <span className="text-[#2bd282] mr-2">●</span>Vote consistently to improve your accuracy
            </li>
            <li>
              <span className="text-white mr-2">●</span>Top predictors earn bonus rewards
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
