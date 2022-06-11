import React from "react";
import Image from "next/image";

// @styled-component
import {
  Layout,
  Background,
  MainLayout,
  TextContainer,
  Text,
  Text1,
  Row,
  Network,
  ImageContainer1,
  ImageContainer2,
  Imagelayout,
  Platform,
  PlatformTitle,
  PlatformText,
} from "./Network.styled";

// @component
import Container from "components/Container/Container";

// @assets
import BackgroundImage from "assets/png/Network.png";
import Skeleton1 from "assets/png/skeleton-1.png";
import Skeleton2 from "assets/png/skeleton-2.png";
import Skeleton3 from "assets/png/skeleton-3.png";
import Skeleton4 from "assets/png/skeleton-4.png";

// ----------------------------------------------------------

export default function index() {
  return (
    <Layout>
      <Background image={BackgroundImage.src}>
        <Container>
          <MainLayout>
            <TextContainer>
              <Text data-aos="fade-up">Dungeon Goblins</Text>
              <Text1 data-aos="fade-up">
                are hanging out around
                <br />
                <Network>DungeoNEAR platform.</Network>
              </Text1>
            </TextContainer>
            <Row>
              <ImageContainer1 data-aos="fade-down">
                <Imagelayout>
                  <Image src={Skeleton1.src} alt="No Image" layout="fill" />
                </Imagelayout>
              </ImageContainer1>
              <ImageContainer2 data-aos="fade-down">
                <Imagelayout>
                  <Image src={Skeleton2.src} alt="No Image" layout="fill" />
                </Imagelayout>
              </ImageContainer2>
              <ImageContainer1 data-aos="fade-down">
                <Imagelayout>
                  <Image src={Skeleton3.src} alt="No Image" layout="fill" />
                </Imagelayout>
              </ImageContainer1>
              <ImageContainer2 data-aos="fade-down">
                <Imagelayout>
                  <Image src={Skeleton4.src} alt="No Image" layout="fill" />
                </Imagelayout>
              </ImageContainer2>
            </Row>
          </MainLayout>
        </Container>
      </Background>
      <Container>
        <Platform data-aos="zoom-in">
          <PlatformTitle>What is the “DungeoNEAR” platform?</PlatformTitle>
          <PlatformText>
            DungeoNEAR, is a NEAR NFT gaming, staking, minting and game
            development platform, releasing its first proof of concept NFT
            collection as “Dungeon Goblin’s”. This NFT collection is the
            foundation for a new “Stake, Play, Earn” game ecosystem model.
          </PlatformText>
        </Platform>
      </Container>
    </Layout>
  );
}
