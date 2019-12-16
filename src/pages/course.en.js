import React from "react";
import { Container, Wrapper } from "components/Container";
import Layout from "layouts/en";

export default props => {
  return (
    <Layout location={props.location}>
      <Container>
        <Wrapper>
          <h1>Rata</h1>
        </Wrapper>
      </Container>
    </Layout>
  );
};
