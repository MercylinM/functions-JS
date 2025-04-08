// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
const fruits = ["apple", "banana", "orange", "grape"];
const elements = [2];
function reverseAndSortStrings(fruits, elements) {
    // Sort the array in ascending order
    const sortedArray = fruits.slice().sort();
    console.log(sortedArray);
    
    // Reverse the specific elements
    for (let i = 0; i < sortedArray.length; i++) {
        if (elements.includes(i)) {
            sortedArray[i] = sortedArray[i].split("").reverse().join("");
        }
    }

    return sortedArray;
};
const result = reverseAndSortStrings(fruits, elements);
console.log({result}); 


//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
const numbers = [6, -8, 10, -2, 0, 9, 5];
function positiveOrNegative(numbers) {

    const result = numbers.forEach(element => {
        if (element > 0) {
            console.log(`${element} is positive`);
            
        } else if (element < 0) {
            console.log(`${element} is negative`)
        } else {
            console.log(`${element} is zero`)
        }
    });
    
}
console.log(positiveOrNegative(numbers))


//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.



//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
const numbers1 = [6, -8, 10, -2, 0, 9, 5];
function multiplyBy2(numbers1) {
    newArray = []
    numbers1.forEach(element => {
        newArray.push(element * 2)
    });
    return newArray
}
console.log(multiplyBy2(numbers1))


//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
const numbers2 = [6, -8, 10, -2, 0, 9, 5];
function multiplyAndAddNumbers(numbers2) {
    for (let i = 0; i < 4 && i < numbers2.length; i++) {
        numbers2[i] *= 8
    }
    for (let i = numbers2.length - 2; i < numbers2.length; i++) {
        numbers2[i] += 5
    }
    return numbers2
}
console.log(multiplyAndAddNumbers(numbers2))