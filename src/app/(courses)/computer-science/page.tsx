"use client";
import NavBar from "@/components/navbar";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";


export default function CS() {
  useEffect(() => {
    document.title = "weCare.";
  }, []);
interface Resource {
    uniqueCode: number,
    name: string,
    link: string,
    category: string[],
    specialization: string[]
};

  const resources: Resource[] = [
    {
      uniqueCode: 1,
      name: "Learn C++ Programming for Beginners - Free 31-hour course",
      link : "https://www.freecodecamp.org/news/learn-c-with-free-31-hour-course/",
      category: ["YouTube Video", "Online Course"],
      specialization : ["Software Engineering", "Data Science"]     

    },
    {
      uniqueCode: 2,
      name: "Codeacademy - Learn C++",
      link : "https://www.codecademy.com/learn/learn-c-plus-plus",
      category: ["Online Course"],
      specialization : ["Software Engineering", "Data Science"]    
    },
    {
      uniqueCode: 3,
      name: "Learn C++ ",
      link : "https://www.codecademy.com/learn/learn-c-plus-plus",
      category: ["Website"],
      specialization : ["Software Engineering", "Data Science"]    
    },  
  ]
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <div className="container py-12 mx-auto flex flex-col  space-y-12">
          <div className="w-full flex flex-col items-center">
              <h1 className="text-6xl font-black bg-feuGold text-feuGreen px-4">
                Computer Science
              </h1>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-6xl text-feuGreen font-extrabold">
                  First Year
                </AccordionTrigger>
                <AccordionContent className="font-medium text-md">
                  C++ will be your main language all throughout your first year in FEU Tech. You will learn rudimentary programming concepts.
                  as well as foundations of the C++ language. You may expect to develop a console-based applications with your classmates. First year will
                  be a great experience to kick-start your career in the field of Computer Science. 
                </AccordionContent>
                <AccordionContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Unique Code</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Link</TableHead>
                                <TableHead>Specialization</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {resources.map((resource) =>
                              <TableRow key={resource.uniqueCode}>
                                <TableCell>{resource.uniqueCode}</TableCell>
                                <TableCell>{resource.name}</TableCell>
                                <TableCell className="space-x-3 text-nowrap">
                                  {resource.category.map((cat, index) =>
                                    <Badge key={index} className="bg-feuGold text-feuGreen hover:bg-feuGreen hover:text-feuGold">{cat}</Badge>
                                  )}
                                </TableCell>
                                <TableCell className="overflow-hidden text-blue-700 underline">
                                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                    {resource.link}
                                  </a>
                                  </TableCell>
                                  <TableCell className="space-x-3 text-nowrap">
                                    {resource.specialization.map((cat, index) =>
                                      <Badge key={index} className="bg-feuGold text-feuGreen hover:bg-feuGreen hover:text-feuGold">{cat}</Badge>
                                    )}
                                  </TableCell>
                              </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={5} className="font-light">Remember, the best way to learn is by doing!</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-6xl text-feuGreen font-extrabold">
                  Second Year
                </AccordionTrigger>
                <AccordionContent>Second Year focuses more on the theoretical aspect of Computer Science.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-6xl text-feuGreen font-extrabold">
                  Third Year
                </AccordionTrigger>
                <AccordionContent>Hello</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
