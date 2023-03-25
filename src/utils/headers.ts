import { ControllerContext } from "../types/controller.ts";

export function setJsonHeaders(context: ControllerContext): ControllerContext {
  context.response.headers.set("content-type", "application/json");
  return context
}
