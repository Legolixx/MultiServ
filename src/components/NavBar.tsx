import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThememToggle from "./ThememToggle";

interface NavProps {
  containerStyles?: string;
}

export default function Navbar({ containerStyles}: NavProps) {
  return (
    <nav className={`${containerStyles}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl text-primary font-bold start-1 tracking-[10px]">
          <Link href="/">MultiServ</Link>
        </div>

        <div className="flex items-center space-x-4 text-primary">
          <Link href="/about">Como funciona</Link>
          <Button variant="default">Seja um profissional</Button>
          <ThememToggle />
        </div>
      </div>
    </nav>
  );
}
