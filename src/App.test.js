import React from "react";
import { render } from "./test-utils";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

test("test app componet", () => {
  const { getByText } = render(<App />);
  expect(getByText("French Name")).toBeInTheDocument();
});
