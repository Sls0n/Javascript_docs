// Objects are another important data structure of javascript.

const silson = {
	firstName: "Silson",
	lastName: "Sapkota",
	age: 18,
	company: ["ABC Company", "XYZ Company"],
};

// In array we access elements by using its index number. But in objects we access it by using keys and values.
// The firstName is called key which has 'Silson' as a value in line:4.

// To access object

console.log(silson.lastName);
console.log(silson["lastName"]);

// To add more

silson.location = "Nepal";
silson["twitter"] = "xSls0n_007";

// Using function expressions inside Object (Only function expression will work). Any Function that is attached to the object is called method. Then we can call the function.
const job = {
	salary: 20000,
	YOE: 4,
	birthYear: "2004",
	degree: "Bachelors Degree",

	/* calcAge: function(birthYear) {
         return 2022 - birthYear;
     } OR */

	calcAge: function () {
		return 2022 - this.birthYear;
	},
};

// console.log(job.calcAge(2004));
// console.log(job['calcAge'](2004));
console.log(job.calcAge());

/*
This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,

	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},
};

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,

	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},
};

mark.calcBMI();
console.log(mark.BMI);

john.calcBMI();
console.log(john.BMI);

// --Destructuring Objects--

const restaurant = {
	namee: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const { namee, mainMenu, categories } = restaurant;
console.log(namee, mainMenu, categories); // -------{i}

// To assign a new name to the variable

const { namee: resturantName, mainMenu: primaryMenu, categories : tags } = resturant;
console.log(resturantName, primaryMenu, tags); // same as {i}


// Setting up default value is it doesn't exist.
const { nameee = []} = resturant;


// Mutating/switching variables
let a = 111;
let b = 122;

const obj = {a:23, b:12};
({a, b} = obj);
console.log(a, b); // Output --> 23 12