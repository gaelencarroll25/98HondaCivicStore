import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import NavigationItem from "./NavigationItem";
import { BrowserRouter } from "react-router-dom";

describe("Navigation Item Component", () => {
  it("Renders", () => {
    render(
      <BrowserRouter>
        <NavigationItem link="/product" title="Product"></NavigationItem>
      </BrowserRouter>
    );
    let element = screen.getByText(/Product/i);
    expect(element).toBeInTheDocument();
  });
});
