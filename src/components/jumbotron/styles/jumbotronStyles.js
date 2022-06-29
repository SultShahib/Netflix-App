import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Inner = styled.section`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600x) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100px;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;

    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
