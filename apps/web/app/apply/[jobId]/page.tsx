"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { jobs } from "@/dummy/dummy";
import Applyform from "@/components/forms/ApplyForm";

export default function Apply(){


    return (
        <div>
            <Applyform title={jobs[0]?.title as string} description={jobs[0]?.description as string} budget={jobs[0]?.budget as number}/>
        </div>
        
    )
}