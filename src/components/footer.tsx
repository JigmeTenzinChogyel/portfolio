import Link from "next/link";
import { IoPaperPlaneOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="p-4 space-y-4">
      <div className="flex items-center justify-between p-5">
        <button className="border px-3 py-2 rounded-full flex items-center gap-1">
          <IoPaperPlaneOutline />
          Contact me
        </button>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Navigate</p>
            <Link href="">Home</Link>
            <Link href="">Work</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Navigate</p>
            <Link href="">Home</Link>
            <Link href="">Work</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Navigate</p>
            <Link href="">Home</Link>
            <Link href="">Work</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p>Developed by Jigme Tenzin Chogyel</p>
        <p>© 2024 | All rights reserved</p>
      </div>
    </footer>
  );
};
