import React from "react";
import {
  A,
  Column,
  FooterContainer,
  FooterWrapper,
  Image,
  Row,
} from "./styles";

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Column>
        <Row>
          <A href="https://apps.apple.com/us/app/putt-maister/id1491779432?l=fi&ls=1">
            <Image
              src="/app-store-badge.png"
              style={{ border: "0px", height: "36px", maxWidth: "120px" }}
            />
          </A>
          <A href="https://play.google.com/store/apps/details?id=com.puttmaister.app">
            <Image
              src="/google-play-badge.png"
              style={{ border: "0px", height: "48px", maxWidth: "120px" }}
            />
          </A>
        </Row>
        <Row>
          <A
            href="https://ko-fi.com/A0A3O015J"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height="36"
              style={{ border: "0px", height: "36px", maxWidth: "120px" }}
              src="https://storage.ko-fi.com/cdn/kofi4.png?v=3"
              border="0"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </A>
        </Row>
      </Column>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
