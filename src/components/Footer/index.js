import React from "react";
import { FooterContainer, FooterWrapper, Image, A } from "./styles";

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <A href="https://apps.apple.com/us/app/putt-maister/id1491779432?l=fi&ls=1">
        <Image src="/app-store-badge.png" />
      </A>
      <A href="https://play.google.com/store/apps/details?id=com.puttmaister.app">
        <Image src="/google-play-badge.png" />
      </A>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
