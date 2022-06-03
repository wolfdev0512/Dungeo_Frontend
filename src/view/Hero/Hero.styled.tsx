import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100vw;

  padding: 150px 0px;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 1250px) {
    padding: 70px 0px;
  }
  @media screen and (max-width: 575px) {
    padding: 30px 0px 0px 0px;
    margin-bottom: 50px;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Collection = styled.div`
  color: #f05a28;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  color: white;
  font-weight: 600;
  font-size: 56px;
  max-width: 870px;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 370px) {
    font-size: 28px;
  }
`;

export const Button = styled.div`
  position: relative;

  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 20px;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  padding: 0px 45px 0px 35px;

  background: #141d2c;

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
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Row = styled.div`
  margin-top: 30px;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 25px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
