import React from "react";
import Image from "next/image";

// @styled-component
import {
  Layout,
  MainLayout,
  LogoContainer,
  Logo,
  Menu,
  MenuItem,
} from "./Header.styled";

// @assets
import LogoImage from "assets/png/Logo.png";

// @component
import { ConnectButton } from "components/Button";
import Container from "components/Container/Container";

// --------------------------------------------------------------

const Header: React.FC = () => {
  return (
    <Layout>
      <Container>
        <MainLayout>
          <LogoContainer>
            <Image src={LogoImage} alt="No Image" layout="fill" />
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
  );
};
export default Header;
