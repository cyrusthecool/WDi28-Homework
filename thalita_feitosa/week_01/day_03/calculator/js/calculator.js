/*
Write a function called squareNumber that will take one argument (a number),
square that number, and return the result. It should also log a string like
"The result of squaring the number 3 is 9."
*/

const squareNumber = function (number){
  const result = number * number;
  const msg = `The result of squaring the number ${number} is ${result}.`;
  console.log (msg);
  return result;
};
squareNumber(3);



/*
Write a function called halfNumber that will take one argument (a number),
divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
*/

const halfNumber = function (number){
  const result = number / 2;
  const msg = `The result of half of ${number} is ${result}.`;
  console.log (msg);
  return result;
};
halfNumber(5);



/*
Write a function called percentOf that will take two numbers, figure out what
 percent the first number represents of the second number, and return the result.
 It should also log a string like "2 is 50% of 4."
*/

const percentOf = function (number1, number2){
  const result = (number1 / number2) * 100 + "%";
  const msg = `${number1} is ${result} of ${number2}.`;
  console.log (msg);
  return result;
};
percentOf(4, 5);


/*
Write a function called areaOfCircle that will take one argument (the radius),
calculate the area based on that, and return the result. It should also log a string like
"The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
*/

const areaOfCircle = function (radius){
  const diameter =  radius * 2;
  const circumference = diameter * Math.PI;
  const area = Math.PI * radius * radius;
  const areaRounded = Math.round(area*100)/100;
  const msg = `The area for a circle with ${radius} is ${areaRounded}`;
  console.log (msg);
  return area;
};
areaOfCircle(2);

/*
Part 2
Write a function that will take one argument (a number) and perform the
following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/


const calculator = function (number){

};
