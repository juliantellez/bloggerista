import * as React from "react";

import IMainLayout from "../../Interfaces/Layout/IMain";

class Main extends React.Component<IMainLayout> {
  generateMarkup() {
    if (!this.props.markup) return null;
    return <div dangerouslySetInnerHTML={{ __html: this.props.markup }} />;
  }

  render() {
    return (
      <main>
        {this.props.children}
        {this.generateMarkup()}
      </main>
    );
  }
}

export default Main;
