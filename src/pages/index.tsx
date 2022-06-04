import type { NextPage } from "next";

// @styled-components
import { HomeLayout } from "styles/Styled";

// @component
import { FAQ, Hero, Network, NFTMeet, Roadmap } from "view";

//--------------------------------------------------------------------

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Hero />
      <Network />
      <NFTMeet />
      <Roadmap />
      <FAQ />
    </HomeLayout>
  );
};

export default Home;
