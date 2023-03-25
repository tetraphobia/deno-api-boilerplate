import type { ControllerContext } from "lib/response/mod.ts";

import { notFound, setJsonHeaders } from "lib/response/mod.ts";
import Examples from "../../../models/api/examples/examples.model.ts";


export class ExamplesController {
  public static getAll(context: ControllerContext): void {
    const result = Examples.findAll();
    setJsonHeaders(context);

    context.response.body = result;
  }

  public static getOne(context: ControllerContext): void {
    const result = Examples.findOne(context.params.id);
    setJsonHeaders(context);

    if (!result) {
      return notFound(context);
    }

    context.response.body = result;
  }
}
