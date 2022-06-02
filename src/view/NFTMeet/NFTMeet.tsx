import React from "react";
import Image from "next/image";
import {
  Layout,
  Text,
  TextColor,
  SwiperContainer,
  SwiperLayout,
  Letter,
  ListingBlog,
  Feature1,
  FeaImageContainer1,
  FeaImage1,
  FeaImageText1,
  FeaTextContainer,
  FeaTitle1,
  FeaSubTitle1,
  FeaText,
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
import FeatureImage4 from "assets/png/feature4.png";
import Container from "components/Container/Container";

// ----------------------------------------------------------

export default function index() {
  return (
    <Layout>
      <SwiperLayout>
        <Text>Meet with some of</Text>
        <TextColor>Spookeletons</TextColor>
        <SwiperContainer>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            loop={true}
            slidesPerView={6}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {({ isActive }: any) => (
                <>
                  <Image
                    src={Image1.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #1111</Letter>}{" "}
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <>
                  <Image
                    src={Image2.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #2222</Letter>}{" "}
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <>
                  <Image
                    src={Image3.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #3333</Letter>}{" "}
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <>
                  <Image
                    src={Image4.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #4444</Letter>}{" "}
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <>
                  <Image
                    src={Image5.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #5555</Letter>}{" "}
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <>
                  <Image
                    src={Image6.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #6666</Letter>}
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <>
                  <Image
                    src={Image7.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #7777</Letter>}{" "}
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }: any) => (
                <>
                  <Image
                    src={Image8.src}
                    alt="No Image"
                    width={220}
                    height={220}
                  />
                  {isActive && <Letter>Spookeletons #8888</Letter>}{" "}
                </>
              )}
            </SwiperSlide>
          </Swiper>
        </SwiperContainer>
      </SwiperLayout>
      <ListingBlog>
        <Container>
          <Feature1>
            <FeaImageContainer1>
              <FeaImage1>
                <Image src={FeatureImage1} layout="fill" alt="No Image" />
              </FeaImage1>
              <FeaImageText1>$SPKL</FeaImageText1>
            </FeaImageContainer1>
            <FeaTextContainer>
              <FeaTitle1>Feature #1</FeaTitle1>
              <FeaSubTitle1>Spookeletons Token</FeaSubTitle1>
              <FeaText>
                There will be the creation of a Solana SPL token for
                Spookeletons NFT. This will be denoted as $SPKL. This token will
                be used to make transactions that can be done with Spookeletons.
                <br /> $SPKL AIRDROP (Spookeletons Token):
                <br /> The $SPKL token will be airdropped in 2 ways:
                <br /> i. For Spookeletons minters, they will be receiving some
                $SPKL tokens as a reward for minting. This will be received
                every month for 2 years. (The original minters are not under
                compulsion to hold Spookeletons to receive this $SPKL airdrop.)
                <br />
                ii. For the first 3 months after the $SPKL token is launched,
                current Spookeleton holders will be airdropped $SPKL tokens.
                This airdrop will be received every day during the 3-month
                period. The snapshots for the daily airdrop will be taken at any
                random time in a day.
              </FeaText>
            </FeaTextContainer>
          </Feature1>
        </Container>
        {/* <Feature1>
          <FeaImageContainer1>
            <FeaImage1></FeaImage1>
            <FeaImageText1></FeaImageText1>
          </FeaImageContainer1>
          <FeaTextContainer>
            <FeaTitle1></FeaTitle1>
            <FeaSubTitle1></FeaSubTitle1>
            <FeaText></FeaText>
          </FeaTextContainer>
        </Feature1>
        <Feature1>
          <FeaImageContainer1>
            <FeaImage1></FeaImage1>
            <FeaImageText1></FeaImageText1>
          </FeaImageContainer1>
          <FeaTextContainer>
            <FeaTitle1></FeaTitle1>
            <FeaSubTitle1></FeaSubTitle1>
            <FeaText></FeaText>
          </FeaTextContainer>
        </Feature1>
        <Feature1>
          <FeaImageContainer1>
            <FeaImage1></FeaImage1>
            <FeaImageText1></FeaImageText1>
          </FeaImageContainer1>
          <FeaTextContainer>
            <FeaTitle1></FeaTitle1>
            <FeaSubTitle1></FeaSubTitle1>
            <FeaText></FeaText>
          </FeaTextContainer>
        </Feature1> */}
      </ListingBlog>
    </Layout>
  );
}
