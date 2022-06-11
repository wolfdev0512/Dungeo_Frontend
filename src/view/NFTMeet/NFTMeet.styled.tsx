import styled from "styled-components";

import "swiper/css";
import "swiper/css/free-mode";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
`;

export const SwiperLayout = styled.div`
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 220px;
  }
`;

export const Text = styled.div`
  font-size: 56px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 370px) {
    font-size: 28px;
  }
`;

export const TextColor = styled.div`
  font-size: 56px;
  font-weight: 600;
  line-height: 71px;
  color: #f05a28;
  text-align: center;
  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 370px) {
    font-size: 28px;
  }
`;

export const SwiperContainer = styled.div<{ image: any }>`
  width: 100vw;
  left: 0;
  max-width: 100%;
  padding-top: 150px;
  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 48.5% -10px;
  background-size: 450px;
`;

export const TextContainer = styled.div`
  position: relative;
  top: 90px;
`;

export const Letter = styled.div`
  position: relative;

  margin-top: 16px;

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

  ::before {
    position: absolute;
    content: "";
    top: -10px;
    left: -10px;
    border: 10px solid transparent;
    border-top-color: #020c1a;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  ::after {
    position: absolute;
    content: "";
    bottom: -10px;
    right: -10px;
    border: 10px solid transparent;
    border-top-color: #020c1a;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;

export const ListingBlog = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;
`;

export const Feature1 = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const FeaImageContainer1 = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 40px;
  text-align: center;

  background: linear-gradient(186.21deg, #0f1826 4.91%, #020c1a 85.87%);
  padding: 30px;

  @media screen and (max-width: 1024px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 570px) {
    padding: 10px;
  }
`;
export const FeaImage1 = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  margin-bottom: 15px;
  @media screen and (max-width: 570px) {
    width: 250px;
    height: 250px;
  }
`;

export const FeaImageText1 = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;
  height: 56px;
  font-size: 18px;
  font-weight: 500;

  background: #141d2c;
  color: white;

  &:hover {
    background: #f05a28;
  }

  ::before {
    position: absolute;
    content: "";
    top: -10px;
    left: -10px;
    border: 10px solid transparent;
    border-top-color: #020c1a;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  ::after {
    position: absolute;
    content: "";
    bottom: -10px;
    right: -10px;
    border: 10px solid transparent;
    border-top-color: #020c1a;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  @media screen and (max-width: 570px) {
    width: 250px;
  }
`;

export const FeaTextContainer1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FeaTitle = styled.div`
  color: white;

  font-size: 56px;
  font-weight: 800;

  line-height: 72px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 570px) {
    font-size: 42px;
  }
`;
export const FeaSubTitle = styled.div`
  color: #f05a28;

  font-size: 42px;
  font-weight: 600;

  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 570px) {
    font-size: 32px;
  }
`;
export const FeaText = styled.div`
  font-size: 18px;
  line-height: 28px;
  color: white;
  opacity: 0.7;
  @media screen and (max-width: 570px) {
    padding: 0px 10px;
  }
`;

export const ImageContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
`;
export const Feature2 = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const FeaImageContainer2 = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 40px;
  text-align: center;

  background: linear-gradient(186.21deg, #0f1826 4.91%, #020c1a 85.87%);
  padding: 30px;

  @media screen and (max-width: 1024px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 570px) {
    padding: 10px;
  }
`;
export const FeaImage2 = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  margin-bottom: 15px;
  @media screen and (max-width: 570px) {
    width: 250px;
    height: 250px;
  }
`;
export const FeaImageText2 = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;
  height: 56px;
  font-size: 18px;
  font-weight: 500;

  background: #141d2c;
  color: white;

  &:hover {
    background: #f05a28;
  }

  ::before {
    position: absolute;
    content: "";
    top: -10px;
    left: -10px;
    border: 10px solid transparent;
    border-top-color: #020c1a;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  ::after {
    position: absolute;
    content: "";
    bottom: -10px;
    right: -10px;
    border: 10px solid transparent;
    border-top-color: #020c1a;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  @media screen and (max-width: 570px) {
    width: 250px;
  }
`;
export const FeaTextContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 75px;
  @media screen and (max-width: 1024px) {
    padding-right: 0px;
  }
`;

export const GameLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
export const GameTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-size: 56px;
  font-weight: 800;
  color: #f05a28;

  margin-bottom: 50px;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
export const GameDetail = styled.div`
  text-align: center;
  font-size: 16px;
  color: #fff;
  opacity: 0.7;
`;
export const GameImage = styled.div`
  margin-top: 10px;
  position: relative;
  width: 760px;
  height: 430px;

  @media screen and (max-width: 1250px) {
    width: 600px;
    height: 340px;
  }
  @media screen and (max-width: 1024px) {
    width: 450px;
    height: 250px;
  }
  @media screen and (max-width: 768px) {
    width: 430px;
    height: 180px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 115px;
  }
`;
export const GameText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
