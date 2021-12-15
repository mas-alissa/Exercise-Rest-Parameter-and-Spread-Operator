// Function 1:
function addNumbersOne(...numbers){
    let x = 0;
    numbers.forEach(num => x += num)
    console.log(x)
}
addNumbersOne(1,2,3,4)

// Function 2:
function addNumbersTwo(num1,num2,num3){
   console.log(num1 + num2 + num3)
}
let arrayOfNumbers = [1,2,3]
addNumbersTwo(...arrayOfNumbers)