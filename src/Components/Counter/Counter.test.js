import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    console.log("Vor alle Testen arbeitet!");
    render(<Counter />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    count = screen.getByText("0");
  });
  beforeAll(() => {
    console.log("Am Anfang nur einmal arbeitet!");
  });
  afterEach(() => {
    console.log("Nach alle Testen arbeitet!");
  });
  afterAll(() => {
    console.log("Am Ende nur einmal arbeitet!");
  });
  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
