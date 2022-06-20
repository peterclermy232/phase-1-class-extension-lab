// Your code here
class Polygon {
    constructor(integerArray) {
        this.sides = integerArray;
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        return this.sides.reduce(getSum, 0);
    }
}
function getSum(total, num) {
    return total + num;
}
class Triangle extends Polygon {
    get isValid() {
        if (this.countSides == 3 && this.sides[0] == this.sides[1] && this.sides[2] == this.sides[1]) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Square extends Polygon {
    get isValid() {
        if (this.countSides == 4 && this.sides[0] == this.sides[1] && this.sides[2] == this.sides[1] && this.sides[2] == this.sides[3]) {
            return true;
        }
        else {
            return false;
        }
    }
    get area() {
        return Math.pow(this.sides[0], 2);
    }
}
let integerArray = [1, 3, 5];
let figu = new Triangle(integerArray);
console.log(figu.isValid)
