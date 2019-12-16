import React from "react";
import { Container, Wrapper } from "components/Container";
import Layout from "layouts/en";
import FrontPage from "components/FrontPage";

export default props => {
  return (
    <Layout location={props.location}>
      <Container>
        <Wrapper>
          <FrontPage />
        </Wrapper>
      </Container>
    </Layout>
  );
};
