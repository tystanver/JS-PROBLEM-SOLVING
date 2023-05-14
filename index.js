// Write a C program to enter two numbers and find their sum.
const sum = (num1, num2) => {
    const total = num1 + num2;
    return total;
}
// Write a C program to enter two numbers and perform all arithmetic operations.
const arithmeticOperation = (num1, num2) => {
    total = num1 + num2;
    sum = num1 + num2;
    mod = num1 % num2;
    sub = num1 - num2;
    mult = num1 * num2;
    div = num1 / num2;

}
// problem 4
// Write a C program to enter length and breadth of a rectangle and find its perimeter.
const FindPerimeter = (length, breadth) => {
    const perimeter = length * 2 + breadth * 2;
    return perimeter;
}
// problem 5
// Write a C program to enter length and breadth of a rectangle and find its area.
const FindArea = (length, breadth) => {
    const area = length + breadth;
    return perimeter;
}
// problem 6
// Write a C program to enter radius of a circle and find its diameter, circumference and area.
const FindDCA = (radius) => {
    const diameter = 2 * radius;
    const circumference = 2 * radius;
    const area = radius * radius;
    return diameter;
}

// problem 7
// Write a C program to enter length in centimeter and convert it into meter and kilometer.
const convertLength = (cm) => {

    const meters = cm / 100;
    const kilometers = cm / 100000;

    return meters;
}
// problem 8
// Write a C program to enter temperature in Celsius and convert it into Fahrenheit.
const convertTemperature = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
// problem 9
// Write a C program to enter temperature in Fahrenheit and convert to Celsius
const convertTemperature2 = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
// Problem 10
// Write a C program to convert days into years, weeks and days.
const convertDays = (days) => {

    const years = (days / 365);
    const weeks = ((days % 365) / 7);

    return weeks;

}
// Problem 11
//   Write a C program to find power of any number x ^ y.
const findPower = (num1, num2) => {
    const result = Math.pow(num1, num2)
    return result;
}
// problem 12
// Write a C program to enter any number and calculate its square root.
const SquareRoot = (number) => {

    const squareRoot = Math.sqrt(number);
    return squareRoot;
}
//   problem 13
// Write a C program to enter two angles of a triangle and find the third angle.
const calculateThirdAngle = (angle1, angle2) => {

    const angle3 = 180 - (angle1 + angle2);
    return angle3;
}
// problem 13
// Write a C program to enter base and height of a triangle and find its area.
const findArea = (base, height) => {
    const area = 1 / 2 * base * height;
    return area;
}
// problem16
// Write a C program to enter marks of five subjects and calculate total, average and percentage.
let marks = [40, 50, 60, 70, 80]
const findTAP = () => {
    const total = marks.reduce((previousvalue, curentvalue) => {
        return previousvalue + curentvalue;
    }, 0)
    const averageMarks = totalMarks / marks.length;
    const percentage = (total / (marks.length * 100)) * 100;
}
