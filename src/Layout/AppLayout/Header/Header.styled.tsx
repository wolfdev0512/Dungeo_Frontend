import styled from "styled-components";

// @headroom
import Headroom from "react-headroom";

// -----------------------------------------------------------

export const Layout = styled.div`
  position: sticky;
  top: 0;

  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: black;

  padding-top: 10px;

  z-index: 2;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div<{ back: any; top: boolean }>`
  margin-top: 10px;
  position: relative;

  width: 180px;
  height: 120px;

  ::after {
    opacity: ${({ top }: any) => (top ? "1" : "0")};
    transition: all 0.5s ease;
    position: absolute;
    content: "";
    left: -200px;
    top: -20px;
    width: 580px;
    height: 200px;
    background-image: url(${({ back }: any) => back});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }
  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 100px;

    ::after {
      display: none;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 135px;
    height: 90px;
  }
  @media screen and (max-width: 1024px) {
    width: 135px;
    height: 90px;
  }
  @media screen and (max-width: 768px) {
    width: 120px;
    height: 80px;
  }
`;

export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled.a`
  position: relative;

  z-index: 1;
  margin: 0 15px;

  color: #fff;
  font-size: 18px;
  font-weight: 500;

  text-decoration: none;

  transition: all 0.2s;
  cursor: pointer;

  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 3px;
    background-color: #f05a28;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    color: #f05a28;
    ::after {
      transform: scaleX(1);
    }
  }
`;

export const MobileLayout = styled.div`
  position: relative;
  display: none;
  background: black;
  width: 100%;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const MobileMainLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuButton = styled.div`
  width: 56px;
  height: 56px;
  margin-left: 10px;

  background: #f05a28;

  color: white;
  font-weight: 600;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

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

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 425px) {
    width: 45px;
    height: 45px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;
export const MobileMenu = styled.div<{ show: boolean }>`
  position: absolute;

  display: ${({ show }) => (show ? "block" : "none")};

  top: 100px;
  left: 0;
  width: 100%;
  @media screen and (max-width: 768px) {
    top: 90px;
  }
  z-index: 2;
`;
export const MobileMenuItem = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  color: white;
  padding: 20px;
  font-size: 16px;
  background: #f05a28;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
`;
