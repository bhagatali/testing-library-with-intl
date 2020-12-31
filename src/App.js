import React from "react";
import { injectIntl } from "react-intl";
import "./styles.css";

const App = ({ intl }) => {
  return (
    <div className="App">
      {intl.formatMessage({ id: "name" })}
      <h1>Hello CodeSandbox</h1>
    </div>
  );
};

export { App as AppRaw };

const AppHOC = injectIntl(App);
export default AppHOC;
