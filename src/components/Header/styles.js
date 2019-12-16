import styled from "@emotion/styled";
import { themeColor } from "constants/colors";
import { LG_BREAKPOINT, SM_BREAKPOINT } from "helpers/variables";
export const HeaderContainer = styled.header`
  background: ${themeColor};
  box-shadow: 0px -1px 4px 1px rgba(0, 0, 0, 0.4);
`;
export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 0.5rem 0 0;
  @media (min-width: ${LG_BREAKPOINT}) {
    padding: 0;
    width: 60%;
  }
`;

export const Image = styled.img`
  max-width: 10vw;
  width: 100%;
  @media (max-width: ${SM_BREAKPOINT}) {
    display: none;
  }
`;
