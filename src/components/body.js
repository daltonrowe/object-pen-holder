import { cube, difference } from "scad-js";
import {
  bodyDiameter,
  bodyHeight,
  bodyOuterDiameter,
  bodyThickness,
} from "../constants.js";

export default function () {
  return difference(
    cube([bodyOuterDiameter / 2, bodyOuterDiameter / 2, bodyHeight]),
    cube([bodyDiameter / 2, bodyDiameter / 2, bodyHeight]).translate_z(
      bodyThickness,
    ),
  );
}
