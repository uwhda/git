/// <reference types="node" />

import assert from "node:assert/strict";
import { test } from "node:test";

import { slugify } from "./slugify.ts";

test("converts text to a URL-friendly slug", () => {
  (slugify("  Hello, World!  "), "hello-world");
 (slugify("Crème brûlée"), "creme-brulee");
 (slugify("one---two___three"), "one-two-three");
  (slugify("你好 World"), "ni-hao-world");
});
