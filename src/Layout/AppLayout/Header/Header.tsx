import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// @styled-component
import {
  Layout,
  MainLayout,
  LogoContainer,
  Menu,
  MenuItem,
  MobileLayout,
  MobileMainLayout,
  MenuButton,
  ButtonGroup,
  MobileMenu,
  MobileMenuItem,
} from "./Header.styled";

// @assets
import LogoImage from "assets/png/Logo.png";
import LogoBg from "assets/png/Logo-bg.png";
import { BiMenu } from "react-icons/bi";

// @component
import { ConnectButton } from "components/Button";
import Container from "components/Container/Container";

// --------------------------------------------------------------

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(false);

  const dropMenuRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return;
    }
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <Layout>
        <Container>
          <MainLayout>
            <LogoContainer back={LogoBg.src} top={scrollY == 0}>
              <Image src={LogoImage} alt="No Image" layout="fill" b />
            </LogoContainer>
            <Menu>
              <MenuItem>Buy/Sell &SPKL</MenuItem>
              <MenuItem>Staking</MenuItem>
              <MenuItem>Roadmap</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </Menu>
            <ConnectButton />
          </MainLayout>
        </Container>
      </Layout>
      <MobileLayout>
        <Container>
          <MobileMainLayout>
            <LogoContainer back={LogoBg.src} top={scrollY == 0}>
              <Image src={LogoImage} alt="No Image" layout="fill" />
            </LogoContainer>

            <ButtonGroup>
              <ConnectButton />
              <MenuButton
                onClick={() => {
                  setShow(!show);
                }}
              >
                <BiMenu size={24} />
              </MenuButton>
            </ButtonGroup>
          </MobileMainLayout>
          <MobileMenu show={show} ref={dropMenuRef}>
            <MobileMenuItem onClick={() => setShow(false)}>
              Buy/Sell &$SPKL
            </MobileMenuItem>
            <MobileMenuItem onClick={() => setShow(false)}>
              Staking
            </MobileMenuItem>
            <MobileMenuItem onClick={() => setShow(false)}>
              Roadmap
            </MobileMenuItem>
            <MobileMenuItem onClick={() => setShow(false)}>FAQ</MobileMenuItem>
          </MobileMenu>
        </Container>
      </MobileLayout>
    </>
  );
};
export default Header;
