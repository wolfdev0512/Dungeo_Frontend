import type { NextPage } from "next";

// @component
import { FAQ, Hero, Network, NFTMeet, Roadmap } from "view";

//--------------------------------------------------------------------

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Network />
      <NFTMeet />
      <Roadmap />
      <FAQ />
    </div>
  );
};

export default Home;
