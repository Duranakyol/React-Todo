import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Todo from ".";

describe("Todo Tests", () => {
  let button, input;

  beforeEach(() => {
    console.log("Vor alle Testen arbeitet!");
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getAllByLabelText("Todo");
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
  test("default value", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });
});
