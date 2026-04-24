import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Applyform({title, description, budget} : {title:string, description:string, budget:number}) {

        const [bid, SetBid] = useState<number>(0);

    async function submitBid() {
        const res = await fetch("http://localhost/apply", {
            method:'POST',
            body:JSON.stringify({
                jobId:params.jobId,
                freelancer:"demo-user",
                bid
            }),
            headers:{
                 "Content-Type": "application/json",
            },
        });
        alert("Done");
    }

    return (
        <div>   
            <div>
            <div className="p-10 space-y-4">
            <h1>User Name</h1>
            <div className="text-3xl">
                <h2>{title}</h2>
            </div>
            <div className="">
                {description}
            </div>

            <div className="">
                {budget}
            </div>
        </div>

        <div className="">
            <div  className="">
                <h1>Make Your Proposal And Set Bid</h1>

                <Input placeholder="Enter Amount"/>
                <Textarea className="w-100" onChange={(e) => SetBid(parseInt(e.target.value))} placeholder="Write Your Proposal . . ."/>

                <Button onClick={(e) => {

                }}>Submit Proposal</Button>
            </div>
        </div>

        </div>
        </div>
    )
}