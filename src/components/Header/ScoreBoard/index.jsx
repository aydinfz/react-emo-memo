import React from "react";
import styled from "styled-components";
import { useGlobal } from "../../../context/GlobalContext";

export function ScoreBoard() {
  const { score, bestScore, lvl } = useGlobal();
  return (
    <StyledBoard>
      <Level> Level:{lvl}</Level>
      <Divider />
      <Scores>
        <Score> Score:{score} </Score>
        <Best> Best:{bestScore} </Best>
      </Scores>
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px 10px 0 10px;
  margin-left: 2rem;
  @media (max-width: 425px) {
    font-size: 8px;
    margin-top: -20px;
  }
  @media (max-width: 600px) and (min-width: 425px) {
    font-size: 12px;
    margin: 12px 0 0 0;
    padding: 0;
  }
`;

const Scores = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const Score = styled.p`
  //color: #f0ff64;
`;
const Divider = styled.div`
  height: 32px;
  width: 1px;
  background-color: #ff5756;
  margin: 0 10px;
`;
const Best = styled.p`
  // color: #ff8c3a;
`;

const Level = styled.p`
  color: white;
  font-size: 24px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
