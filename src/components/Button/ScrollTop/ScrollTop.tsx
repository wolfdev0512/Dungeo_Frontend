import React, { useEffect, useState } from "react";

// styled system
import styled from "styled-components";

// icons
import { IoIosArrowUp } from "react-icons/io";

// type
interface ScrollButtonProps {
  showButton: boolean;
  [key: string]: unknown;
}
// styeld component
const ScrollButtonWrapper = styled.div<ScrollButtonProps>`
  position: fixed;
  width: 74px;
  height: 74px;
  background: red;
  color: white;
  text-transform: uppercase;
  text-align: center;
  bottom: 25px;
  right: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${({ showButton }) => (showButton ? 100 : 0)};
  transform: scale(${({ showButton }) => (showButton ? 1 : 0)});
  transition: all 0.4s ease-in;
  z-index: 100;
  font-size: 14px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 3px;
  }
`;

// --------------------------------------------------------

const ScrollTop = () => {
  const [enable, setEnable] = useState(false);
  const handleOnScroll = (isMounted: any) => {
    let timeout;
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
          <div>Top</div>
        </Row>
      </ScrollButtonWrapper>
    </>
  );
};
export default ScrollTop;
