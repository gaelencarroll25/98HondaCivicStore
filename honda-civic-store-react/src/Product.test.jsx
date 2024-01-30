import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Product from "./Product";

describe("Product Component", () => {
  it("Renders", async () => {
    render(<Product></Product>);
    await waitFor(() => expect(screen.getByText(/Honda/i)).toBeInTheDocument());
  });
});
