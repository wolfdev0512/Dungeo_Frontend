import React from "react";
import Image from "next/image";
import {
  Layout,
  Text,
  TextColor,
  SwiperContainer,
  TextContainer,
  SwiperLayout,
  Letter,
  ImageContainer,
  ListingBlog,
  Feature1,
  FeaImageContainer1,
  FeaImage1,
  FeaImageText1,
  FeaTextContainer1,
  FeaTitle,
  FeaSubTitle,
  FeaText,
  Feature2,
  FeaImageContainer2,
  FeaImage2,
  FeaImageText2,
  FeaTextContainer2,
} from "./NFTMeet.styled";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import Image1 from "assets/png/swiper1.png";
import Image2 from "assets/png/swiper2.png";
import Image3 from "assets/png/swiper3.png";
import Image4 from "assets/png/swiper4.png";
import Image5 from "assets/png/swiper5.png";
import Image6 from "assets/png/swiper6.png";
import Image7 from "assets/png/swiper7.png";
import Image8 from "assets/png/swiper8.png";
import FeatureImage1 from "assets/png/feature1.png";
import FeatureImage2 from "assets/png/feature2.png";
import FeatureImage3 from "assets/png/feature3.png";
import Activebg from "assets/png/Active-bg.png";

import Container from "components/Container/Container";

// ----------------------------------------------------------

export default function index() {
  return (
    <Layout>
      <SwiperLayout>
        <TextContainer data-aos="fade-down">
          <Text>Meet with some of</Text>
          <TextColor>Dungeon Goblins</TextColor>
        </TextContainer>
        <SwiperContainer image={Activebg.src} data-aos="fade-up">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            slidesPerView={1}
            breakpoints={{
              "1300": {
                slidesPerView: 6,
              },
              "500": {
                slidesPerView: 2,
              },
              "768": {
                slidesPerView: 3,
              },
              "1024": {
                slidesPerView: 4,
              },
              "1200": {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image1.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #1111</Letter>}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image2.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #2222</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image3.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #3333</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image4.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #4444</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image5.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #5555</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image6.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #6666</Letter>}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image7.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #7777</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <ImageContainer isActive={isActive}>
                  <Image
                    src={Image8.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #8888</Letter>}{" "}
                </ImageContainer>
              )}
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>
      </SwiperLayout>
      <Container>
        <ListingBlog>
          <Feature1>
            <FeaImageContainer1 data-aos="fade-right">
              <FeaImage1>
                <Image src={FeatureImage1} layout="fill" alt="No Image" />
              </FeaImage1>
              <FeaImageText1>$SPKL</FeaImageText1>
            </FeaImageContainer1>
            <FeaTextContainer1 data-aos="fade-left">
              <FeaTitle>Feature #1</FeaTitle>
              <FeaSubTitle>Follow us Goblin! Your Dungeon awaits!</FeaSubTitle>
              <FeaText>
                The Dungeon Goblins NFTs are the first generative visual and
                audible art NFTs on NEAR.
                <br />
                Our goal is to provide artists, visual and audible, a way to
                plug their creations into video games and other various
                platforms as well as give more value to their NFTs for
                themselves and for those who hold, own, and stake them.
                <br />
                This NFT style of; a visual and audible, generative creation,
                will open up the NFT community to people who are visually
                impaired.
                <br />
                Each NFT will contain a generative short musical composition
                that will contain rarity levels that match up to its visual
                components. Each NFT earns from multiple pools of in-game
                "purchased" items, as well as free mints and WL mint spots in
                future NFT drops by the Jargon Ecosystem.
              </FeaText>
            </FeaTextContainer1>
          </Feature1>

          <Feature2>
            <FeaTextContainer2 data-aos="fade-right">
              <FeaTitle>Feature #2</FeaTitle>
              <FeaSubTitle>
                Benefits of Holding a DungeoNEAR Gen1 NFT
              </FeaSubTitle>
              <FeaText>
                Earn a Royalty from our Parlor Games
                <br />
                Earn a Royalty from every DungeoNEAR NFT traded
                <br />
                Earn a Royalty for your held traits from the the in-game
                purchases
                <br />
                Earn a Royalty from every game played of Dungeon Goblins as well
                on future DungeoNEAR games
                <br />
                Earn in game trait based items and rewards
                <br />
                Free Jargon NFT mint(5-8N mint price)
                <br />
                Whitelist Spot for Jargon NFT mint
                <br />
                Stake-to-Earn Jargon
              </FeaText>
            </FeaTextContainer2>
            <FeaImageContainer2 data-aos="fade-left">
              <FeaImage2>
                <Image src={FeatureImage2} layout="fill" alt="No Image" />
              </FeaImage2>
              <FeaImageText2>Ri¢hie Ri¢h Spooky</FeaImageText2>
            </FeaImageContainer2>
          </Feature2>
        </ListingBlog>
      </Container>
    </Layout>
  );
}
