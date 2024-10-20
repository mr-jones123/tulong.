import { useState } from "react";
import { Button } from "@/components/ui/button";
import {  GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";

export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    return (
              <header className="px-4 lg:px-6 h-16 flex items-center bg-feuGreen">
                <Link className="flex items-center justify-center" href="#">
                  <GraduationCap className="h-6 w-6 text-feuGold" />
                  <span className="ml-2 text-2xl font-bold text-feuGold">weCare.</span>
                </Link>
                <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
                  <Link className="text-sm font-medium hover:underline text-feuGold" href="#">
                    Features
                  </Link>
                  <Link className="text-sm font-medium hover:underline text-feuGold" href="#">
                    About weCare
                  </Link>
                  <Link className="text-sm font-medium hover:underline text-feuGold" href="#">
                    About ACM
                  </Link>
                </nav>
                <Button
                  className="ml-auto md:hidden"
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6 text-feuGold" />
                  ) : (
                    <Menu className="h-6 w-6 text-feuGold" />
                  )}
                </Button>
                  {/* Conditional Rendering*/}
              {isMenuOpen && (
                <div className="md:hidden text-feuGreen py-2">
                  <nav className="flex flex-col items-center gap-2">
                    <Link className="text-sm font-medium hover:underline text-feuGold" href="#">
                      Features
                    </Link>
                    <Link className="text-sm font-medium hover:underline text-feuGold" href="#">
                    About weCare
                    </Link>
                    <Link className="text-sm font-medium hover:underline text-feuGold" href="#">
                    About ACM
                    </Link>
                  </nav>
                </div>
              )}
              </header>
            
    );
}