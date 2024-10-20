"use client";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, GraduationCap, Menu, X, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "@/components/navbar";
export default function Registration() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    document.title = "weCare.";
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <NavBar />
      <main className="flex-1">
        {/* Title */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-feuGreen">
                  we<span className="text-yellow-600">Care</span> for you.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl font-regular">
                  This website provides everything you need to boost your
                  academic career in Computer Science and Information
                  Technology.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-feuGold text-feuGreen hover:bg-feuGreen hover:text-feuGold">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-green-800 text-feuGreen hover:bg-green-100"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Features */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-feuGreen">
              What we provide
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-green-200 p-4 rounded-lg border hover:border-slate-300 hover:shadow-md hover:translate-y-[-10px] transition-transform duration-300">
                <BookOpen className="h-12 w-12 text-feuGold" />
                <h3 className="text-2xl font-bold text-feuGreen">
                  Study Materials
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Free online courses, PDFs, and certifications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-green-200 p-4 rounded-lg border  hover:border-slate-300 hover:shadow-md hover:translate-y-[-10px] transition-transform duration-300">
                <Code className="h-12 w-12 text-feuGold" />
                <h3 className="text-2xl font-bold text-feuGreen">
                  Coding Resources
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Find coding tutorials, solve problems, and build projects.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-green-200 p-4 rounded-lg border  hover:border-slate-300 hover:shadow-md hover:translate-y-[-10px] transition-transform duration-300">
                <GraduationCap className="h-12 w-12 text-feuGold" />
                <h3 className="text-2xl  font-bold text-feuGreen">
                  iCare Support
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Get in-touch with iCare, FEU Tech's educational resource.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-green-200 p-4 rounded-lg border col-start-2 col-end-2  hover:border-slate-300 hover:shadow-md hover:translate-y-[-10px] transition-transform duration-300">
                <Globe className="h-12 w-12 text-feuGold" />
                <h3 className="text-2xl  font-bold text-feuGreen">
                  External Events
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Meet industry professionals through ACM Beyond the Campus
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-feuGreen">
                  Join Our Community
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl">
                  Stay updated with the latest resources and connect with fellow
                  students.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-feuGreen placeholder-green-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-yellow-500 text-green-900 hover:bg-yellow-600">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-600">
                  By subscribing, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-feuGreen">
        <p className="text-xs text-feuGold">
          © 2024 weCare. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-feuGold"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-feuGold"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
