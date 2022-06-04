import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 200px;
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const Background = styled.div<{ image: any }>`
  display: flex;
  justify-content: center;

  width: 100vw;

  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  @media screen and (max-width: 575px) {
    background: #020c1a;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  max-width: 500px;

  color: white;
  font-size: 56px;
  font-weight: 600;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 370px) {
    font-size: 28px;
  }
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Network = styled.span`
  color: #f05a28;

  font-size: 56px;

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
export const ImageContainer1 = styled.div`
  position: relative;

  width: 270px;
  height: 270px;

  border-radius: 40px;

  background: #0f1826;
  border: 1px solid hsla(0, 0%, 100%, 0.15);

  display: flex;
  justify-content: center;
  align-items: flex-end;

  ::before {
    position: absolute;
    content: "";
    bottom: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: 100%;
    background: linear-gradient(180deg, rgba(15, 24, 38, 0) 30.67%, #0f1826);
    border-radius: 40px;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  ::after {
    position: absolute;
    content: "";
    bottom: calc(-100% - 25px);
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #0f1826, #020c1a);
    border-radius: 40px;
    z-index: -1;
    opacity: 0.35;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;
export const ImageContainer2 = styled.div`
  position: relative;

  width: 270px;
  height: 270px;

  border-radius: 40px;

  margin-top: -60px;
  @media screen and (max-width: 575px) {
    margin-top: 0px;
  }

  background: #0f1826;
  border: 1px solid hsla(0, 0%, 100%, 0.15);

  display: flex;
  justify-content: center;
  align-items: flex-end;

  ::before {
    position: absolute;
    content: "";
    bottom: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: 100%;
    background: linear-gradient(180deg, rgba(15, 24, 38, 0) 30.67%, #0f1826);
    border-radius: 40px;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  ::after {
    position: absolute;
    content: "";
    bottom: calc(-100% - 25px);
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #0f1826, #020c1a);
    border-radius: 40px;
    z-index: -1;
    opacity: 0.35;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 56px;
  margin-bottom: 130px;
  @media screen and (max-width: 575px) {
    margin-bottom: 40px;
  }
`;

export const Text1 = styled.div`
  color: white;

  font-size: 56px;
  font-weight: 600;

  line-height: 66px;
  margin-left: 95px;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
    margin-left: 0px;
    text-align: center;
    line-height: 46px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 42px;
  }

  @media screen and (max-width: 370px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const Imagelayout = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
`;
