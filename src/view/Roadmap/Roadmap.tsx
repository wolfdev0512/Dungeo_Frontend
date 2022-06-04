import React from "react";
import Image from "next/image";

// @styled-component
import {
  Layout,
  MainLayout,
  Header,
  RoadmapContainer,
  RoadmapItem,
  Counter,
  Date,
  Detail,
  Icon,
} from "./Roadmap.styled";

// @component
import Container from "components/Container/Container";

// @assets
import RoadMapBg from "assets/png/RoadMap-bg.png";
import ActiveImage from "assets/png/Active.png";
import Roadmap from "assets/png/Roadmap.png";

// ----------------------------------------------------------

export default function index() {
  return (
    <Layout image={RoadMapBg.src}>
      <Container>
        <MainLayout>
          <Header>Roadmap</Header>
          <RoadmapContainer>
            <RoadmapItem>
              <Icon>
                <Image src={ActiveImage} layout="fill" alt="No Image" />
              </Icon>
              <div data-aos="fade-up">
                <Counter active={true}>01</Counter>
                <Date>Q3 2022</Date>
                <Detail>
                  ∘ Mint first DungeoNEAR NFT for Dungeon Goblins
                  <br />
                  <br />
                  ∘ Get NFT verified on paras.id and set up NFT trade royalty
                  pool
                  <br />
                  <br />
                  ∘ Release staking platform to earn Jargon
                  <br />
                  <br />∘ Release game design team info
                </Detail>
              </div>
            </RoadmapItem>
            <RoadmapItem>
              <Icon>
                <Image src={Roadmap} layout="fill" alt="No Image" />
              </Icon>
              <div data-aos="fade-up">
                <Counter active={false}>02</Counter>
                <Date>Q4 2022</Date>
                <Detail>
                  ∘ Release Parlor Game mechanic and functionality
                  <br />
                  <br />
                  ∘ Release Dungeon Goblins Play to Earn & Stake to Earn reward
                  mechanics
                  <br />
                  <br />
                  ∘ Release two Parlor Games
                  <br />
                  <br />∘ Release Dungeon Goblins Images and Updates
                </Detail>
              </div>
            </RoadmapItem>
            <RoadmapItem>
              <Icon>
                <Image src={Roadmap} layout="fill" alt="No Image" />
              </Icon>
              <div data-aos="fade-up">
                <Counter active={false}>03</Counter>
                <Date>Q1 2023</Date>
                <Detail>
                  ∘ Release three Parlor Games
                  <br />
                  <br />
                  ∘ Release First images of Game
                  <br />
                  <br />
                  ∘ Release limited access demo of Dungeon Goblins
                  <br />
                  <br />∘ Release Dungeon Goblins Gen2
                </Detail>
              </div>
            </RoadmapItem>
            <RoadmapItem end={true}>
              <Icon>
                <Image src={Roadmap} layout="fill" alt="No Image" />
              </Icon>
              <div data-aos="fade-up">
                <Counter active={false}>04</Counter>
                <Date>Q4 2023</Date>
                <Detail>
                  ∘ Dungeon Goblins Beta
                  <br />
                  <br />∘ Partnerships with other NFT games
                </Detail>
              </div>
            </RoadmapItem>
          </RoadmapContainer>
        </MainLayout>
      </Container>
    </Layout>
  );
}
