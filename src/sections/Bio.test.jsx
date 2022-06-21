import { render, screen } from "@testing-library/react";

import { Bio } from "sections/Bio";

test("renders heading", () => {
  render(<Bio />);
  const linkElement = screen.getByText(/bio/i);
  expect(linkElement).toBeInTheDocument();
});
