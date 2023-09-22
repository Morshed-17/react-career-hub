import { useEffect, useState } from "react";
import { getStoredId } from "../../utility/LocalStorage";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    
    const storedJobIds = getStoredId();
    const jobsApplied = [];
    for (const id of storedJobIds) {
      const job = jobs.find((job) => job.id === id);
      if (job) {
        jobsApplied.push(job);
      }
    }

    setDisplayJobs(jobsApplied);
  }, []);

  return (
    <div className="my-12">
      <h2 className="text-5xl font-semibold text-center my-12">Applied Jobs</h2>
      <div className="grid gap-6">{
        displayJobs.map(job => <AppliedJob key={job.id} job={job}>{job.job_title}</AppliedJob>)
      }</div>
    </div>
  );
};

export default AppliedJobs;
