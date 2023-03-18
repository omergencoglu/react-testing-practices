import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("omer");
  user.click(emailInput);
  user.keyboard("omer@omer.com");

  user.click(button);

  const name = await screen.findByRole("cell", { name: "omer" });
  const email = await screen.findByRole("cell", { name: "omer@omer.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
