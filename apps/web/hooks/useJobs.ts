"use client";
import { useEffect, useState } from "react";
import {getJobs} from "../lib/api";

export  function useJobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs().then((data:any) => setJobs(data))
    }, [])

    return {jobs}
}