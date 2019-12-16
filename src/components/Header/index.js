// @flow
import React from "react";
import { Link } from "gatsby";
import { FormattedMessage } from "react-intl";
import SelectLanguage from "components/SelectLanguage";
import type { Langs } from "components/SelectLanguage/types";
import { H1, PSmall } from "components/Typography";
import { HeaderContainer, HeaderWrapper, Image, TitleWrapper } from "./styles";

type Props = {
  langs: Langs
};

const Header = (props: Props) => (
  <HeaderContainer>
    <HeaderWrapper>
      <Link to={"/"}>
        <Image src="/logo-small.png" alt="logo" />
      </Link>
      <TitleWrapper>
        <H1 color="#ffffff" margin="0" padding="0" textAlign="left">
          <FormattedMessage id="siteMainTitle" />
        </H1>
        <PSmall margin="0" padding="0">
          <FormattedMessage id="siteSubTitle" />
        </PSmall>
      </TitleWrapper>

      <SelectLanguage langs={props.langs} />
    </HeaderWrapper>
  </HeaderContainer>
);

export default Header;
