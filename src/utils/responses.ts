import { ControllerContext } from "../types/controller.ts";

export function notFound(context: ControllerContext): void {
    context.response.status = 404
    context.response.body = {
        message: "Not found."
    }
}