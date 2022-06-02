import styled from "styled-components";

import "swiper/css";
import "swiper/css/free-mode";

// -----------------------------------------------------------

export const Layout = styled.div`
  padding: 200px 0px 250px 0px;
  width: 100%;
  background: black;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SwiperLayout = styled.div`
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.div`
  font-size: 56px;
  line-height: 71px;
  color: #fff;
  text-align: center;
`;

export const TextColor = styled.div`
  font-size: 56px;
  line-height: 71px;
  color: #f05a28;
  text-align: center;
`;

export const SwiperContainer = styled.div`
  width: 100vw;
  left: 0;
  max-width: 100%;
  padding-top: 150px;
`;
export const Letter = styled.div`
  margin-top: 10px;
  width: 220px;
  height: 50px;
  background: #141d2c;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #f05a28;
  }
`;

export const ListingBlog = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 110px;
`;
export const Feature1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const FeaImageContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const FeaImage1 = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;

export const FeaImageText1 = styled.div`
  width: 300px;
  height: 56px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FeaTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FeaTitle1 = styled.div`
  color: white;
  font-size: 56px;
  line-height: 72px;
`;
export const FeaSubTitle1 = styled.div`
  color: #f05a28;
  font-size: 56px;
  line-height: 72px;
  margin-bottom: 25px;
`;
export const FeaText = styled.div`
  font-size: 18px;
  line-height: 28px;
  color: white;
  opacity: 0.7;
`;
