
import NavBar from "@/components/navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogTitle
} from "@/components/ui/dialog";

export default function Registration() {


  return (

    <div className="flex flex-col min-h-screen bg-green-50">
      <NavBar />
      <main className="container mx-auto py-12 px-2">
        <section className="border rounded-lg h-[400px]">
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex flex-col items-center justify-center px-4">
              <div className="max-w-[600px] text-center space-y-4">
                <h1 className="bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-b from-white/80 to-feuGold text-4xl md:text-8xl font-black">weCare.</h1>
                <h3 className="bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-b from-white/80 to-feuGold text-xl md:text-4xl font-medium">Centralized platform for external resources beyond the campus.</h3>
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

        <section className="grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 py-12 gap-6">
          <div className="col-span-2 flex flex-1">

            <Dialog>
              <DialogTrigger asChild>
                <Card className="text-feuGold bg-feuGreen drop-shadow-md">
                  <CardHeader>
                    <CardTitle className="text-4xl md:text-6xl">
                      Compiled Free Resources.
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-2xl">
                      Put together the best high-quality free resources that is tailored to your year level!
                    </h3>
          
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-4xl text-feuGold ">Compiled Free Resources.</DialogTitle>
                </DialogHeader>
                <p></p>
              </DialogContent>
            </Dialog>

          </div>

          <div className="col-span-2 flex flex-1">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="text-feuGold bg-feuGreen drop-shadow-md">
                  <CardHeader>
                    <CardTitle className="text-4xl md:text-6xl">
                      Build Real-World Projects.
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-2xl">
                      Put together the best high-quality free online courses that is tailored to your year level!
                    </h3>
                   
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl">More Information</DialogTitle>
                  <DialogDescription>Additional details about this card.</DialogDescription>
                </DialogHeader>
                <p>Here you can add more detailed information about the card content.</p>
              </DialogContent>
            </Dialog>
          </div>

          <div className="col-span-2 flex flex-1">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="text-feuGold bg-feuGreen drop-shadow-md">
                  <CardHeader>
                    <CardTitle className="text-4xl md:text-6xl">Practice your skills.</CardTitle>
                  </CardHeader>
                  <CardContent>
                  <h3 className="text-2xl">
                      Sharpen your skills and hone your problem-solving techniques
                       with these challenging programming problems. 
                  </h3>
                
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>More Information</DialogTitle>
                  <DialogDescription>Additional details about this card.</DialogDescription>
                </DialogHeader>
                <p>Here you can add more detailed information about the card content.</p>
              </DialogContent>
            </Dialog>
          </div>
          
        </section>

        <section className="flex flex-col items-center gap-4 py-12">
          <h1 className="text-3xl md:text-5xl font-bold text-feuGreen">Learning Beyond the Campus.</h1>
            <h3 className="text-lg md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus vitae a. Eos eligendi laudantium facilis quo quia, aut quos a itaque, voluptatibus ipsa quam odio recusandae inventore quasi! Deleniti.
            </h3>
        </section>
      </main>
    </div>

  );
}
