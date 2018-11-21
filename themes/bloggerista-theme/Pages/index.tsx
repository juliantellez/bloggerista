import * as React from "react";

import Layout from "../Components/Layout/Layout";

import ILayout from "../Interfaces/Layout/ILayout";


class IndexPage extends React.Component<ILayout> {
  render() {
    return (
      <Layout {...this.props}>
        this is the main page!
      </Layout>
    );
  }
}

export default IndexPage;
