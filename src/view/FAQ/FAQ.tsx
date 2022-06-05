import React from "react";
import Image from "next/image";

// @styled-component
import {
  Layout,
  MainLayout,
  Header,
  Questions,
  QuestionItem,
  Question,
  Answer,
} from "./FAQ.styled";

// @component
import Container from "components/Container/Container";

// ----------------------------------------------------------

export default function index() {
  return (
    <Layout>
      <Container>
        <MainLayout>
          <Header>FAQ</Header>
          <Questions>
            <QuestionItem>
              <Question>What is the ”DungeoNEAR” Collective?</Question>
              <Answer>
                DungeoNEAR is a degen NEAR gaming and social gaming platform,
                releasing its first proof of concept NFT collection as “Dungeon
                Goblins”. This NFT collection is the foundation for a new
                “P2E(play to earn), S2E(stake to earn)” game model funded by our
                native token, Jargon.
              </Answer>
            </QuestionItem>
            <QuestionItem>
              <Question>What is the ”DungeoNEAR” Collective?</Question>
              <Answer>
                DungeoNEAR is a degen NEAR gaming and social gaming platform,
                releasing its first proof of concept NFT collection as “Dungeon
                Goblins”. This NFT collection is the foundation for a new
                “P2E(play to earn), S2E(stake to earn)” game model funded by our
                native token, Jargon.
              </Answer>
            </QuestionItem>
          </Questions>
        </MainLayout>
      </Container>
    </Layout>
  );
}
