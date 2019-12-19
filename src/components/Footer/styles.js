import styled from "@emotion/styled";
import { LG_BREAKPOINT } from "helpers/variables";
import { white } from "constants/colors";

export const FooterContainer = styled.footer`
  background: ${white};
  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.4);
`;
export const FooterWrapper = styled.div`
  align-items: center;
  padding: 1.45rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: ${LG_BREAKPOINT}) {
    flex-direction: row;
  }
`;

export const A = styled.a`
  padding: 0.25rem;
`;

export const Image = styled.img`
  max-width: 175px;
  width: 100%;
`;
