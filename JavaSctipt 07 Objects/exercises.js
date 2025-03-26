
/* 
    Challenge 1

    Student Grade Management System
        You have a list of students, each with their name and an array of scores.
        Calculate the average score of each student
        Determine if the student has passed (avg ≥ 50)
        Find the top-performing student

*/

// lets refactor the code, by making it more dynamic and more optimized
const students = [
    { 
        name: "Alice",
        scores: [80, 90, 100]
    },
    { 
        name: "Bob", 
        scores: [50, 60, 70] 
    },
    { 
        name: "Charlie", 
        scores: [30, 40, 20] 
    }
]

let topStudent = null;
let highestAvg = 0;

for (const student of students){
    let totalScore = 0;
    let avg = 0;

    for (const score of student.scores){
        totalScore += score;
    }

    avg = totalScore / student.scores.length;

    if (avg > highestAvg) {
        highestAvg = avg;
        topStudent = student.name;
    }

    if (avg >= 50 && avg <= 100){
        console.log(`Student ${student.name} passed with the average grade of ${avg}.`);
    } else if(avg < 50 && avg >= 0) {
        console.log(`Student ${student.name} failed with the average grade of ${avg}.`);
    } else {
        console.log(`There are some issues with student ${student.name}'s average grade. This might be due to invalid scores or an unexpected calculation.`)
    }
}

if (topStudent) {
    console.log(`\nThe top-performing student is ${topStudent} with an average grade of ${highestAvg}.`);
}

// firdavs is the best 👨🏻‍🦱






/* 
    Challenge 2 - E-Commerce Cart System
        You have an array of cart items where each item is an object containing id, name, price, and quantity.
            Calculate the total price of all items
            Apply a 10% discount if total price is above $100
            Find the most expensive item
*/


const carts = [
    {
        id: 1,
        name: "Laptop",
        price: 900,
        quantity: 1
    },
    {
        id: 2,
        name: "Mouse",
        price: 50,
        quantity: 2
    },
    {
        id: 3,
        name: "Keyboard",
        price: 100,
        quantity: 1
    }
]




function calculateCartSummary(carts){
    let totalPrice = 0;
    let itemPrice = 0;
    let discountedValue = 0;
    let mostExpensive = 0;

    for (const cart of carts){
        itemPrice = cart.price * cart.quantity;
        totalPrice += itemPrice;
    
        if (itemPrice > mostExpensive){
            mostExpensive = itemPrice;
        }
    }
        if (totalPrice >= 1000) {
            if (totalPrice > 1000) {
                discountedValue = totalPrice * 0.9;
                return `Total price: ${discountedValue} (after discount). Most expensive item price: ${mostExpensive}.`;
            }
            return `Total price: ${totalPrice}. Most expensive item price: ${mostExpensive}.`;
        }
    }


console.log(calculateCartSummary(carts))




/* 
    Challenge 3 - Product Inventory Management
    Create an array of product objects (each with id, name, price, and stock). 
        Add a new product (addProduct).
        Update stock of a product (updateStock).
        Delete a product by ID (deleteProduct).
        Find a product by name (findProduct).
    Variation: Use higher-order functions (map(), filter(), reduce()) to manipulate the product list

*/
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 1200,
        stock: 10
    },
    {
        id: 2,
        name: "Phone",
        price: 700,
        stock: 15
    },
]

function getInventory() {
    function addProduct(id, name, price, stock) {
        const newProduct = { id, name, price, stock };
        products.push(newProduct);
        return newProduct;
    }

    function updateStock(id, stock) {
        const product = products.find(p => p.id === id);
        if (!product) {
            console.error(`Product with ID ${id} not found.`);
            return null;
        }
        product.stock = stock;
        return product;
    }

    function deleteProduct(id) {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
            console.error(`Product with ID ${id} not found.`);
            return false;
        }
        products.splice(index, 1);
        return true;
    }

    function findProduct(name) {
        const product = products.find(p => p.name === name);
        if (!product) {
            console.error(`Product with name ${name} not found.`);
            return null;
        }
        return product;
    }

    return {
        addProduct,
        updateStock,
        deleteProduct,
        findProduct
    };
}

const showInventory = getInventory();

showInventory.deleteProduct(34);
console.log(products);




/* 
    Challenge 4 - Social Media Post Analytics
        Define an array of post objects, each with author, likes, comments, and shares.
        Implement a function to find the most liked post.
        Implement a function to calculate total engagement (likes + comments + shares) for all posts.
        Variation: Store comments as an array of objects (with user and message).

*/

const posts = [
    {
        author: "Alice",
        likes: 100,
        coments: 20,
        shares: 5
    },
    {
        author: "Alice",
        likes: 200,
        coments: 50,
        shares: 10
    },
];

let likes = 0;
let totalEngagement = 0;

function postAnalytics(posts){

    function mostLikes(){
        for(const post of posts){
            if (post.likes > likes){
                likes = post.likes;
            }
        }
    }

    function caclEngagement(){
        for (const post of posts){
            totalEngagement += post.likes + post.coments + post.shares;
        }
    }

    return { mostLikes, caclEngagement}
}

let showAnalytics = postAnalytics(posts);
showAnalytics.mostLikes();
showAnalytics.caclEngagement();

console.log(likes)
console.log(totalEngagement)



/*  
    Challenge 5 - Sports Tournament Leaderboard
        Define an array of team objects, each with name, wins, losses, and points.
        Implement a function to sort teams by ranking.
        Implement a function to find the best-performing team.
        Variation: Add goal statistics (goalsScored, goalsConceded).

*/

const teams = [
    {
        name: "Team A",
        wins: 5,
        loses: 2,
        points: 15
    },
    {
        name: "Team B",
        wins: 6,
        loses: 1,
        points: 18
    },
]

function sportTournament(teams){
    function sortedTeams(){
        teams.sort((a, b) => b.points - a.points)
        console.log(`By ranking ${teams[0.].name} is standing in 1st place, by ${teams[0].points} points.`);
        
    }

    function bestPerforming(){
        console.log(`\n${teams[0].name} is the best performing team.`);
    }
    return { sortedTeams, bestPerforming};
}

let showTournament = sportTournament(teams);
showTournament.sortedTeams();
showTournament.bestPerforming();




/* 
    Challenge 6 - Warehouse Stock Management
        Create an array of inventory objects (itemName, category, stock).
        Implement a function to calculate total stock per category.
        Variation: Implement an alert system for low-stock items.

*/

const inventory = [
    {
        "item name": "Laptop",
        category: "Electronics",
        stock: 5
    },
    {
        "item name": "Phone",
        category: "Electronics",
        stock: 10
    },
]

function totalStockByCategory(category){
    return inventory
        .filter((item) => item.category === category)
        .reduce((sum, item) => sum + item.stock, 0);
}

console.log(totalStockByCategory("Electronics"));
