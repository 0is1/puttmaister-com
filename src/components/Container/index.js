import styled from "@emotion/styled";
import { MD_BREAKPOINT } from "helpers/variables";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0;
  @media (min-width: ${MD_BREAKPOINT}) {
    padding: 1rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 100vw;
  @media (min-width: ${MD_BREAKPOINT}) {
    max-width: 70vw;
  }
`;

export default Container;
