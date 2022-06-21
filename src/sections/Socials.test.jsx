import { render, screen } from "@testing-library/react";

import { Socials } from "sections/Socials";

test("renders heading", () => {
  render(<Socials />);
  const linkElement = screen.getByText(/socials/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders lindedin", () => {
  render(<Socials />);
  const linkElement = screen.getByText(/linkedin/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders github", () => {
  render(<Socials />);
  const linkElement = screen.getByText(/github/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders kofi", () => {
  render(<Socials />);
  const linkElement = screen.getByText(/ko-?fi/i);
  expect(linkElement).toBeInTheDocument();
});
