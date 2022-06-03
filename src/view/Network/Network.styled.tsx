import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 200px;
`;

export const Background = styled.div<{ image: any }>`
  display: flex;
  justify-content: center;

  width: 100vw;

  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.div`
  width: 500px;
  color: white;
  font-size: 56px;
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Network = styled.span`
  color: #f05a28;
  font-size: 56px;
`;
export const ImageContainer1 = styled.div`
  position: relative;

  width: 270px;
  height: 270px;

  background: black;

  border-radius: 40px;

  background: #0f1826;
  border: 1px solid hsla(0, 0%, 100%, 0.15);

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const ImageContainer2 = styled.div`
  width: 270px;
  height: 270px;

  border-radius: 40px;

  margin-top: -60px;

  background: #0f1826;
  border: 1px solid hsla(0, 0%, 100%, 0.15);

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 56px;
  margin-bottom: 130px;
`;

export const Text1 = styled.div`
  color: white;
  font-size: 56px;
  line-height: 60px;
  margin-left: 95px;
`;

export const Imagelayout = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
`;
