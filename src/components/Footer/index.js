import React from "react";
import {
  Column,
  FooterContainer,
  FooterWrapper,
  Image,
  A,
  Text,
} from "./styles";

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <A href="https://apps.apple.com/us/app/putt-maister/id1491779432?l=fi&ls=1">
        <Image src="/app-store-badge.png" />
      </A>
      <A href="https://play.google.com/store/apps/details?id=com.puttmaister.app">
        <Image src="/google-play-badge.png" />
      </A>
      <A
        href="https://ko-fi.com/puttmaister"
        title="Buy me a coffee!"
        target="_blank"
      >
        <Column>
          <Image src="/ko-fi.webp" style={{ width: "55px", height: "36px" }} />
          <Text>ko-fi.com/puttmaister</Text>
        </Column>
      </A>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
