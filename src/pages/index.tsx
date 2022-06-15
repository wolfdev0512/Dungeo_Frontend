import type { NextPage } from "next";

// @component
import { FAQ, Hero, Mint, Team, Network, NFTMeet, Roadmap } from "view";

//--------------------------------------------------------------------

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Mint />
      <Network />
      <NFTMeet />
      <Roadmap />
      <Team />
      <FAQ />
    </div>
  );
};

export default Home;
