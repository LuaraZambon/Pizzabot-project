alert("Welcome to our Javascript Pizzeria. Ready to start? - Click OK to begin")
let userName = prompt("What's your name?");
alert("Hi and Welcome," + userName + "!");

let foodChoice = prompt ("Choose your dish: 1 for Pizza, 2 for Pasta, 3 for Salad");
if (foodChoice == 1) {
    alert("You chose Pizza!");
} else if (foodChoice == 2) {
    alert("You chose Pasta!");
} else if (foodChoice == 3) {
    alert("You chose Salad!");
} else {
    alert("Invalid choice! Please choose between one of the options.");
}

if (foodChoice == 1) {
    let pizzaChoice = prompt("Choose your pizza: 1 for Cheese, 2 for Pepperoni, 3 for Veggie");
    if (pizzaChoice == 1) {
        alert("You chose Cheese Pizza!");
    } else if (pizzaChoice == 2) {
        alert("You chose Pepperoni Pizza!");
    } else if (pizzaChoice == 3) {
        alert("You chose Veggie Pizza!");
    } else {
        alert("Invalid choice! Please choose between one of the options.");
    }
} else if (foodChoice == 2) {
    let pastaChoice = prompt("Choose your pasta: 1 for Spaguetti, 2 for Fettuccine, 3 for Penne");
    if (pastaChoice == 1) {
        alert("You chose Spaguetti pasta!");
    } else if(pastaChoice == 2) {
        alert("You chose Fettuccine pasta!");
    } else if (pastaChoice == 3) {
        alert("You chose Penne pasta!");
    } else {
        alert("Invalid choice! Please choose between one of the options.");
    }
} else if (foodChoice == 3) {
    let saladChoice = prompt("Choose your salad: 1 for Caeser, 2 for Greek, 3 for Cobb");
    if (saladChoice == 1) {
        alert("You chose Caeser salad!");
    } else if (saladChoice == 2) {
        alert("You chose Greek salad!");
    } else if (saladChoice == 3) {
        alert ("You chose Cobb salad!");
    } else {
        alert("Invalid choice! Please choose between one of the options.");
    }
}

let ageGroup = prompt("This order is for a child or an adult? (Type child or adult)");
if (ageGroup.toLowerCase() == "child") {
    alert("Great! The kids meal will be served with a small portion and a promotional price.");
} else if (ageGroup.toLowerCase() == "adult") {
    alert("Great! The adult meal will be served as a standard portion.")
} else {
    alert ("Invalid answer! Please type 'child' or 'adult'.");
}

let confirmOrder = prompt("Do you confirm your order? (yes or no)");
if (confirmOrder.toLowerCase() === "yes") {
    alert("Thank you for your order! Your meal will be prepared soon.");
} else if (confirmOrder.toLowerCase()== "no") {
    alert("It`s ok! We hope to see you soon!")
} else {
    alert("Invalid answer! Please type 'yes' or 'no'.")
}