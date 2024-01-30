import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import NavigationBar from "./NavigationBar";
import { BrowserRouter } from "react-router-dom";

describe("Navigation Bar Component", () => {
  it("Renders", () => {
    render(
      <BrowserRouter>
        <NavigationBar></NavigationBar>
      </BrowserRouter>
    );
    let element = screen.getByText(/Accessories/i);
    expect(element).toBeInTheDocument();
  });
});
