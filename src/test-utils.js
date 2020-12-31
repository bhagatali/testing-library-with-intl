import React from "react";
import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";

import messages from "./messages";

const locale = "fr";
const Wrapper = ({ children }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

const testRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { testRender as render };
