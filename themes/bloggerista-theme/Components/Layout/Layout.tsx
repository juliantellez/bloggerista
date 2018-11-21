import * as React from "react";

import Html from "../Html/Html";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ILayout from "../../Interfaces/Layout/ILayout";

class Layout extends React.Component<ILayout> {
  render() {
    return (
      <Html {...this.props}>
        <Header {...this.props} />
        <Main {...this.props} />
        <Footer {...this.props} />
      </Html>
    );
  }
}

export default Layout;
