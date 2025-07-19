import { sum } from "../../../src/utils/sum";

test("sum add two positive numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum add one positive and one negative number", () => {
  expect(sum(-10, 2)).toBe(-8);
});
