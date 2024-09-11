import { jobs } from "@/staticdata/works";
import React from "react";

export default function Experience() {
  return (
    <section className="">
      <div className="">
        <ul className="space-y-3">
          {jobs.map((job) => (
            <li key={job.id} className="">
              <h3 className="font-semibold">{job.title}</h3>
              <p className="mb-2 font-semibold">
                {job.company} | {job.period}
              </p>
              <ul className="list-disc list-inside space-y-1 ">
                {job.description.map((point, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
