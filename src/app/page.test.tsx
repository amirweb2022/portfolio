import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("home page", () => {
  it("renders the main content landmark", () => {
    render(<Home />);

    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
