import { oak } from "../../../../deps.ts";
import { assert } from "../../../../deps.ts";
import { ExamplesController } from "./examples.controller.ts";

const controllers = {
  examples: new ExamplesController(),
};

Deno.test("Examples Controller", async (test) => {
  await test.step("GET /api/examples", () => {
    const context = oak.testing.createMockContext({
      path: "/api/examples",
    });

    controllers.examples.getAll(context);

    assert.assertEquals(
      typeof context.response.body,
      "object",
    );
    assert.assertEquals(
      context.response.status,
      200,
    );
    assert.assertEquals(
      context.response.headers.get("content-type"),
      "application/json",
    );
  });

  await test.step("GET /api/examples/1", () => {
    const context = oak.testing.createMockContext({
      path: "/api/examples/1",
      params: {
        id: "1",
      },
    });

    controllers.examples.getOne(context);

    assert.assertEquals(
      typeof context.response.body,
      "object",
    );
    assert.assertEquals(
      context.response.status,
      200,
    );
    assert.assertEquals(
      context.response.headers.get("content-type"),
      "application/json",
    );
  });

  await test.step("GET /api/examples/invalid", () => {
    const context = oak.testing.createMockContext({
      path: "/api/examples/invalid",
      params: {
        id: "invalid",
      },
    });

    controllers.examples.getOne(context);

    assert.assertEquals(
      typeof context.response.body,
      "object",
    );
    assert.assertEquals(
      context.response.status,
      404,
    );
    assert.assertEquals(
      context.response.headers.get("content-type"),
      "application/json",
    );
    assert.assertEquals(
      context.response.body,
      {
        message: "Not found.",
      },
    );
  });
});
