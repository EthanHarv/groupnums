"use client";

import StandardPageWrapper from "@/components/StandardPageWrapper";
import { Heading } from "@/components/StyledSmalls";
import BubbleMaker from "@/lib/BubbleMaker";
import { COLORS, SPACINGS } from "@/lib/constants";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [numProblems, setNumProblems] = useState(1);
  const [numMembers, setNumMembers] = useState(1);

  const [shuffle, setShuffle] = useState(0);

  return (
    <StandardPageWrapper>
      <Heading>thing lol</Heading>
      <hr /># of problems:{" "}
      <input
        type="number"
        step={1}
        min={1}
        pattern="\d*"
        value={numProblems.toString()}
        onChange={(e) => setNumProblems(+e.target.value)}
      />
      <br /># of group members:{" "}
      <input
        type="number"
        step={1}
        min={1}
        pattern="\d*"
        value={numMembers.toString()}
        onChange={(e) => setNumMembers(+e.target.value)}
      />
      <br />
      <StyledButton onClick={() => setShuffle(Math.random())}>
        shuffle
      </StyledButton>
      <BubbleMaker
        problems={numProblems}
        members={numMembers}
        seed={shuffle}
      ></BubbleMaker>
    </StandardPageWrapper>
  );
}

const StyledButton = styled.button`
  outline: 1px solid ${COLORS.text};
  padding: 4px 8px;
`;
