$fn = 100;
difference()
{
  cube(size = [14.5, 14.5, 70], center = true);
  translate(v = [0, 0, 2])
  {
    cube(size = [12.5, 12.5, 70], center = true);
  }
}
