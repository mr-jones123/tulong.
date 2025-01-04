"use client";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import TimelineComponent from "@/components/ui/timelineComponent";
import HeroParallaxComponent from "@/components/ui/heroParallaxComponent";
import { Button } from "@/components/ui/button";
import Macbook from "@/components/ui/macbook";
import Link from "next/link";
import { FloatingDock } from "@/components/ui/floating-dock";
import { items } from "@/components/ui/items";
import DialogVisit from "@/components/ui/dialog-visit";
import Image from "next/image";
export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <DialogVisit/>
      <div className="fixed inset-0 w-full h-full z-0">
        <StarsBackground />
        <ShootingStars />
      </div>
      <main className="container mx-auto px-2">
        <Macbook />
        <section className="flex flex-col items-center justify-center mt-56">
          <h1 className="md:text-6xl text-feuGold font-black text-center">
            Meet <span className="italic">aral.</span>
          </h1>
          <p className="text-feuGold text-center md:text-2xl mt-4 semi-bold">
            <span className="font-bold">aral.</span> offers a centralized hub for Computer Science and IT
            students, providing easy access to all the resources, tools, and
            references needed to excel in your academic journey. Search on the
            internet no more.
          </p>
        </section>
        <TimelineComponent />
        <section className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-medium text-feuGold">
                  aral. helps you <br />
                  <span className="text-4xl md:text-8xl font-black mt-1 leading-none">
                    Build Long-term Skills
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/study.png`}
              alt="Discrete Math"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </section>
        <HeroParallaxComponent />
        <section className="w-full py-40">
          <div className="container md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h1 className="text-8xl font-black tracking-tighter text-feuGold">
                Tara, mag-Aral na!
              </h1>
              <h3 className="text-xl font-light italic tracking-tighter text-feuGold">Let's go and study</h3>
              <Button
                onClick={() => console.log("Button clicked!")}
                className="z-20 text-lg px-8 bg-feuGold text-feuGreen font-semibold hover:bg-feuGold/90 transition-colors"
              >
                <Link href="/resources">Take me there!</Link>
              </Button>
            </div>
          </div>
        </section>
        <div className="w-full flex justify-center">
          <FloatingDock
            items={items}
            desktopClassName="fixed bottom-0 mb-9 z-20"
          />
        </div>
      </main>
    </div>
  );
}
