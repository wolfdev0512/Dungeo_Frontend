import dynamic from "next/dynamic";

//-------------------------------------------------------------
// export const Hero = dynamic(() => import("./Hero/Hero"));
// export const Network = dynamic(() => import("./Network/Network"));
// export const NFTMeet = dynamic(() => import("./NFTMeet/NFTMeet"));
// export const Roadmap = dynamic(() => import("./Roadmap/Roadmap"));
// export const FAQ = dynamic(() => import("./FAQ/FAQ"));

export { default as Hero } from "./Hero/Hero";
export { default as Network } from "./Network/Network";
export { default as NFTMeet } from "./NFTMeet/NFTMeet";
export { default as Roadmap } from "./Roadmap/Roadmap";
export { default as FAQ } from "./FAQ/FAQ";
