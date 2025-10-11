let fibs = []

function fibsCalc(n) {
  if (n == 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  fibs = fibsCalc(n - 1)
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])
  return fibs;
  
}

console.log(fibsCalc(20))