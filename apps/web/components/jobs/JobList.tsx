
"use client"
import  JobCard from "./JobCard"; 
import {useJobs} from "../../hooks/useJobs";
import { jobs } from "@/dummy/dummy";


export default function Joblist() {
    // const {jobs} = useJobs();

    return (    
        <div className="px-10 py-10 max-w-7xl mx-auto overflow-visible">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job: any) => (
            <JobCard key={job._id} {...job} />
          ))}
        </div>
        </div>
    )
}