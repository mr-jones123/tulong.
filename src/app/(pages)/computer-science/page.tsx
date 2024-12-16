"use client";
import NavBar from "@/components/data-table/navbar";
import JSONResources from "../../../../public/data/resources.json";
import { ResourceItem, columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/data-table";

export default function ComputerScience() {
  const resources: ResourceItem[] = JSONResources;
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <NavBar />
      <main className="container mx-auto py-16 px-12">
        <DataTable columns={columns} data={resources} />
      </main>
    </div>
  );
}
