import { render } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  // Render the component
  const users = [
    { name: "omer", email: "omer@omer.com" },
    { name: "nihal", email: "nihal@nihal.com" },
  ];
  const { container } = render(<UserList users={users} />);

  // Find all the rows in the table
  //eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {});
