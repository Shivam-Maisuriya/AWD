// Practical4 : Write a JavaScript to create a cart contains items of categories like groceries, apparels, accessories and gadgets. Each category offers discounts  10%,  20%,  5%  and  50%  discounts.  Apply  discount  on the times present in the cart and generate a Uinal bill. 
// Name: Alok Swain
// Enrollment No: 202203103510229
// Batch:B.Tech CSE

// Function to calculate the discounted price
function applyDiscount(price, discountPercentage) {
    return price - (price * (discountPercentage / 100));
  }
  
  // Sample items in the cart
  let cart = [
    { name: "Milk", category: "Groceries", price: 65 },
    { name: "Jeans", category: "Apparels", price: 400 },
    { name: "Watch", category: "Accessories", price: 1000 },
    { name: "Smartphone", category: "Gadgets", price: 50000 }
  ];
  
  // Discounts for each category
  let discounts = {
    Groceries: 10,
    Apparels: 20,
    Accessories: 5,
    Gadgets: 50
  };
  
  // Function to generate the final bill
  function generateFinalBill(cart) {
    let totalAmount = 0;
  
    // Calculate the discounted price for each item and accumulate the total amount
    cart.forEach(item => {
      let category = item.category;
      let discountPercentage = discounts[category];
      let discountedPrice = applyDiscount(item.price, discountPercentage);
  
      console.log(`${item.name} (${category}): Rs/-${item.price.toFixed(2)} - ${discountPercentage}% discount = Rs/-${discountedPrice.toFixed(2)}`);
  
      totalAmount += discountedPrice;
    });
  
    // Display the total amount in the final bill
    console.log("\nTotal Amount: Rs/- " + totalAmount.toFixed(2));
  }
  
  // Generate and display the final bill
  generateFinalBill(cart);
  