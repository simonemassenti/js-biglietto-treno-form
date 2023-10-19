// Get Ticket Data
const usernameElem = document.getElementById("name");
let username;
const kmElem = document.getElementById("km");
let km;
const ageElem = document.getElementById("age");
let age;
//Get Button Elements
const sendBtn = document.getElementById("send");
const clearBtn = document.getElementById("clear");
//Price Per Km Variable
const pricePerKm = 0.21;

//Discount Percentage
const underageDiscount = 0.2;
const elderlyDiscount = 0.4;
//Price Variable
let price;
//Discoun Variable
let discount = 0;
//Get Visualization Element
let visual = document.getElementById("ticket");

//Event listener on send button click
sendBtn.addEventListener("click", function() {
    //Get Values from HTML elements
    username = usernameElem.value;
    console.log(username);
    km = parseInt(kmElem.value);
    console.log(km);
    age = ageElem.value;
    console.log(age);

    //Ticket price
    price = km * pricePerKm;

    //Category control 
    if (age === "underage") {
        discount = price * underageDiscount;
        age = "Biglietto: Minori"
    } else if (age === "elderly") {
        discount = price * elderlyDiscount;
        age = "Biglietto: Over 65"
    } else {
        age = "Biglietto: Standard"
    }
    
    //Calculating Discount
    price = price - discount;
    
    //Rounding 
    price = "€ " + price.toFixed(2);
    discount = discount.toFixed(2);

    //Writing Data in the HTML Elements
    document.getElementById("passenger").innerHTML = username;
    document.getElementById("offer").innerHTML = age;
    document.getElementById("carriage").innerHTML = Math.floor(Math.random()*10)+1;
    document.getElementById("place").innerHTML = Math.floor(Math.random()*10000)+1;
    document.getElementById("cost").innerHTML = price;

    console.log(price, discount);

    // Clearing HTML input Elements
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "";

    // String to Number
    discount = parseInt(discount);

    //Removing d-none class to visualize the Ticket
    visual.classList.remove("d-none");
});

//Event listener on clear button click
clearBtn.addEventListener("click", function() {
    //Clearing HTML input Elements
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "";
    
    //Ticket Hiding
    visual.classList.add("d-none");
});
 