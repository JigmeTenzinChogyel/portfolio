import { projects } from "@/data/projects";
import { ProjectType } from "@/type/types";
import Image from "next/image";

const ProjectCard = (props: ProjectType) => {
  const { image, alt, description, date, name } = props;
  return (
    <div className="border h-[400px] relative cursor-pointer">
      <Image src={image} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute bottom-0 p-5 text-white">
        <h5 className="font-bold text-xl">{name}</h5>
        <p className="font-light text-xs text-gray-200">{description}</p>
        {/* <p>{date?.getDate()}</p> */}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className="space-y-8 my-10 py-4">
      <h4>Projects</h4>
      <div className="grid grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </section>
  );
};
