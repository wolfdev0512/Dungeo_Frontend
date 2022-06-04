import styled from "styled-components";

// -----------------------------------------------------------

export const Layout = styled.div`
  width: 100vw;

  margin-bottom: 120px;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  text-align: center;

  font-size: 56px;
  font-weight: 800;
  color: white;

  margin-bottom: 50px;

  @media screen and (max-width: 1250px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
export const Questions = styled.div`
  display: flex;
  justify-content: center;
`;
export const QuestionItem = styled.div`
  width: 80%;
  padding: 30px 25px;
  background: linear-gradient(
    270deg,
    rgba(20, 29, 44, 0.5),
    rgba(2, 12, 26, 0)
  );

  @media screen and (max-width: 1250px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Question = styled.div`
  font-size: 28px;
  line-height: 36px;
  color: #f05a28;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 26px;
    text-align: center;
  }
  @media screen and (max-width: 370px) {
    font-size: 24px;
  }
`;
export const Answer = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #fff;
  opacity: 0.7;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 370px) {
    font-size: 12px;
  }
`;
