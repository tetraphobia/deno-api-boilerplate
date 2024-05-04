import { oak } from "../../../deps.ts";
import { assert } from "../../../deps.ts";
import { notFound } from "./responses.ts";

Deno.test("lib/response/responses.ts", async (test) => {
  await test.step("notFound()", () => {
    const context = oak.testing.createMockContext({
      path: "/",
    });

    notFound(context);
    assert.assertEquals(
      context.response.status,
      404,
    );
    assert.assertEquals(
      context.response.body,
      {
        message: "Not found.",
      },
    );
  });
});
