import { Context, RouteParams } from "oak";

export interface ControllerContext extends Context {
    params: RouteParams<string>
}