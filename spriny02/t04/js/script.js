
function solver(a, b, c, d, e) {
  if (isNaN(a) || isNaN(b) || isNaN (c) || isNaN (d) || isNaN (e))
     return "Wrong input";
     else return x = (Math.pow(a,2) - (5 * b * c) + (d / 3) + e).toFixed(2)  ;
  }
  // alert (solver (40, -9, 0.5, 7, 100) );
  // alert (solver (40, "doesn't look like a number", 0.5, 7, 100));
// alert (solver (40, -9, 0.5, 7));
  