import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

test("when user is not signed in, sign in and sign up are visible", async () => {});

test("when user is not signed in, sign out is not visible", async () => {});

test("when user is signed in, sign in and sign up are not visible", async () => {});

test("when user is signed in, sign out is visible", async () => {});
