import React from "react";
import { FormattedMessage } from "react-intl";
import { H2, P } from "components/Typography";
import InjectMessageIfExists from "components/InjectMessageIfExists";
import {
  Container,
  ImageContainer,
  ImageWrapper,
  FeatureImage
} from "./styles";

const FrontPage = () => {
  return (
    <Container>
      <H2 textAlign="left">
        <FormattedMessage id="frontPageSectionOneTitle" />
      </H2>
      <P>
        <FormattedMessage id="frontPageSectionOne" />
      </P>
      <InjectMessageIfExists id="frontPageSectionTwoTitle">
        <H2 textAlign="left">
          <FormattedMessage id="frontPageSectionTwoTitle" />
        </H2>
      </InjectMessageIfExists>
      <InjectMessageIfExists id="frontPageSectionTwo">
        <P>
          <FormattedMessage id="frontPageSectionTwo" />
        </P>
      </InjectMessageIfExists>
      <ImageContainer>
        <ImageWrapper>
          <P strong padding="0" margin="1rem 0 0.5rem">
            <FormattedMessage id="imageHomeText" />
          </P>
          <FormattedMessage id="imageHome">
            {src => <FeatureImage src={src} alt="Putt Maister" />}
          </FormattedMessage>
        </ImageWrapper>
        <ImageWrapper>
          <P strong padding="0" margin="1rem 0 0.5rem">
            <FormattedMessage id="imageHomePractiseModeText" />
          </P>
          <FormattedMessage id="imageHomePractiseMode">
            {src => <FeatureImage src={src} alt="Putt Maister practise mode" />}
          </FormattedMessage>
        </ImageWrapper>
      </ImageContainer>
      <ImageContainer>
        <ImageWrapper>
          <P strong padding="0" margin="1rem 0 0.5rem">
            <FormattedMessage id="imageStatsText" />
          </P>
          <FormattedMessage id="imageStats">
            {src => <FeatureImage src={src} alt="Putt Maister stats" />}
          </FormattedMessage>
        </ImageWrapper>
        <ImageWrapper>
          <P strong padding="0" margin="1rem 0 0.5rem">
            <FormattedMessage id="imageStatsSummaryText" />
          </P>
          <FormattedMessage id="imageStatsSummary">
            {src => <FeatureImage src={src} alt="Putt Maister stats summary" />}
          </FormattedMessage>
        </ImageWrapper>
      </ImageContainer>
      <InjectMessageIfExists id="frontPageSectionThreeTitle">
        <H2 textAlign="left">
          <FormattedMessage id="frontPageSectionThreeTitle" />
        </H2>
      </InjectMessageIfExists>
      <InjectMessageIfExists id="frontPageSectionThree">
        <P>
          <FormattedMessage
            id="frontPageSectionThree"
            values={{
              email: (
                <a href="mailto:hello@puttmaister.com" target="_top">
                  hello@puttmaister.com
                </a>
              )
            }}
          />
        </P>
      </InjectMessageIfExists>

      <InjectMessageIfExists id="frontPageSectionFourTitle">
        <H2 textAlign="left">
          <FormattedMessage id="frontPageSectionFourTitle" />
        </H2>
      </InjectMessageIfExists>
      <InjectMessageIfExists id="frontPageSectionFour">
        <P>
          <FormattedMessage id="frontPageSectionFour" />
        </P>
      </InjectMessageIfExists>
    </Container>
  );
};

export default FrontPage;
