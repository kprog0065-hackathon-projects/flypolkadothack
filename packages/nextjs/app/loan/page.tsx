"use client";

import Image from "next/image";

const DUMMY_ASSETS = [
  {
    name: "Louis Vuitton Capucines MM Bag - Red, 2023",
    image: "/nfts/bags1.png",
    ownedFractions: 30,
    totalFractions: 200,
    estCollateralValueFly: 1000,
    interest: "8% APR",
    maxLoanTerms: "Up to 60 days",
  },
  {
    name: "Gucci Dionysus GG Supreme Bag - Beige, 2023",
    image: "/nfts/bags2.png",
    ownedFractions: 15,
    totalFractions: 125,
    estCollateralValueFly: 500,
    interest: "7% APR",
    maxLoanTerms: "Up to 30 days",
  },
  {
    name: "Jimmy Choo Diamond Trail Sneakers - White & Gold, 2023",
    image: "/nfts/shoe1.png",
    ownedFractions: 22,
    totalFractions: 80,
    estCollateralValueFly: 400,
    interest: "8.5% APR",
    maxLoanTerms: "Up to 45 days",
  },
];

export default function NftLoanCollateralPage() {
  return (
    <section className="min-h-screen bg-black px-8 py-16 pt-20">
      <h2 className="text-4xl font-bold text-[#FFC439] mb-10 text-center border-b-2 border-[#FFC439] pb-4 tracking-wide">
        Use Your Fractional NFT as Loan Collateral (FLY only)
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {DUMMY_ASSETS.map((asset, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-2xl w-[350px] flex flex-col shadow-2xl border border-[#FFC439] items-center p-7"
            style={{ minHeight: 470 }}
          >
            <div className="bg-white rounded-xl flex items-center justify-center mb-5 shadow-lg aspect-[6/5] w-[200px] overflow-hidden border border-[#FFC439]">
              <Image
                src={asset.image}
                alt={asset.name}
                width={170}
                height={130}
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="font-bold text-[#FFC439] text-base text-center mb-2">{asset.name}</div>
            <div className="mb-2 text-[0.98rem] text-gray-200 text-center">
              Ownership: <span className="text-[#FFC439] font-bold">{asset.ownedFractions}</span> /
              <span className="ml-1">{asset.totalFractions} fractions</span>
            </div>
            <div className="mb-2 text-[0.97rem] text-[#FFC439]">
              Est. Collateral Value: <span className="font-bold text-[#E6007A]">{asset.estCollateralValueFly} FLY</span>
            </div>
            <div className="mb-2 text-sm text-[#FFC439]">
              Interest: <span className="text-gray-300">{asset.interest}</span>
              <br />
              Terms: <span className="text-gray-300">{asset.maxLoanTerms}</span>
            </div>
            <button className="mt-3 px-8 py-3 bg-gradient-to-r from-[#FFC439] to-[#E6007A] text-black font-bold rounded-lg text-lg shadow transition hover:opacity-95 w-full">
              Use as Collateral & Get Loan
            </button>
          </div>
        ))}
      </div>
      <div className="max-w-xl mx-auto text-center text-sm text-gray-400 mt-16">
        * Dummy UI only. Here you could connect your wallet, fetch live fractions, calculate live loan-to-value (LTV),
        and trigger the collateral/loan smart contract with FLY token payout.
      </div>
    </section>
  );
}
