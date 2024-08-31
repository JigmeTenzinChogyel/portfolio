import { FirstLanding } from "@/components";

type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <main className="flex w-full h-full">
      <FirstLanding />
    </main>
  );
};

export default Home;

Home.displayName = "Home";
