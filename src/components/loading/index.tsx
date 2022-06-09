import React from "react";
import Image from "next/image";

// @assets
import LoadingImage from "assets/gif/loading.gif";

// @styled-components
import { Layout } from "./styled";

//------------------------------------------------------

const Loading: React.FC = () => {
  return (
    <Layout>
      <Image src={LoadingImage} alt="No image" width={250} height={250}></Image>
    </Layout>
  );
};

export default Loading;
