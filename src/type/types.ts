export type TimeLineType = {
  date: string;
  company: string;
  job: string;
  work?: string[];
  type?: "work" | "education";
};

export type TechType = {
  image: string;
  name: string;
  description: string;
};
