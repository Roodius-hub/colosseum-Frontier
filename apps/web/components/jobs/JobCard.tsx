"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JobCard(job : any) {
    const router = useRouter();

  return (
    <Card className="p-4 hover:shadow-lg transition">
      <CardContent className="space-y-2">
        <h2 className="text-lg font-semibold">{job.title}</h2>

        <p className="text-sm text-gray-500">
          {job.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="font-bold text-green-600">
            ₹{job.budget}
          </span>

          <Button onClick={(e) => {
            e.stopPropagation();

            router.push(`apply/${job._id}`)
          }}>Apply</Button>
        </div>
      </CardContent>
    </Card>
  );
}