"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/navbar";
import Link from "next/link";
import { useEffect } from "react";
export default function Registration() {
  useEffect(() => {
    document.title = "weCare.";
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 w-full flex flex-col justify-center items-center p-6">
        <h1 className="text-5xl font-black mb-12 text-feuGreen bg-feuGold">What is your course?</h1>
        <div className="flex justify-center items-stretch space-x-12">
          <Card className="overflow-hidden w-[350px] flex flex-col">
            <div className="relative w-full h-[350px]">
              <Image
                src="/computer-science.jpg"
                alt="Computer Science"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-feuGreen font-extrabold text-2xl">
                Computer Science
              </CardTitle>
              <CardDescription>
                Specialization in SWE, AI, and DS.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild
              className="w-full bg-feuGold text-feuGreen hover:bg-feuGreen hover:text-feuGold">
                <Link href="/computer-science">
                  I am an CS Student
                </Link>    
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden w-[350px] flex flex-col">
            <div className="relative w-full h-[350px]">
              <Image
                src="/IT.jpg"
                alt="Information Technology"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-feuGreen font-extrabold text-2xl">
                Information Technology
              </CardTitle>
              <CardDescription>
                Specialization in WMA, CC, and MMA.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild
              className="w-full bg-feuGold text-feuGreen hover:bg-feuGreen hover:text-feuGold">
                <Link href="/information-technology">
                  I am an I.T Student
                </Link>    
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}