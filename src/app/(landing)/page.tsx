"use client";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, GraduationCap, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import NavBar from "@/components/navbar";

export default function Registration() {
  useEffect(() => {
    document.title = "weCare.";
  }, []);
  return (
  
      <div className="flex flex-col min-h-screen bg-green-50">
        <NavBar />
        <main className="flex-1">
          {/* Title */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-feuGreen">
                    we<span className="text-yellow-600">Care</span> for you.
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl md:leading-loose">
                    A centralized platform for external resources to boost your
                    academic career in{" "}
                    <span className=" font-medium bg-feuGold text-feuGreen px-1">
                      Computer Science
                    </span>{" "}
                    and{" "}
                    <span className="font-medium bg-feuGold text-feuGreen px-1">
                      Information Technology.{" "}
                    </span>
                  </p>
                </div>
                <div className="space-x-4">
                  <Button
                    asChild
                    className="bg-feuGold text-feuGreen hover:bg-feuGreen hover:text-feuGold"
                  >
                    <Link href="/registration">Get Started</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-green-800 text-feuGreen hover:bg-green-100"
                  >
                    <Link href="/about-weCare">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          {/* Features */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
            <div className="container mx-auto px-4 md:px-6">
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
          {/* Contribution */}

          <section className="w-full py-8 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-feuGreen">
                    Contribute Freely
                  </h2>
                  <p className="max-w-[700px] leading-loose">
                    <span className="font-bold text-lg text-feuGreen bg-feuGold px-1">
                      weCare.
                    </span>{" "}
                    is an open-source project tailored for aspiring web
                    developers in FEU Tech.
                    <span className="font-bold text-lg text-feuGreen bg-feuGold px-1">
                      Anyone can be a contributor,
                    </span>
                    whether you are an experienced programmer or a beginner one.{" "}
                  </p>
                </div>
                <Button className="bg-feuGold hover:bg-feuGreen text-feuGreen hover:text-feuGold flex">
                  <Link
                    href="https://github.com/mr-jones123/weCare..git"
                    className="flex gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    GitHub
                  </Link>
                </Button>
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
