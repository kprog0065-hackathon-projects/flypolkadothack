import { ReactNode } from "react";
import { Footer } from "~~/components/DebugFooter";
import { Header } from "~~/components/DebugHeader";

type Props = {
  children: ReactNode;
};

export default function DebugLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
