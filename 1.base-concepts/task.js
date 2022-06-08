'use strict';
function solveEquation(a, b, c) {
  let arr;
  let d = Math.pow(b, 2) - 4*a*c;

  if (d < 0) {
    return arr = [];
  } else if (d === 0) {
    return arr = [(-b)/(2*a)];
  } else if (d > 0) {
    return arr = [(-b + Math.sqrt(d))/(2*a), (-b - Math.sqrt(d) )/(2*a)];
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  const now = new Date();
  let n = (date.getFullYear() - now.getFullYear())*12 + Math.abs(date.getMonth() - now.getMonth());
  let S = amount - contribution;
  let P = ((percent)/12)/100;
  console.log(P);
  let monthlyAmount;

  if (P > 0 && P < 1) {
    monthlyAmount = S*(P + (P/((Math.pow((1 + P) , n)) - 1)));  
  }

  console.log(monthlyAmount);
  
  totalAmount = monthlyAmount*n;
  return totalAmount.toFixed(2);
}
