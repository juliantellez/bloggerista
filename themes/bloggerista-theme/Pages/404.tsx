import * as React from "react";

import Layout from "../Components/Layout/Layout";

import ILayout from "../Interfaces/Layout/ILayout";

class NotFoundPage extends React.Component<ILayout> {
  render() {
    return <Layout {...this.props}>404!! page not found</Layout>;
  }
}

export default NotFoundPage;
