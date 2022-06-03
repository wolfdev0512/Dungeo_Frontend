import type { NextPage } from "next";

// @styled-components
import { HomeLayout } from "styles/Styled";

// @component
import { Hero, Network, NFTMeet } from "view";

//--------------------------------------------------------------------

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Hero />
      <Network />
      {/* <NFTMeet /> */}
    </HomeLayout>
  );
};

export default Home;
