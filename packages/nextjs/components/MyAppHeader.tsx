import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function MyAppHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-[#FFC439] py-4 flex items-center justify-between border-b border-[#FFC439] relative">
      {/* Brand/Logo */}
      <div className="ml-6 flex items-center gap-2">
        <Link href="/">
          <span className="font-bold text-2xl cursor-pointer">Fly</span>
        </Link>
      </div>

      {/* Navigation: absolutely centered */}
      <nav className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8 text-lg">
        <Link href="/marketplace" className="hover:text-[#E6007A] transition-colors font-medium">
          RWA Marketplace
        </Link>
        <Link href="/shopluxury" className="hover:text-[#E6007A] transition-colors font-medium">
          Shop Luxury Items
        </Link>
        <Link href="/discoverfashion" className="hover:text-[#E6007A] transition-colors font-medium">
          Discover Fashion Talent
        </Link>
        <Link href="/loan" className="hover:text-[#E6007A] transition-colors font-medium">
          Loan
        </Link>
      </nav>

      {/* Wallet Connect Button */}
      <div className="mr-6 flex items-center gap-4">
        <ConnectButton />
      </div>
    </header>
  );
}
