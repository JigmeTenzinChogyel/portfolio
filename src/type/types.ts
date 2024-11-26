export type TimeLineType = {
  date: string;
  company: string;
  job: string;
  work?: string[];
  type?: "work" | "education";
};

export type TechType = {
  image: string;
  alt?: string;
  name: string;
  description: string;
};

export type ProjectType = {
  image: string;
  alt: string;
  name: string;
  description?: string;
  link?: string;
  date?: Date;
};
