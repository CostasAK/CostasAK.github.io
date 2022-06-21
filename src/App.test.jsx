import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders name", () => {
  render(<App />);
  const linkElement = screen.getByText(/costas a\. kokke/i);
  expect(linkElement).toBeInTheDocument();
});
