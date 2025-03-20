// const cart = [
//     {id: 1, name: "Laptop", price:900,quantity:1},
//     {id: 2, name: "Mouse", price:50,quantity:2},
//     {id: 3, name: "Keyboard", price:100,quantity:1},

// ];

// function calc(cart){
//     let totalPrice = 0;
//     let mostExpensiveItem = "";
//     let highestPrice = 0;
//     for(let i = 0; i < cart.length; i++){
//         let itemTotal = cart[i].price * cart[i].quantity;
//         totalPrice+=itemTotal;

//         if (cart[i].price>highestPrice){
//             highestPrice = cart[i].name;
//             mostExpensiveItem = cart[i].name;
//         }
//     }
//     if (totalPrice >1000){
//           totalPrice = totalPrice - totalPrice * 0.1
//     }
//     console.log(totalPrice,mostExpensiveItem)
// }
// calc(cart)

const products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Phone", price: 700, stock: 15 },
];

products[0];
function getInventory() {
  function addProduct(id, name, price, stock) {
    products.push({ id, name, price, stock });
  }

  function updateStock(id, stock) {
    for (let i = 0; i < products.length; i++) {
      if (id == products[i].id) {
        products[i].stock = stock;
      }
    }
  } 

  function deleteProduct(id) {
    for (let i = 0; i < products.length; i++) {
      if (id == products[i].id) {
        products.splice(i, 1);
        break;
      }
    }
  }

  function findProduct(name) {
    for (let i = 0; i < products.length; i++) {
      if (name == products[i].name) {
        console.log(products[i]);
      }
    }
  }

  return { addProduct, updateStock, deleteProduct, findProduct };
}

let showInventory = getInventory();
showInventory.deleteProduct(2)
console.log(products)
// console.log(`Products ${products} \n`)

// showInventory.addProduct(3, "MacBook", 450, 1);
// console.log(`Products after adding enw one ${products} \n`)

// showInventory.updateStock(1, 5);
// console.log(`Products after updating stock ${products} \n`)

// showInventory.deleteProduct(2);
// console.log(`Products after deleting the product ${products} \n`)

// showInventory.findProduct("Laptop");
// console.log(`Products after finding the one ${products} \n`)




// new example

// const products = [
//     { id: 1, name: "Laptop", price: 1200, stock: 10 },
//     { id: 2, name: "Phone", price: 700, stock: 15 },
// ];

// const productList = products.map(product => ({
//     ...product,
//     deskription: `${product.name} - $${product.price}`,
// }));

// console.log(productList)