"use client";

import StandardPageWrapper from "@/components/StandardPageWrapper";
import { Heading } from "@/components/StyledSmalls";
import BubbleMaker from "@/lib/BubbleMaker";
import { useEffect, useState } from "react";

export default function Home() {
  const [numProblems, setNumProblems] = useState(0);
  const [numMembers, setNumMembers] = useState(1);

  return (
    <StandardPageWrapper>
      <Heading>thing lol</Heading>
      <hr /># of problems:{" "}
      <input
        type="number"
        step={1}
        value={numProblems.toString()}
        onChange={(e) => setNumProblems(+e.target.value)}
      />
      <br /># of group members:{" "}
      <input
        type="number"
        step={1}
        value={numMembers.toString()}
        onChange={(e) => setNumMembers(+e.target.value)}
      />
      <BubbleMaker problems={numProblems} members={numMembers}></BubbleMaker>
    </StandardPageWrapper>
  );
}
