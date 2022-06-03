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
          <Collection data-aos="fade-up" data-aos-duration="1000">
            A collection of 5,777 Dungeon Goblins
          </Collection>
          <Text data-aos="fade-up">
            Each goblin will be randomly generated, unique, and with a matching
            audio track.
          </Text>
          <Row>
            <Button data-aos="zoom-in-up" data-aos-duration="2000">
              <FaTwitter size={26} />
              <div> Follow us on Twitter</div>
            </Button>
            <Button data-aos="zoom-in-up" data-aos-duration="2000">
              <FaDiscord size={26} />
              <div>Join our Discord</div>
            </Button>
          </Row>
        </MainLayout>
      </Container>
    </Layout>
  );
}
