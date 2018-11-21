import * as React from "react";

import IHtmlHead from "../../Interfaces/Html/IHtmlHead";

class HtmlHead extends React.Component<IHtmlHead> {
  renderRobots() {
    const content = this.props.noRobots ? "noindex, nofollow" : "index, follow";
    return <meta name="robots" content={content} />;
  }

  render() {
    return (
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {this.renderRobots()}

        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="keywords" content={this.props.keywords} />
      </head>
    );
  }
}

export default HtmlHead;
