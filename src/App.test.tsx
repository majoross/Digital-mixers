import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const welcomeText = screen.getByText("Welcome to");
  const h1 = screen.getByText("Digital Mixers");
  expect(welcomeText).toBeInTheDocument();
  expect(h1).toBeInTheDocument();
});
