// @styled-component
import styled from "styled-components";

// @type
interface ScrollButtonProps {
  showButton: boolean;
}

//----------------------------------------------------------

export const ScrollButtonWrapper = styled.div<ScrollButtonProps>`
  position: fixed;
  bottom: 25px;
  right: 25px;

  width: 74px;
  height: 74px;
  background: red;
  color: white;

  text-transform: uppercase;
  text-align: center;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;

  cursor: pointer;

  opacity: ${({ showButton }) => (showButton ? 100 : 0)};
  transform: scale(${({ showButton }) => (showButton ? 1 : 0)});
  transition: all 0.4s ease-in;

  z-index: 100;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 3px;
  }
`;
