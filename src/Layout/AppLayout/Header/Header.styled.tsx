import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: black;

  padding-top: 10px;
`;

export const MainLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 150px;
  height: 100px;
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
    background-color: #feae33;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    color: #feae33;
    ::after {
      transform: scaleX(1);
    }
  }
`;
