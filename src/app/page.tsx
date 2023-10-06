"use client";

import QuoteBox from "@/components/QuoteBox";
import StandardPageWrapper from "@/components/StandardPageWrapper";
import { Heading, Par, StyledLink } from "@/components/StyledSmalls";

export default function Home() {
  return (
    <StandardPageWrapper>
      <Heading>heading lol</Heading>
      <hr />
      <Par>(some text)</Par>
      <QuoteBox>a quote or something</QuoteBox>
      <ul>
        <li>
          - <StyledLink href="https://www.google.com">google</StyledLink>
        </li>
      </ul>
    </StandardPageWrapper>
  );
}
