// @styled components
import styled from "styled-components";

//-------------------------------------------------------------------------

export const Layout = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 100px 0px 50px 0px;
`;

export const MainLayout = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const MintForm = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 24px 0 rgba(75, 75, 88, 54%);
  border-radius: 20px;
  padding: 50px;

  @media screen and (max-width: 1024px) {
    width: 90%;
    padding: 30px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
`;

export const ImageLayout = styled.div`
  width: 50%;
  height: 300px;

  @media screen and (max-width: 768px) {
    width: 70%;
    margin-bottom: 20px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 100%;

  border-radius: 20px;
  img {
    border-radius: 20px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextSupply = styled.div`
  color: #6b41cb;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
  font-weight: 600;
`;

//----------------------------------
export const MintLayout = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Text = styled.div`
  color: white;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;
