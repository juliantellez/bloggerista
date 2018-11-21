import * as React from "react";

import Header from "../Layout/Header";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";

class HtmlBody extends React.Component {
  render() {
    return (
      <body>
        <Header {...this.props} />
        <Main {...this.props} />
        <Footer {...this.props} />
      </body>
    );
  }
}

export default HtmlBody;
