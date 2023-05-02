//Non-primitive data types are modifiable or mutable.
let gloria =[23, 40, 22, ];
gloria[0] = 50;
console.log (gloria)//[50, 40, 22 ]


/* Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the 
same properties and values, they are not strictly equal.*/
//arrays
let marks = [10, 20, 30, 40]
let mark = [10, 20, 30, 40]
console.log( marks == mark) //false


//objects
let school = {
    name:'mary',
    role:'teaching',
    country:'Finland'
    }
    
    let schools = {
    name:'mary',
    role:'teaching',
    country:'Finland'
    }
    
    console.log(schools == school) // false

    

//Two objects are only strictly equal if they refer to the same underlying object.
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true