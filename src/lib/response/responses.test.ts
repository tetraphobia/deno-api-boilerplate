import { testing } from "oak";
import { assertEquals } from "std/testing/asserts.ts";
import { notFound } from "./responses.ts";

Deno.test("lib/response/responses.ts", async (test) => {
  await test.step("notFound()", () => {
    const context = testing.createMockContext({
      path: "/",
    });

    notFound(context);
    assertEquals(
      context.response.status,
      404,
    );
    assertEquals(
      context.response.body,
      {
        message: "Not found.",
      },
    );
  });
});
