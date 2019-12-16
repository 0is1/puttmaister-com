import React from "react";
import { Container, Wrapper } from "components/Container";
import Layout from "layouts/fi";
// import FrontPage from "components/FrontPage";

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
