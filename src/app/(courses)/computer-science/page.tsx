"use client";
import NavBar from "@/components/navbar";
import Image from "next/image";
import Link from 'next/link';
import firstYearLinks from "../../../../data/firstYearLinks.json"
import secondYearLinks from "../../../../data/secondYearLinks.json"
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";


import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ComputerScience() {

type link = {
  uniqueCode : number,
  name : string,
  platform : string[],
  link : string,
  subject: string[]
}

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <div className="container py-6 md:py-12 mx-auto flex flex-col space-y-6 md:space-y-12">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl mb-7 md:text-4xl lg:text-6xl font-black bg-feuGold text-feuGreen px-4 py-2 text-center">
              Computer Science
            </h1>
            <h3 className="mb-7 text-3xl font-semibold text-feuGreen">
              But first, equip yourself with these!
            </h3>
            <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3  ">
              <Link href="/learn-ai">
                <Card className="flex items-center bg-[#EFEFEF] p-3">
                  <Image
                    src="/ChatGPT_Logo.png"
                    alt="ChatGPT"
                    width={50}
                    height={100}
                    className="w-auto ml-3 h-10"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg text-feuGreen font-bold md:text-2xl">How to use AI to learn fast.</CardTitle>
                    <CardDescription>
                      Learn the secret on unleashing the power of AI without
                      paying for a pro subscription!
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/github-starter-pack">
                <Card className="flex items-center bg-[#EFEFEF] p-1">
                  <Image
                    src="/GitHub_Logo.png"
                    alt="ChatGPT"
                    width={50}
                    height={100}
                    className="w-auto ml-3 h-10"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg text-feuGreen font-bold md:text-2xl">GitHub Student Developer Pack</CardTitle>
                    <CardDescription>
                      All Free: Notion Pro Plan, GitHub Copilot, $300 worth of
                      Microsoft Azure Cloud, $99 GitHub Certification Exam, and
                      MORE!
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/best-youtubers">
                <Card className="flex items-center bg-[#EFEFEF] p-3">
                  <Image
                    src="/Youtube_Logo.png"
                    alt="ChatGPT"
                    width={50}
                    height={100}
                    className="w-auto ml-3 h-10"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg text-feuGreen font-bold  md:text-2xl">The Best YouTubers</CardTitle>
                    <CardDescription>
                      GOATED YouTubers that you must subscribe to so that you can keep up with the latest tech trends!
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl md:text-4xl lg:text-6xl text-feuGreen font-extrabold">
                  First Year
                </AccordionTrigger>
                <AccordionContent className="font-medium text-sm md:text-lg">
                  C++ will be your main programming language throughout your
                  first year at FEU Tech. Youll learn basic programming and
                  computing concepts, along with the foundations of C++. Yo&apos;ll
                  also work on building console-based applications with your
                  classmates, which means that aside from coding, you&apos;ll get
                  experience collaborating with others. As a freshman,
                  familiarizing yourself with the best and latest technological
                  trends is crucial for building your skills in the long run.
                </AccordionContent>
                <AccordionContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="px-2 text-feuGreen font-extrabold md:px-4 ">
                            Unique Code
                          </TableHead>
                          <TableHead className="px-2 text-feuGreen font-extrabold md:px-4">
                            Name
                          </TableHead>
                          <TableHead className="px-2 text-feuGreen font-extrabold md:px-4">
                            Category
                          </TableHead>
                          <TableHead className="px-2 text-feuGreen font-extrabold md:px-4">
                            Link
                          </TableHead>
                          <TableHead className="px-2 text-feuGreen font-extrabold md:px-4">
                            Subject
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {firstYearLinks.map((resource : link) => (
                          <TableRow key={resource.uniqueCode}>
                            <TableCell className="px-2 md:px-4">
                              {resource.uniqueCode}
                            </TableCell>
                            <TableCell className="px-2 md:px-4">
                              {resource.name}
                            </TableCell>
                            <TableCell className="px-2 md:px-4 space-x-1 md:space-x-3 text-nowrap">
                              {resource.platform.map((cat, index) => (
                                <Badge
                                  key={index}
                                  className="bg-feuGold text-feuGreen hover:bg-feuGreen hover:text-feuGold text-xs md:text-sm"
                                >
                                  {cat}
                                </Badge>
                              ))}
                            </TableCell>
                            <TableCell className="px-2 md:px-4 overflow-hidden text-blue-700 underline">
                              <a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs md:text-sm"
                              >
                                {resource.link}
                              </a>
                            </TableCell>
                            <TableCell className="px-2 md:px-4 space-x-1 md:space-x-3 text-nowrap">
                              {resource.subject.map((cat, index) => (
                                <Badge
                                  key={index}
                                  className="bg-feuGold text-feuGreen hover:bg-feuGreen hover:text-feuGold text-xs md:text-sm"
                                >
                                  {cat}
                                </Badge>
                              ))}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell
                            colSpan={5}
                            className="font-light text-xs md:text-sm"
                          >
                            Remember, the best way to learn is by doing!
                          </TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl md:text-4xl lg:text-6xl text-feuGreen font-extrabold">
                  Second Year
                </AccordionTrigger>
                <AccordionContent className="font-medium text-sm md:text-lg">
                  This is the year where it is time to step-up your academic
                  level. This is where you will get to familiarize yourself with
                  a lot of technologies like PHP, Java, Cisco and SQL. With that
                  being said, you will learn how to create databases,
                  console-based application using the concept of Object-Oriented
                  Programming, connect computers and routers through the Cisco
                  Packet Tracer, build a website by writing PHP, build your
                  startups and more.
                  <br />
                  <br />
                  You will also delve deep into the theoretical aspects of
                  Computer Science such as Discrete Mathematics 1 & 2, Graph
                  Theory & Algorithms, and Automata Theory. These subjects
                  demand your ability to solve algorithmic problems.
                </AccordionContent>
                <AccordionContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="px-2 text-feuGreen font-extrabold md:px-4 ">
                            Unique Code
                          </TableHead>
                          <TableHead className="px-2 text-feuGreen font-extrabold md:px-4">
                            Name
                          </TableHead>
                          <TableHead className="px-2 text-feuGreen font-extrabold md:px-4">
                            Category
                          </TableHead>
                          <TableHead className="px-2 text-feuGreen font-extrabold md:px-4">
                            Link
                          </TableHead>
                          <TableHead className="px-2 text-feuGreen font-extrabold md:px-4">
                            Subject
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {secondYearLinks.map((resource) => (
                          <TableRow key={resource.uniqueCode}>
                            <TableCell className="px-2 md:px-4">
                              {resource.uniqueCode}
                            </TableCell>
                            <TableCell className="px-2 md:px-4">
                              {resource.name}
                            </TableCell>
                            <TableCell className="px-2 md:px-4 space-x-1 md:space-x-3 text-nowrap">
                              {resource.platform.map((cat, index) => (
                                <Badge
                                  key={index}
                                  className="bg-feuGold text-feuGreen hover:bg-feuGreen hover:text-feuGold text-xs md:text-sm"
                                >
                                  {cat}
                                </Badge>
                              ))}
                            </TableCell>
                            <TableCell className="px-2 md:px-4 overflow-hidden text-blue-700 underline">
                              <a
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs md:text-sm"
                              >
                                {resource.link}
                              </a>
                            </TableCell>
                            <TableCell className="px-2 md:px-4 space-x-1 md:space-x-3 text-nowrap">
                              {resource.subject.map((cat, index) => (
                                <Badge
                                  key={index}
                                  className="bg-feuGold text-feuGreen hover:bg-feuGreen hover:text-feuGold text-xs md:text-sm"
                                >
                                  {cat}
                                </Badge>
                              ))}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell
                            colSpan={5}
                            className="font-light text-xs md:text-sm"
                          >
                            Remember, the best way to learn is by doing!
                          </TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-2xl md:text-4xl lg:text-6xl text-feuGreen font-extrabold">
                  Third Year
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-md">
                  Coming soon...
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
