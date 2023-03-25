import { testing } from "oak";
import { assertEquals } from "std/testing/asserts.ts";
import { setJsonHeaders } from "./headers.ts";

Deno.test("lib/response/headers.ts", async (test) => {
  await test.step("setJsonHeaders()", () => {
    const context = testing.createMockContext({
      path: "/",
    });

    setJsonHeaders(context);

    assertEquals(
      context.response.headers.get("content-type"),
      "application/json",
    );
  });
});
