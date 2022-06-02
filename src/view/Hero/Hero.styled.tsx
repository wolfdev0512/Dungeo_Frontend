import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100vw;

  padding: 150px 0px;

  display: flex;
  justify-content: center;

  background: black;
`;

export const MainLayout = styled.div``;

export const Collection = styled.div`
  color: #f05a28;
  font-size: 18px;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  color: white;
  font-size: 56px;
`;

export const Button = styled.div`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 20px;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  padding: 0px 45px 0px 35px;

  background: #141d2c;
  &:hover {
    background: #f05a28;
  }
`;

export const Row = styled.div`
  margin-top: 30px;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 25px;
  }
`;
