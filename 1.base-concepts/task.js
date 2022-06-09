'use strict';
function solveEquation(a, b, c) {
  let arr=[];
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
  let totalAmount, monthlyAmount;
  const now = new Date();
  let n = (date.getFullYear() - now.getFullYear())*12 + Math.abs(date.getMonth() - now.getMonth());
  let S = amount - contribution;
  let P = ((percent)/100)/12;
  

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  if (date <= now) {
    return `Параметр "Дата" содержит неправильное значение "${date}"`;
  }

  monthlyAmount = S*(P + (P/((Math.pow((1 + P) , n)) - 1)));  
  totalAmount = monthlyAmount*n;
  return +totalAmount.toFixed(2);
}
