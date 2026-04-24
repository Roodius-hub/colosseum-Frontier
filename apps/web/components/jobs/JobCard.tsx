"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JobCard(job : any) {
    const router = useRouter();

  return (
    <Card className="h-full bg-[#1a1a1a] rounded-xl ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0
  transition-all duration-300 hover:-translate-y-1  hover:shadow-[0_10px_40px_rgba(0,0,0,0.2),0_0_35px_rgba(30,208,171,0.25)]
">

  <CardContent className="h-full flex flex-col p-5">

    {/* Top */}
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-white line-clamp-1">
        {job.title}
      </h2>

      <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
        {job.description}
      </p>
    </div>

    {/* Bottom */}
    <div className="mt-auto flex justify-between items-center pt-6">
      <span className="font-semibold text-[#1ED0AB] text-sm">
        ₹{job.budget}
      </span>

      <Button
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/apply/${job._id}`);
        }}
        className="text-xs px-4 py-2 rounded-md bg-[#111] border border-[#2a2a2a] 
        text-gray-300 hover:bg-[#1f1f1f] hover:text-white transition"
      >
        Apply
      </Button>
    </div>

  </CardContent>
</Card>
  );
}