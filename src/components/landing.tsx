import Image from "next/image";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";

export const Landing = () => {
  return (
    <section className="w-full flex items-center justify-center h-3/4">
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/profile-pic.png"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full border"
          />
          <div>
            <h3>JIGME TENZIN CHOGYEL</h3>
            <p>Based in Thimphu, Bhutan</p>
          </div>
        </div>
        <div className="text-8xl font-bold space-y-4 tracking-wide">
          <h1 className="mr-20">SOFTWARE</h1>
          <h1 className="ml-40">ENGINEER</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="border px-3 py-2 rounded-full flex items-center gap-1">
            <IoPaperPlaneOutline />
            Contact me
          </button>
          <button className="flex items-center gap-2">
            <BsDownload />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};
