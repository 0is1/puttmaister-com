import styled from "@emotion/styled";
import { MD_BREAKPOINT } from "helpers/variables";

export const H1 = styled.h1`
  color: ${props => (props.color ? props.color : "inherit")};
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin: ${props => (props.margin ? props.margin : "3rem 0")};
  padding: ${props => (props.padding ? props.padding : "0 0.75rem")};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  text-transform: uppercase;
  @media (min-width: ${MD_BREAKPOINT}) {
    font-size: 2.75rem;
  }
`;
export const H2 = styled.h2`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  margin: 2.5rem 0 1rem;
  padding: 0 1.25rem;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  text-transform: uppercase;
  @media (min-width: ${MD_BREAKPOINT}) {
    font-size: 2.5rem;
    padding: 0;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  font-weight: ${props => (props.strong ? "bold" : "normal")};
  letter-spacing: 0.3px;
  line-height: 1.75;
  margin: ${props => (props.margin ? props.margin : "1rem 0")};
  padding: ${props => (props.padding ? props.padding : "0 1.25rem")};
  @media (min-width: ${MD_BREAKPOINT}) {
    font-size: 1.2rem;
    padding: 0;
  }
`;

export const PSmall = styled(P)`
  font-size: 0.7rem;
  @media (min-width: ${MD_BREAKPOINT}) {
    font-size: 1rem;
  }
`;

export const HR = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin: 2rem auto;
  width: 90%;
`;
