import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // Render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is behaving as expected
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", () => {
  // Try to render component
  render(<UserForm />);

  // Find the two inputs
  const inputs = screen.getAllByRole("textbox");
  // Simulate typing in a name
  // Simulate typing in an email
  // Find the button
  // Simulate clicking the button
  // Assertion to make sure "onUserAdd" gets called with email/name
});
