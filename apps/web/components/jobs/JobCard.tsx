"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JobCard(job : any) {
    const router = useRouter();

  return (
    <Card className="p-4 hover:shadow-lg transition bg-[#1C1C1C] border-none">
      <CardContent className="space-y-2">
        <h2 className="text-lg font-semibold">{job.title}</h2>

        <p className="text-sm text-gray-300">
          {job.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="font-bold text-green-500x">
            ₹{job.budget}
          </span>

          <Button onClick={(e) => {
            e.stopPropagation();

            router.push(`apply/${job._id}`)
          }} className="text-[#1ED0AB] hover:cursor-pointer text-sm hover:text-white flex items-center gap-2 px-4 py-2 rounded-lg bg-[#04312C] border border-[#2a2a2a] text-white hover:bg-[#222] transition">Apply</Button>
        </div>
      </CardContent>
    </Card>
  );
}