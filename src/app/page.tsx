
import NavBar from "@/components/data-table/navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Registration() {


  return (

    <div className="flex flex-col min-h-screen bg-green-50">
      <NavBar />
      <main className="container mx-auto py-12 px-2">
        <section className="border rounded-lg h-[400px]">
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex flex-col items-center justify-center px-4">
              <div className="max-w-[600px] text-center space-y-4">
                <h1 className="bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-b from-white/80 to-feuGold text-6xl md:text-8xl font-black">weCare.</h1>
                <h3 className="bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-b from-white/80 to-feuGold text-xl md:text-4xl font-medium">Centralized platform for external resources beyond the campus.</h3>
                <Button className="bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-b from-white/80 to-feuGold p-5 font-bold md:text-xl">
                  <Link href="/registration">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </BackgroundGradientAnimation>
        </section>
        <section className="flex flex-col gap-4 py-12">
          <h1 className="text-3xl md:text-5xl font-bold text-feuGreen">Innovate and Dominate.</h1>
          <h3 className="text-lg md:text-2xl">
            Looking for the best resources about a certain programming langue, or a specific subject can be taxing. weCare saves you the trouble by
            proving you materials that will help you in your academic career and the development of your long-term skills.
          </h3>
        </section>

        <section className="grid md:grid-cols-4 grid-cols-2 py-12 gap-6">
          <div className="col-span-2 flex flex-1">
            <Card className="text-feuGold bg-feuGreen drop-shadow-md">
              <CardHeader>
                <CardTitle className="text-4xl md:text-6xl">
                  Compiled Free Resources.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl">
                  Resources from industry experts and developers.
                </h3>

              </CardContent>
            </Card>
          </div>

          <div className="col-span-2 flex flex-1">
            <Card className="text-feuGold bg-feuGreen drop-shadow-md">
              <CardHeader>
                <CardTitle className="text-4xl md:text-6xl">
                  Build Real-World Projects.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl">
                  Start building something meaningful.
                </h3>

              </CardContent>
            </Card>
          </div>
        </section>

        <section className="flex flex-col items-center gap-4 py-12">
          <h1 className="text-3xl md:text-5xl font-bold text-feuGreen">Learning Beyond the Campus.</h1>
          <h3 className="text-lg md:text-2xl">
            weCare's mission is to provide you supplementary tools and resources that comes from industry experts and real-world developers.
            Going outside the box is the path to true learning.
          </h3>
        </section>
      </main>
    </div>

  );
}
