import { cylinder, union } from "scad-js";
import {
  negativeDiameter,
  negativeHeight,
  negativeSpacing,
} from "../constants.js";

function row(offset, rotation) {
  const params = { $fn: 6 }
  const children = [
    cylinder(negativeHeight, negativeDiameter / 2, params).rotate_x(90).debug(),
    cylinder(negativeHeight, negativeDiameter / 2, params)
      .rotate_x(90)
      .rotate_z(-45),
    cylinder(negativeHeight, negativeDiameter / 2, params)
      .rotate_x(90)
      .rotate_z(-22.5),
    cylinder(negativeHeight, negativeDiameter / 2, params)
      .rotate_x(90)
      .rotate_z(45),
    cylinder(negativeHeight, negativeDiameter / 2, params)
      .rotate_x(90)
      .rotate_z(22.5),
    cylinder(negativeHeight, negativeDiameter / 2, params)
      .rotate_x(90)
      .rotate_z(90),
    cylinder(negativeHeight, negativeDiameter / 2, params)
      .rotate_x(90)
      .rotate_z(90 - 22.5),
    cylinder(negativeHeight, negativeDiameter / 2, params)
      .rotate_x(90)
      .rotate_z(90 + 22.5),
  ];

  return union(...children)
    .translate_z(offset)
    .rotate_z(rotation);
}

export default function (height = 50) {
  const rows = [];
  const rowHeight = negativeDiameter + negativeSpacing;
  const totalRows = Math.floor(height / rowHeight);

  for (let i = 0; i < totalRows; i++) {
    const offset = (negativeDiameter + negativeSpacing) * i;
    const rotation = 12.25 * i;
    rows.push(row(offset, rotation));
  }

  return union(...rows).translate_z(((totalRows * rowHeight) / 2) * -1);
}
