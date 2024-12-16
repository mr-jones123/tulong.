"use client";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import WebDevelopment from "./webDevelopment";
import Deployment from "./deployment";
import YouTube from "./youtuber";
import OnlineCourse from "./onlineCourse";
import AIPlatforms from "./aiTool";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Button } from "../ui/button";
export type ResourceItem = {
  uniqueCode: string;
  title: string;
  url: string;
  category: string[];
  about: string;
};

export const columns: ColumnDef<ResourceItem>[] = [
  {
    accessorKey: "uniqueCode",
    header: "Unique Code",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "url",
    header: "URL",
    cell: ({ row }) => {
      const link = row.getValue("url") as string;
      return <Link className="text-feuGreen underline" href = {link}> {link} </Link>
    }
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const categories = row.getValue("category") as string[];
      return categories.map((category, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger asChild>
            <Button className="mb-1 p-2 bg-feuGreen text-feuGold text-md hover:bg-feuGold hover:text-feuGreen" key={index}>
              {category}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-75">
            {category === "Web Development" ? (
              <WebDevelopment />
            ) : category === "Deployment" ? (
              <Deployment/>
            ) : category === "Online Course" ? (
              <OnlineCourse/>
            ) : category === "YouTuber" ? (
              <YouTube/>
            ) : category === "AI" ? (
              <AIPlatforms/>
            ) : (
              <p>No Category Found</p>
            )}
          </HoverCardContent>
        </HoverCard>
      ));
    },
  },
  {
    accessorKey: "about",
    header: "About",
  },
];
