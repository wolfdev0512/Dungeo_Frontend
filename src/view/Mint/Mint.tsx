import React, { useState } from "react";
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
} from "./Mint.styled";

// @component
import Container from "components/Container/Container";

// @assets
import ImageNFT from "assets/gif/dungeo.gif";

// @component
import { MintButton } from "components/Button";
import { MintInput } from "components/Input";

// ----------------------------------------------------------

export default function Mint() {
  const [status, setStatus] = useState(0);
  const [loading, setLoading] = useState(false);
  const [supply, setSupply] = useState(0);

  const [mintable, setMintable] = useState(20);
  const [mintPrice, setMintPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [is_List, setIs_List] = useState(false);
  const [account, setAccount] = useState(
    "0x0cC5C63E72DD94992B33c7C29a45667dC39BcC7f"
  );

  const handleConnectWallet = () => {
    console.log("Wallet Connect");
  };

  const handleNFTMint = () => {
    console.log("NFT mint");
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
              <TextSupply>{supply} / 10000</TextSupply>
            </ImageLayout>
            <MintLayout>
              <Text>{status === 1 ? "Presale" : "Public sale"}</Text>
              <Text>Price: {mintPrice / 1000000000000000000} ETH</Text>
              {mintable !== 0 && status === 1 && (
                <Text>Mintable NFTs: {mintable}</Text>
              )}
              <Text>
                Address:
                {account
                  ? `${account.substring(0, 6)}...${account.substring(38)}`
                  : "------"}
              </Text>

              <MintInput
                amount={amount}
                setAmount={setAmount}
                mintable={mintable}
              />
              <MintButton
                loading={loading}
                currentAcc={account}
                mintable={mintable}
                status={status}
                isList={is_List}
                connect={handleConnectWallet}
                mint={handleNFTMint}
              />
            </MintLayout>
          </MintForm>
        </MainLayout>
      </Container>
    </Layout>
  );
}
