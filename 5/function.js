//=> Function Declaration

//==1==> Write a function to check if a number is even or odd

function evenOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'odd';
  }
}

console.log(evenOdd(6));

//==2==> Write a function to find the square of a number and return the result

function squreNumber(n) {
  return n * n;
}
console.log(squreNumber(5));

//=> Function Expression

//==3==> Write a function Expression to find the maximum of two numbers and log the result to console
//====> We Can Solve it with two possible ways

//=> Method 1

const highNum = function (num1, num2) {
  if (num1 > num2) {
    return `${num1} is greater`;
  } else {
    return `${num2} is greater`;
  }
};
console.log(highNum(2, 10));

//=> Method 2

const maxNum = function (n1, n2) {
  return Math.max(n1, n2);
};
console.log(maxNum(2, 5));

//==4==> Write a funcation expression to concatenate two strings return the result

const concatString = function (str1, str2) {
  return str1.concat(str2);
};

console.log(concatString('Ra', 'na'));

//===========> Arrow Function

//= Task 5 ==> Write an arrow function to calculate the sum of two numbers and return the result

const sumNum = (val1, val2) => val1 + val2;
console.log(sumNum(2, 3));

//= Task 6 ==> Write an arrow function to check if a string contains a specific character and returrs a bolen value
const checkString = (str, char) => {
  if (str.includes(char)) {
    return true;
  } else {
    return false;
  }
};
console.log(checkString('Are you ready?', 'P'));
console.log(checkString('Are you ready?', '?'));

//====> Function Parementer and Defualt value

//=Task 7===> Write a function that takes two paramters and returns their product.Provide a default value for the second parameter

function prodDef(x, y = 2) {
  return x * y;
}

console.log(prodDef(4));

//=Task 8 ===> Write a function that takes persons name and age and returns a greeting message with persons name. Provide the default value of age

function greetMessage(name, age = 19) {
  return `Hi ${name} !!.I know your age is ${age}`;
}
console.log(greetMessage('Toseef'));

//====> Higher Order Function

//=Task 9 ===> Write a higher order function that takes a function and times and return that function n times

function repeatNTimes(fn, n) {
  return function () {
    for (let i = 0; i < n; i++) {
      fn();
    }
  };
}

function sayMyName() {
  console.log('Toseef Rana');
}
const callMyName = repeatNTimes(sayMyName, 9);
callMyName();

//= Task 10 ===> Write a higher order function that takes two fuctions apply the first function to value and then apply the second function to result

function composeFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}

function add5(x) {
  return x + 5;
}

function multiplyBy2(x) {
  return x * 2;
}

const result = composeFunctions(add5, multiplyBy2, 10);
console.log(result);
