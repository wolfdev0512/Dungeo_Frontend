import React, { useState, useEffect } from "react";
import Image from "next/image";

// @styled-component
import {
  Layout,
  MintForm,
  ImageLayout,
  ImageContainer,
  TextSupply,
  MintLayout,
  Text,
  MainLayout,
  MintButtonAction,
  MintInputContainer,
  MintNumberInput,
  MintInputActions,
  MintInputIncrease,
  MintInputDecrease,
} from "./Mint.styled";

// @component
import Container from "components/Container/Container";

// @assets
import ImageNFT from "assets/gif/dungeo.gif";

// @context
import { useSupplyContext } from "context/SupplyContext";

const BN = require("bn.js");

// ----------------------------------------------------------

export default function Mint() {
  const { totalSupply } = useSupplyContext();

  const [status, setStatus] = useState(2);
  const [mintable, setMintable] = useState(5777);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setMintable(5777 - totalSupply);
  }, [totalSupply]);

  const mintNFT = async () => {
    console.log("object");
    let recentCount = totalSupply;
    // for (let i = 1; i <= amount; i++) {
    console.log(totalSupply);
    console.log(recentCount);
    await window.contract.nft_mint(
      {
        token_id: `Goblin-${Number(recentCount) + 1}`,
        metadata: {
          title: `Dungeon Goblin - #${Number(recentCount) + 1}`,
          description: "Dungeon Goblin’s Minted on NEARVangelist",
          media: `https://gateway.pinata.cloud/ipfs/QmVquedp52qKDmQwBFgW7guFXffU1vh4yd5nwx9LeaUhCp/${
            Number(recentCount) + 1
          }.png`,
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("11000000000000000000000000")
    );
    // }
  };

  return (
    <Layout id="mint">
      <Container>
        <MainLayout>
          <MintForm>
            <ImageLayout>
              <ImageContainer>
                <Image src={ImageNFT} alt="No Image" layout="fill" />
              </ImageContainer>
              <TextSupply>{totalSupply} / 5777</TextSupply>
            </ImageLayout>
            <MintLayout>
              <Text>{status === 1 ? "Presale" : "Public sale"}</Text>
              <Text>Price: 11 Near</Text>
              <Text>
                Address:
                {" " + window.accountId}
              </Text>
              <MintInputContainer>
                <MintNumberInput value={amount} readOnly />
                <MintInputActions>
                  <MintInputIncrease
                    onClick={() => {
                      setAmount(amount + 1);
                    }}
                  >
                    +
                  </MintInputIncrease>
                  <MintInputDecrease
                    onClick={() => {
                      setAmount(amount - 1);
                    }}
                  >
                    -
                  </MintInputDecrease>
                </MintInputActions>
              </MintInputContainer>
              <MintButtonAction
                disabled={mintable <= 0}
                onClick={() => mintNFT()}
              >
                Mint
              </MintButtonAction>
            </MintLayout>
          </MintForm>
        </MainLayout>
      </Container>
    </Layout>
  );
}
