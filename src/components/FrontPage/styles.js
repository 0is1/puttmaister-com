import styled from "@emotion/styled";
import { LG_BREAKPOINT } from "helpers/variables";
import { themeColor } from "constants/colors";

export const Container = styled.div`
  padding-bottom: 4rem;
  @media (min-width: ${LG_BREAKPOINT}) {
    padding-bottom: 2rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  @media (min-width: ${LG_BREAKPOINT}) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1rem;
  margin-top: 2rem;
  width: 90%;
  @media (min-width: ${LG_BREAKPOINT}) {
    margin-top: 0;
    width: 45%;
  }
`;
export const FeatureImage = styled.img`
  border: 1px solid ${themeColor};
  width: 100%;
`;
