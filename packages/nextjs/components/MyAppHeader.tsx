import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function MyAppHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-[#FFC439] p-4 flex items-center justify-between border-b border-[#FFC439]">
      {/* Brand/Logo */}
      <div className="flex items-center gap-2">
        {/* Make "Fly" clickable and link to homepage */}
        <Link href="/">
          <span className="font-bold text-2xl cursor-pointer">Fly</span>
        </Link>
      </div>
      {/* Navigation */}
      <nav className="flex gap-8 text-lg">
        <Link href="/marketplace" className="hover:text-[#E6007A] transition-colors font-medium">
          RWA Marketplace
        </Link>
        <Link href="/shopluxury" className="hover:text-[#E6007A] transition-colors font-medium">
          Shop Luxury Items
        </Link>
        <Link href="/discoverfashion" className="hover:text-[#E6007A] transition-colors font-medium">
          Discover Fashion Talent
        </Link>
      </nav>
      {/* Wallet Connect Button */}
      <nav className="flex items-center gap-4">
        <ConnectButton />
      </nav>
    </header>
  );
}
