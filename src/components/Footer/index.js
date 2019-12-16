import React from "react";
import { FooterContainer, FooterWrapper, Image } from "./styles";

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Image src="/app-store-badge.png" />
      <Image src="/google-play-badge.png" />
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
