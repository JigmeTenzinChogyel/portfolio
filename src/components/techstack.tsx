import { Technologies } from "@/data/technologies";
import { TechType } from "@/type/types";
import Image from "next/image";

const TechCard = (props: TechType) => {
  const { image, name, description } = props;
  return (
    <div className="flex items-center gap-4 border p-2 rounded-md">
      <Image src={image} alt="profile" width={60} height={60} />
      <div>
        <p className="">{name}</p>
        <p className="text-xs font-light text-slate-700">{description}</p>
      </div>
    </div>
  );
};

export const TechStack = () => {
  const desc = `
  I'm proficient in a range of modern technologies that empower me to
  build highly functional solutions. These are some of my main
  technologies.
  `;
  return (
    <section className="space-y-8 my-10 py-4">
      <div className="space-y-4">
        <h4>Technology Stack</h4>
        <p>{desc}</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Technologies.map((tech, index) => (
          <TechCard key={index} {...tech} />
        ))}
      </div>
    </section>
  );
};
