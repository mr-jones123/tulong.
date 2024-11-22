import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-feuGreen text-feuGold">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-auto p-3 ">
            <Link
              href="/"
              className="flex-shrink-0 flex justify-center items-center"
            >
              <Image
                src="/weCare.jpg"
                alt="Brand Logo"
                width={100}
                height={100}
                className="w-auto h-20"
              />
              <h1 className="text-4xl font-black tracking-tighter">weCare.</h1>
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="hover:underline">
                Features
              </Link>
              <Link href="/certificates" className="hover:underline">
                About weCare.
              </Link>
              <Link href="/projects" className="hover:underline">
                ACM
              </Link>
              <Link href="/blogs" className="hover:underline">
                The Developer
              </Link>
            </nav>
            <Button className="md:hidden ml-4 bg-transparent border border-none rounded-none hover:bg-transparent" onClick={toggleMenu}>
              {isMenuOpen ? <X  size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-4 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:underline"
              >
                Home
              </Link>
              <Link
                href="/certificates"
                className="block px-3 py-2 rounded-md hover:underline"
              >
                Certificates
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 rounded-md hover:underline"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="block px-3 py-2 rounded-md hover:underline"
              >
                Blogs
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
