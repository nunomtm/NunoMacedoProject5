// MVP //

// Pseudo Code:
 
- My idea is to have a Farmer's Market storefront type of thing that a user would be able to shop for items displayed on the shelf and add them to a shopping list.
 
- The items will be stored in Firebase which will be holding the items inventory and what items are available in the Farmer's Market.
 
- The page would look like this, on top would be the title "Shopping Cart" and bellow on the left side the products would be displayed on shelves where the user could click to add them to the shopping cart. On the right would be the shopping cart where the user would be able to see the items clicked and if the user clicks more then one time the product count would go up. For that reason, I would need to have event listeners in all products displayed to be able to add them to the list as they are clicked.
 
- The only part that would be rendered on load would be the Farmer's Market storefront with the products available to shop on that day and as the user interacts with the store the shopping cart on the right would populate.
 
 
// Strech Goals:
 
- Add the - / + buttons on the side of the item count to allow the user to increase or decrease the item count
- Add an inventory count beside the name of the product and update as the user add them to the shopping cart
- Once the shopping list decreases up to 0 have a remove button to exclude the item from the list
- Have an option to add products to the shopping cart if they are not displayed on the Farmer's Market store as an input type of text
- Add categories as a dropdown menu where the user could choose which product type they want to pick, such as meat, veggies, dairy