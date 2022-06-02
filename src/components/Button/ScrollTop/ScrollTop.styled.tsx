// @styled-component
import styled from "styled-components";

//----------------------------------------------------------

export const ScrollButtonWrapper = styled.div<ScrollButtonProps>`
  position: fixed;
  width: 74px;
  height: 74px;
  /* background: ${themeGet("colors.primary.regular")};
  color: ${themeGet("colors.white")}; */
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

export const Row = styled.div`
  /* alignItems="center"
          justifyContent="center"
          gap={-3}
          flexDirection="column" */
`;
