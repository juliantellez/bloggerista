import * as React from "react";

import HtmlHead from "./HtmlHead";

import IHtml from "../../Interfaces/Html/IHtml";

class Html extends React.Component<IHtml> {
  render() {
    return (
      <html>
        <HtmlHead {...this.props} />
        <body>{this.props.children}</body>
      </html>
    );
  }
}

export default Html;
