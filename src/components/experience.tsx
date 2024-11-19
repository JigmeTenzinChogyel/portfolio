"use client";

import { Experiences } from "@/data/experience";
import { TimeLineType } from "@/type/types";
import Image from "next/image";
import { useState } from "react";

type Props = {
  line?: boolean;
} & TimeLineType;

const TimeLine = (props: Props) => {
  const { date, company, job, work, line } = props;
  return (
    <div className="flex gap-[10%]">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/profile-pic.png"
          alt="profile"
          width={100}
          height={100}
          className="rounded-full border"
        />
        {line && (
          <div className="ml-[5.5%] p-1 w-1 h-20 border-l border-black" />
        )}
      </div>
      <div>
        <p>{date}</p>
        <h5>{company}</h5>
        <p>{job}</p>
        <p className="flex items-center gap-2">
          {work && work.map((d, index) => <span key={index}>{d}</span>)}
        </p>
      </div>
    </div>
  );
};

export const Experience = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const workExp = Experiences.filter((exp) => exp.type === "work");
  const eduExp = Experiences.filter((exp) => exp.type === "education");
  return (
    <section className="space-y-8 py-4">
      <h4>Experiences</h4>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setToggle(true)}
            className={`flex-grow p-1 ${toggle === true && "bg-gray-100"}`}
          >
            Work
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`flex-grow p-1 ${toggle === false && "bg-gray-100"}`}
          >
            Education
          </button>
        </div>
        {toggle ? (
          <div>
            {workExp.map((exp, index) => (
              <TimeLine
                key={index}
                date={exp.date}
                company={exp.company}
                job={exp.job}
                work={exp.work}
                line={index + 1 < workExp.length}
              />
            ))}
          </div>
        ) : (
          <div>
            {eduExp.map((exp, index) => (
              <TimeLine
                key={index}
                date={exp.date}
                company={exp.company}
                job={exp.job}
                work={exp.work}
                line={index + 1 < eduExp.length}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
