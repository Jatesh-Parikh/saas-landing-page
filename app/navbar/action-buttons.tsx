import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col items-start space-y-4 w-full text-lg text-black mt-10">
                  <Link href="/">Sign in</Link>
                  <Link href="#getstarted">Get Started</Link>
                  <Link href="#features">Features</Link>
                  <Link href="#pricing">Pricing</Link>
                  <Link href="#contact">Contact</Link>
                  <Link href="#about">About</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md" variant="ghost">
          Sign in
        </Button>
        <Button className="text-md bg-blue-500">Get Started</Button>
      </div>
    </div>
  );
};

export default ActionButtons;
