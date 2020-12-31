import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import messages from "./messages";
import App from "./App";

const locale = "fr";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  rootElement
);
