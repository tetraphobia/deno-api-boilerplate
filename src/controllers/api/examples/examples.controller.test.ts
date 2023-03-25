import { testing } from "oak";
import { assertEquals } from "std/testing/asserts.ts";
import { ExamplesController } from "./examples.controller.ts";

Deno.test("Examples Controller", async (test) => {
  await test.step("GET /api/examples", () => {
    const context = testing.createMockContext({
      path: "/api/examples",
    });

    ExamplesController.getAll(context);

    assertEquals(
      typeof context.response.body,
      "object",
    );
    assertEquals(
      context.response.status,
      200,
    );
    assertEquals(
      context.response.headers.get("content-type"),
      "application/json",
    );
  });

  await test.step("GET /api/examples/1", () => {
    const context = testing.createMockContext({
      path: "/api/examples/1",
      params: {
        id: "1",
      },
    });

    ExamplesController.getOne(context);

    assertEquals(
      typeof context.response.body,
      "object",
    );
    assertEquals(
      context.response.status,
      200,
    );
    assertEquals(
      context.response.headers.get("content-type"),
      "application/json",
    );
  });

  await test.step("GET /api/examples/invalid", () => {
    const context = testing.createMockContext({
      path: "/api/examples/invalid",
      params: {
        id: "invalid",
      },
    });

    ExamplesController.getOne(context);

    assertEquals(
      typeof context.response.body,
      "object",
    );
    assertEquals(
      context.response.status,
      404,
    );
    assertEquals(
      context.response.headers.get("content-type"),
      "application/json",
    );
    assertEquals(
      context.response.body,
      {
        message: "Not found.",
      },
    );
  });
});
