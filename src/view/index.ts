import dynamic from "next/dynamic";

//-------------------------------------------------------------
export const Hero = dynamic(() => import("./Hero/Hero"));
export const Network = dynamic(() => import("./Network/Network"));
export const NFTMeet = dynamic(() => import("./NFTMeet/NFTMeet"));
