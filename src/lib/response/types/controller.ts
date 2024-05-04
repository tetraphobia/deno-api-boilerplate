import { oak } from "../../../../deps.ts";

export interface ControllerContext extends oak.Context {
  params: oak.RouteParams<string>;
}
