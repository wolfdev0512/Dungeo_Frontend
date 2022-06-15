import React from "react";

// @styled-component
import { Layout, MainLayout, ItemLayout, Title } from "./Team.styled";

// @component
import { TeamItem } from "components/Items";
import Container from "components/Container/Container";

// @assets
import { FaTwitter, FaDiscord } from "react-icons/fa";
import Image1 from "assets/png/skeleton-1.png";
import Image2 from "assets/png/skeleton-2.png";
import Image3 from "assets/png/skeleton-3.png";
import Image4 from "assets/png/skeleton-4.png";

const TeamInfo = [
  {
    image: Image1,
    role: "Founder",
    description: "We call him a Captain of Ninja Boat, others call him Kage.",
    name: "William Clark",
    connect: [{ icon: FaTwitter, link: "/" }],
  },
  {
    image: Image2,
    role: "CEO",
    description: "The lead of Ninja Champions who always brings Victory.",
    name: "Carlos De La Cruz",
    connect: [{ icon: FaTwitter, link: "/" }],
  },
  {
    image: Image3,
    role: "CMO",
    description: "The best Marketing Manager on Social Media Platforms",
    name: "William Clark",
    connect: [{ icon: FaTwitter, link: "/" }],
  },
  {
    image: Image4,
    role: "Head Mod",
    description: "Make our Ninja Club full of excitement and happiness.",
    name: "William Clark",
    connect: [{ icon: FaTwitter, link: "/" }],
  },
];

// ----------------------------------------------------------

export default function index() {
  return (
    <Layout id="team">
      <Container>
        <Title>TEAM</Title>

        <MainLayout>
          {TeamInfo.map((item, index) => (
            <ItemLayout key={index}>
              <TeamItem data={item} />
            </ItemLayout>
          ))}
        </MainLayout>
      </Container>
    </Layout>
  );
}
