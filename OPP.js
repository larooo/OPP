// OOP introduction
// const person = {
//   name: "Vassia",
//   age: 33
// };
// console.log(person);
// console.log(person.name);
// console.log(person["name"]);

// Person constructor
// constructor function

// function Person(name) {
//   this.name = name;
// }

// const leonard = new Person("Leonard");
// const arturo = new Person("Arturo");

// console.log(leonard);
// console.log(arturo);

//.................

// function Person(name, surname) {
//   (this.name = name),
//     (this.surname = surname),
//     (this.getFullName = function() {
//       return `${this.name} ${this.surname}`;
//     });
// }
// const nizar = new Person("Nizar", "Alawar");
// console.log(nizar.getFullName());

//......................
// function Person(name, surname, dob) {
//   (this.name = name),
//     (this.surname = surname),
//     (this.Birthday = new Date(dob)),
//     (this.getFullName = function() {
//       return `${this.name} ${this.surname}`;
//     });
//   this.calcAge = function() {
//     const diff = Date.now() - this.Birthday.getTime();
//     // console.log(this.Birthday.getTime());
//     // console.log(diff);
//     const ageDate = new Date(diff);
//     // console.log(ageDate);
//     return ageDate.getUTCFullYear() - 1970;
//   };
// }

// const nancy = new Person("Nancy", "Drew", "10-11-1958");
// console.log(nancy, nancy.getFullName());
// console.log(nancy.calcAge());

// Arrays
// two ways to declare an array
// const arr1 = [1, 2, 3, 4];
// const arr2 = new Array(1, 2, 3, 4);
// console.log(arr1);
// console.log(arr2);

//.............................................................................
// O - 1 Create your first object
// Create an object about a person that lives in your country for some years(unknown how many, you define it) and holds the information below.

//     Firstname, lastname, age, years of residence in your country, his own nationality, current profession and current salary.

// Then create a method that changes it's nationality to your country's nationality if the years of residence is greater or equal to 7.

// const person = {
//   firstName: "Hanne",
//   lastName: "Hamadia",
//   age: 35,
//   residenceYear: 12,
//   nationality: "Marroko",
//   profession: "social worker",
//   salary: 2300,
//   liveIn: "Deutschland",
//   changeProfession: function() {
//     this.residenceYear >= 7 ? (this.nationality = this.liveIn) : null;
//   }
// };
// console.log(person);
// console.log(person.changeProfession());
// console.log(person);

// O - 2 Convert currency

// Create three objects for three people with the following info.Firstname, lastname, bank account(a number in us dollars) and country of residence.

// The bank account is going to be a number that the person has to his / her bank account in US dollars.

// Add a new property that corresponds to how much 1$ to the currency of every person's country corresponds.

// The persons are coming from Greece, Switzerland and Australia respectively.

// Create a function that creates a new property for each person that shows the bank account in his country's money.
//.....................................................................................
// const person1 = {
//   firstName: "first1",
//   lastName: "last1",
//   bankAccount: 23,
//   residenceCountry: "Greece"
// };
// const person2 = {
//   firstName: "first2",
//   lastName: "last2",
//   bankAccount: 123,
//   residenceCountry: "Switzerland"
// };

// const person3 = {
//   firstName: "first3",
//   lastName: "last3",
//   bankAccount: 3,
//   residenceCountry: "Australia"
// };

// function homeCountryBank(obj) {
//   if (obj.residenceCountry === "Greece") {
//     obj.countryBank = obj.bankAccount;
//   } else if (obj.residenceCountry === "Switzerland") {
//     obj.countryBank = obj.bankAccount * 1.12;
//   } else if (obj.residenceCountry === "Australia") {
//     obj.countryBank = obj.bankAccount * 1.62;
//   }
//   return obj;
// }
// console.log(person3);
// console.log(homeCountryBank(person3));
// console.log(person3);

// The NEW keyword constrcutor

// let Person = function(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.profession = "Student";
// };

// let jake = new Person("myFirstName", "myLastname", 23);
// let lara = new Person("Lara", "Lara", 35);
// console.log(lara);
// console.log(jake);

// let Person = function(
//   firstName,
//   lastName,
//   bankAccount,
//   residenceCountry,
//   usDollarToLocalCurrency
// ) {
//   (this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.bankAccount = bankAccount);
//   this.residenceCountry = residenceCountry;
//   this.convetToLocalMoney = function() {
//     return (this.localMoney = this.bankAccount * usDollarToLocalCurrency);
//   };
// };

// let person1 = new Person("fname1", "lname1", 2300, "Greece", 1);
// let person2 = new Person("fname2", "lname2", 1000, "Switzerland", 1.12);
// let person3 = new Person("fname3", "lname3", 500, "Australia", 1.62);

// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person2.convetToLocalMoney());
// console.log(person2);

//.............Classes

// class Person {
//   constructor(
//     firstName,
//     lastName,
//     bankAccount,
//     residenceCountry,
//     usDollarToLocalCurrency
//   ) {
//     (this.firstName = firstName),
//       (this.lastName = lastName),
//       (this.bankAccount = bankAccount);
//     this.residenceCountry = residenceCountry;
//     this.convetToLocalMoney = function() {
//       return (this.localMoney = this.bankAccount * usDollarToLocalCurrency);
//     };
//   }
// }

// const person1 = new Person("fname1", "lname1", 2300, "Greece", 1);
// const person2 = new Person("fname2", "lname2", 1000, "Switzerland", 1.12);
// const person3 = new Person("fname3", "lname3", 500, "Australia", 1.62);

// console.log(person2);

// class Greek {
//   constructor() {
//     this.natioality = "Greece";
//   }
// }

// class Person extends Greek {
//   constructor(
//     firstName,
//     lastName,
//     bankAccount,
//     residenceCountry,
//     usDollarToLocalCurrency
//   ) {
//     super(); // which is equivalent to the new keyword. Is a reference to the constructor function of the class we inherit from.
//     (this.firstName = firstName),
//       (this.lastName = lastName),
//       (this.bankAccount = bankAccount);
//     this.residenceCountry = residenceCountry;
//     this.convetToLocalMoney = function() {
//       return (this.localMoney = this.bankAccount * usDollarToLocalCurrency);
//     };
//   }
// }
// const person1 = new Person("fname1", "lname1", 2300, "Greece", 1);
// console.log(person1);

//.............................................................
// O-4 The tigers inheritance
// class AllSpecies {
//   constructor(species, numOfEyes, numOfLegs, hasTail) {
//     (this.species = species),
//       (this.numOfEyes = numOfEyes),
//       (this.numOfLegs = numOfLegs),
//       (this.hasTail = hasTail);
//   }
// }
// class Tiger extends AllSpecies {
//   constructor(colorFur, eyeColor, region, eatMeet) {
//     super("Tiger", 2, 4, true),
//       (this.colorFur = colorFur),
//       (this.eyeColor = eyeColor),
//       (this.region = region),
//       (this.eatMeet = eatMeet);
//   }
//   colorFurFunc() {
//     return `this ${this.name} has a/an ${this.colorFur} color`;
//   }
// }

// class BengalTiger extends Tiger {
//   constructor(name, age, height, length, gender) {
//     super("Orange-black", "brown", "India", true);
//     (this.name = name),
//       (this.age = age),
//       (this.height = height),
//       (this.length = length),
//       (this.gender = gender);
//   }
// }

// class SiberianTiger extends Tiger {
//   constructor(name, age, height, length, gender) {
//     super("Black-white", "blue", "Siberia", false);
//     (this.name = name),
//       (this.age = age),
//       (this.height = height),
//       (this.length = length),
//       (this.gender = gender);
//   }
// }

// const bengalTiger = new BengalTiger("Richard Parker", 15, 82, 226, "male");
// const siberianTiger = new SiberianTiger(
//   "The Nights King",
//   990,
//   88,
//   204,
//   "female"
// );

// console.table(bengalTiger);
// console.table(siberianTiger);
// console.log(bengalTiger.colorFurFunc());
// console.log(siberianTiger.colorFurFunc());

//.............................................
// Object Iteration // Objects are iterable data types. That means we can loop through each of an object's property and check it's value and many more.

// let jake = {
//   firstName: "Kostas",
//   lastName: " Al HOssny",
//   age: 77,
//   nickName: "Susu",
//   profession: "Machine Learning engineer",
//   cityLives: "Hamburg",
//   preferedcity: "Zurich",
//   changeProfession: function(profession) {
//     this.profession = profession;
//   }
// };

// for (prop in jake) {
//   console.log(prop);
// }

//O-5 Calculate average skills for every user
// Create 5 users that share the basic info like:

// firstname, lastname, htmlSkills, cssSkills, and jsSkills.So in total 5 arguments, inside the constructor use 3 properties.

//     this.firstName = firstName;

// this.lastName = lastName;

// this.skills = { html: htmlSkills, css: cssSkills, jsSkills };

// Create a method that calculates the average of these 3 skills and returns the average.Find a way with what you have learned to loop through the skills property object and calculate average.

//     Don't create a function for every object if it's possible.Use inheritance to do it in all in one fashion.

// class User {
//   constructor(firstName, lastName, htmlSkills, cssSkills, jsSkills) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.skills = { html: htmlSkills, css: cssSkills, js: jsSkills };
//   }
//   calculateAverage() {
//     let sum = 0,
//       countSkills = 0;
//     for (let i in this.skills) {
//       countSkills++;
//       sum += this.skills[i];
//     }
//     return (sum / countSkills).toFixed(2);
//   }
//   getTotalAvg(...args) {
//     let result = 0;
//     for (let i of args) {
//       result += i;
//     }
//     return (result / args.length).toFixed(2);
//   }
// }

// const lara = new User("Lara", "Wow", 10, 20, 30);
// console.log(lara);
// console.log(lara.calculateAverage());

//................................
//O-6 Have i Seen this Movie?
class Movie {
  constructor(title, director, releasedYear, actor, Seen) {
    (this.title = title),
      (this.director = director),
      (this.releasedYear = releasedYear),
      (this.actor = actor),
      (this.Seen = Seen);
  }
}
let movie1 = new Movie("movie1", "director1", "releasedYear1", "actor1", true);
let movie2 = new Movie("movie2", "director2", "releasedYear2", "actor2", false);
let movie3 = new Movie("movie3", "director3", "releasedYear3", "actor3", false);
let movie4 = new Movie("movie4", "director4", "releasedYear4", "actor4", false);
let movie5 = new Movie("movie5", "director5", "releasedYear5", "actor5", true);

let allMovies = [movie1, movie2, movie3, movie4, movie5];

function test(Movies) {
  for (Film of Movies) {
    // for of to get the value of an object // for in to get the keys of an object
    if (Film.Seen) {
      console.log(Film.title);
    }
  }
}
test(allMovies);

// console.log(allMovies);

//.........................................
// O-7 Create a cashier balance

// class Shop {
//   constructor() {
//     this.tshirtPrice = 10;
//     this.jeansPrice = 30;
//     this.jacketPrice = 150;
//     this.tshirtStock = 100;
//     this.jeansStock = 100;
//     this.jacketStock = 100;
//     this.totalBalance = 0;
//   }
// }
// let shop = new Shop();
// class Cashier {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//     this.customerNum = 0;
//     this.cashierBalance = 0;
//   }
//   createSale(tshirtNum, jeansNum, jacketNum) {
//     let enoughShirt = tshirtNum <= shop.tshirtStock;
//     let enoughJeans = jeansNum <= shop.jeansStock;
//     let enoughjacket = jacketNum <= shop.jacketStock;
//     if (!enoughShirt) {
//       tshirtNum = shop.tshirtStock;
//     }
//     if (!enoughJeans) {
//       jeansNum = shop.jeansStock;
//     }
//     if (!enoughjacket) {
//       jacketNum = shop.jacketStock;
//     }
//     let costOrder =
//       tshirtNum * shop.tshirtPrice +
//       jeansNum * shop.jeansPrice +
//       jacketNum * shop.jacketPrice;

//     if (costOrder === 0) {
//       console.log(
//         "Its not possible to make this sale because the requested material is not there."
//       );
//       return;
//     }
//     this.customerNum++;
//     this.cashierBalance += costOrder;
//     shop.totalBalance += costOrder;
//     this.tshirtStock -= tshirtNum;
//     this.jeansStock -= jeansNum;
//     this.jacketStock -= jacketNum;
//     console.log(
//       `The cashier with id ${this.id} and more specifically ${
//         this.name
//       } has made a new sale! The balance of this cashier now is ${
//         this.cashierBalance
//       } $.`
//     );
//     console.log(
//       `After this sale the total balance of the shop is ${shop.totalBalance}$`
//     );
//   }
// }

// let firstCashier = new Cashier(1, "Marcelo Ramirez");
// let secondCashier = new Cashier(2, "Meir Overferst");
// let thirdCashier = new Cashier(3, "Jens Soltwedel");

// firstCashier.createSale(2, 2, 0);
// thirdCashier.createSale(0, 1, 1);
