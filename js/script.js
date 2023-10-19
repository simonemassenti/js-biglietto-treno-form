
const usernameElem = document.getElementById("name");
let username;
const kmElem = document.getElementById("km");
let km;
const ageElem = document.getElementById("age");
let age;
const sendBtn = document.getElementById("send");
const clearBtn = document.getElementById("clear");

const pricePerKm = 0.21;

const underageDiscount = 0.2;
const elderlyDiscount = 0.4;

let price;
let discount = 0;

sendBtn.addEventListener("click", function() {
    username = usernameElem.value;
    console.log(username);
    km = parseInt(kmElem.value);
    console.log(km);
    age = ageElem.value;
    console.log(age);

    price = km * pricePerKm;

    if (age === "underage") {
        discount = price * underageDiscount;
    } else if (age === "elderly") {
        discount = price * elderlyDiscount;
    }
    
    price = price - discount;
    

    price = price.toFixed(2);
    discount = discount.toFixed(2);

    document.getElementById("result").innerHTML = `Ciao ${username}, visto che la tua categoria è ${age} il tuo biglietto costerà ${price} Euro. E' stato appliccato uno sconto di ${discount} Euro.`;

    console.log(price, discount);

    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "";

    discount = parseInt(discount);
});

clearBtn.addEventListener("click", function() {
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "";
});
 