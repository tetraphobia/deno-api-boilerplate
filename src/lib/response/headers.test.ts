import { oak } from "../../../deps.ts";
import { assert } from "../../../deps.ts";
import { setJsonHeaders } from "./headers.ts";

Deno.test("lib/response/headers.ts", async (test) => {
  await test.step("setJsonHeaders()", () => {
    const context = oak.testing.createMockContext({
      path: "/",
    });

    setJsonHeaders(context);

    assert.assertEquals(
      context.response.headers.get("content-type"),
      "application/json",
    );
  });
});
