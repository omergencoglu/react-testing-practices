import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  // Render the component
  const users = [
    { name: "omer", email: "omer@omer.com" },
    { name: "nihal", email: "nihal@nihal.com" },
  ];
  render(<UserList users={users} />);

  // Find all the rows in the table

  // Assertion: correct number of rows in the table
});

test("render the email and name of each user", () => {});
