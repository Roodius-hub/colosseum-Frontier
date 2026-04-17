
"use client"
import  JobCard from "./JobCard"; 
import {useJobs} from "../../hooks/useJobs";
import { jobs } from "@/dummy/dummy";


export default function Joblist() {
    // const {jobs} = useJobs();

    return (    
        <div className="grid grid-cols-4 m-20 ">
            {jobs.map((job:any, i) => (
                <JobCard key={i} title={job.title}  description={job.description} budget={job.budget} _id={job._id  }/>
            ))}
        </div>
    )
}