"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import JSONResources from "../../../../public/data/resources.json";
import { ResourceItem, columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { LinkPreview } from "@/components/ui/link-preview";
export default function Resources() {
  const resources: ResourceItem[] = JSONResources;
  const contributors = [
    {
      id: 1,
      name: "Alpha Romer Coma",
      designation: "AI Engineer",
      image: "/alpha.jpg"
    },
    {
      id: 2,
      name: "Justine Jude Pura",
      designation: "Computer Science Professor",
      image: "/jude.jpg"
    },
    {
      id: 3,
      name: "Justin Garcia",
      designation: "Software Engineer",
      image: "/justin.jpg"
    },
    {
      id: 4,
      name: "Leonard Ang",
      designation: "CEO of Stealth Startup",
      image: "/leonard.jpg"
    },
    {
      id: 5,
      name: "Xynil Jhed Lacap",
      designation: "Software Engineer",
      image: "/xy.jpg"
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
    <div className="flex flex-col md:flex-row w-full gap-4 justify-evenly p-4 md:py-16">
        <Card className="md:w-[600px] bg-feuGreen text-feuGold">
          <CardHeader>
            <CardTitle className="text-3xl">Featured Contributors</CardTitle>
            <CardDescription className="text-feuGold italic">Meet the contributors who have provided these valuable resources!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row ">
              <AnimatedTooltip items={contributors} />
            </div>
          </CardContent>
        </Card>
        <Card className="md:w-[600px] bg-feuGreen text-feuGold">
          <CardHeader>
            <CardTitle className="text-3xl">Before You Get Started</CardTitle>
            <CardDescription  className="text-feuGold italic">Make use of your student privilege!</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Make sure you check out the {" "}
              <LinkPreview url="https://education.github.com/pack" className="font-bold text-feuGold">
                GitHub Student Starter Pack
              </LinkPreview>{" "}
              and enjoy the benefits of using pro plans from different websites for free! Use your student email to sign up and get started.      
            </p>
          </CardContent>
        </Card>
      </div>
      <main className="container mx-auto py-16 px-12">
        <DataTable columns={columns} data={resources} />
      </main>
    </div>
  );
}
