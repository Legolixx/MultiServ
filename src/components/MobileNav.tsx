import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Socials from "./Socials";
import Link from "next/link";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <div className="flex flex-row text-3xl text-primary font-bold start-1 tracking-[10px] gap-5">
              <Link href="/">MultiServ</Link>
            </div>
            <div className="flex flex-col gap-10 items-center space-x-4 text-primary">
              <Link href="/about">Como funciona</Link>
              <Button variant="default">Seja um profissional</Button>
            </div>
          </div>
          <Socials containerStyles="flex gap-x-4 text-primary" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
