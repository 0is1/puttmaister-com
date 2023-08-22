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

export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Text = styled.span`
  display: none;
  margin-top: 0.25rem;
  @media (min-width: 768px) {
    display: block;
    font-size: 0.75rem;
  }
`;
