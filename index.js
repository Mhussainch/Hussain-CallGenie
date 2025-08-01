// Bitwise operators

// let x=-5,y=-8;
// let z=true;
// if(x>=0&&y>=0){
//     console.log(z);
// }
// else{
//     console.log(!z);
// }


// Arthematic Operator

// let x=20;
// console.log(x+=10);
// console.log(x-=10);
// console.log(x/=10);
// console.log(x*=10);
// console.log(x%=10);


// Locical operator

// let x=5;
// let y=4;
// console.log(x&y);
// console.log(x|y);


// comparison operator


// let x="10";
// let y=10;
// let z=true;
// if(x===y){
//     console.log(z);
// }
// else{
//     console.log(!z);
// }


// Boolean Datatype

// let isTrue = true;
// let isFalse = false;


// console.log(Boolean("hello"));  
// console.log(Boolean(0));       
// console.log(Boolean(1));       
// console.log(Boolean(null));     
// console.log(Boolean([]));      


// console.log(isTrue && isFalse);  
// console.log(isTrue || isFalse);  
// console.log(!isTrue);           




// Grocery store practical example

const storeName = "FreshMart";
const itemName = "Organic Apples";

let itemPrice = 2.99;
let itemQuantity = 150;
const itemId = 9007199254740993n;

let isOnSale = true;
const isOrganic = true;

console.log(`Welcome to ${storeName}!`);
console.log(`Item: ${itemName}`);
console.log(`Price: $${itemPrice}`);

if (isOnSale && isOrganic) {
    itemPrice *= 0.9;
    console.log(`Discounted Price: $${itemPrice.toFixed(2)}`);
}

const customerQuantity = 5;
if (customerQuantity > itemQuantity) {
    console.log("Not enough stock available");
} else {
    itemQuantity -= customerQuantity;
    const totalCost = itemPrice * customerQuantity;
    console.log(`Total: $${totalCost.toFixed(2)}`);
    console.log(`Remaining Stock: ${itemQuantity}`);
}

const paymentMethod = "credit";
const useLoyaltyPoints = true;
let points = 1500;

if (paymentMethod === "credit" || useLoyaltyPoints) {
    if (points >= 1000 && useLoyaltyPoints) {
        const pointsUsed = 1000;
        points -= pointsUsed;
        const discount = 5.00;
        console.log(`Applied ${pointsUsed} loyalty points for $${discount} off`);
    }
}



// 9007199254740991  BigInt can exceed this limit 