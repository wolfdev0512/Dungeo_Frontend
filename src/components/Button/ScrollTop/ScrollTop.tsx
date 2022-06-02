import React, { useEffect, useState } from "react";

import { ScrollButtonWrapper, Row } from "./ScrollTop.styled";

// @assets
import { IoIosArrowUp } from "react-icons/io";

// type
interface ScrollButtonProps {
  showButton: boolean;
  [key: string]: unknown;
}
// --------------------------------------------------------

const ScrollTop = () => {
  const [enable, setEnable] = useState(false);
  let timeout: any;
  const handleOnScroll = (isMounted: any) => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      isMounted && setEnable(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isMounted && setEnable(false);
      }, 2000);
    } else {
      isMounted && setEnable(false);
    }
  };
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      window.addEventListener("scroll", () => handleOnScroll(isMounted));
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", () => {
        return;
      });
    };
  }, []);
  return (
    <>
      <ScrollButtonWrapper onClick={scrollToTop} showButton={enable}>
        <Row>
          <IoIosArrowUp size={20} />
          <p>Top</p>
        </Row>
      </ScrollButtonWrapper>
    </>
  );
};
export default ScrollTop;
