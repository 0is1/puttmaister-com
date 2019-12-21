import styled from "@emotion/styled";
import { white } from "constants/colors";

export const FooterContainer = styled.footer`
  background: ${white};
  bottom: 0;
  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.4);
  left: 0;
  position: fixed;
  right: 0;
  z-index: 9;
`;
export const FooterWrapper = styled.div`
  align-items: center;
  padding: 0.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: row;
`;

export const A = styled.a`
  padding: 0.25rem;
`;

export const Image = styled.img`
  max-width: 175px;
  width: 100%;
`;
