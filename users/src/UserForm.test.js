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
  //not the best implementation;
  const arglist = [];
  const callback = (...args) => {
    arglist.push(args);
  };

  // Try to render component
  render(<UserForm onUserAdd={callback} />);

  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // Simulate typing in a name
  user.click(nameInput);
  user.keyboard("omer");

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard("omer@omer.com");

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  user.click(button);

  // Assertion to make sure "onUserAdd" gets called with email/name
  expect(arglist).toHaveLength(1);
  expect(arglist[0][0]).toEqual({ name: "omer", email: "omer@omer.com" });
});
