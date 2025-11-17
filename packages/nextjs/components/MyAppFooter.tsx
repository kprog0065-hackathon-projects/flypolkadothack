// components/MyAppFooter.tsx
export default function MyAppFooter() {
  return (
    <footer className="bg-black text-[#FFC439] p-4 text-center">
      &copy; {new Date().getFullYear()} Fly. All rights reserved.
    </footer>
  );
}
