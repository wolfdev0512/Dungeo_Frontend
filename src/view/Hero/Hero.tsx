import React from "react";

// @styled-component
import {
  Layout,
  MainLayout,
  Collection,
  Text,
  Button,
  Row,
} from "./Hero.styled";

// @component
import Container from "components/Container/Container";

// @assets
import { FaTwitter, FaDiscord } from "react-icons/fa";
// ----------------------------------------------------------

export default function index() {
  return (
    <Layout>
      <Container>
        <MainLayout>
          <Collection>A collection of 6.666 Spookeletons</Collection>
          <Text>that are all different,</Text>
          <Text>algorithmically generated,</Text>
          <Text>fierce, and collectible.</Text>
          <Row>
            <Button>
              <FaTwitter size={26} />
              <div> Follow us on Twitter</div>
            </Button>
            <Button>
              <FaDiscord size={26} />
              <div>Join our Discord</div>
            </Button>
          </Row>
        </MainLayout>
      </Container>
    </Layout>
  );
}
