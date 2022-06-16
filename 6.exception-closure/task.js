//1

function parseCount(arg) {
   let parseIt = Number.parseInt(arg);
    if (isNaN(parseIt)) {
        throw new Error('Невалидное значение');
    }
    
    return parseIt;
};

function validateCount(arg) {
    
    try{
      return parseCount(arg);
    } catch(error) {
        return error;
    }
}

//2


class Triangle {
    constructor(aSide, bSide, cSide) {
        this.aSide = aSide;
        this.bSide = bSide;
        this.cSide = cSide;

        if (((aSide + bSide) < cSide)||((bSide + cSide) < aSide)||((aSide + cSide) < bSide)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    
     
    getPerimeter() {
        let perimeter = this.aSide + this.bSide + this.cSide;
        return perimeter;        
    }

    getArea() {
        let p = (this.aSide + this.bSide + this.cSide)/2;
        let s = Math.sqrt(p*(p - this.aSide)*(p - this.bSide)*(p - this.cSide));
        return Number(s.toFixed(3));
    }

}

function getTriangle(aSide, bSide, cSide) {
    try {        
        return new Triangle(aSide, bSide, cSide);
    } 
    catch(error) {        
        return {
        getPerimeter() {
            return  'Ошибка! Треугольник не существует';
        },
    
        getArea() {
            return 'Ошибка! Треугольник не существует';
        },
    }
    }
}