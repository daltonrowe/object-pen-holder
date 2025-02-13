import { difference } from "scad-js";
import body from "./components/body.js";
import negative from "./components/negative.js";
import { bodyHeight, bodyThickness } from "./constants.js";

export default function () {
  return difference(body(), negative(bodyHeight - 2).translate_z(bodyThickness - 1));
}
