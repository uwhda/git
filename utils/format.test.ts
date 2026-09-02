/// <reference types="node" />

import assert from "node:assert/strict";
import { test } from "node:test";

import { formatDate } from "./format.ts";

test("formats a local date as YYYY-MM-DD", () => {
  assert.equal(formatDate(new Date(2024, 0, 5)), "2024-01-05");
});
