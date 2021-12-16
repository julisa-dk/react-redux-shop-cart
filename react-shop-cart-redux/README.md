# React Shopping Cart

# Step 1: Create React App

7. Cart Component
1- Set Active Task Management Spreadsheet
2- Create branch cart-component
3- Product.js
4- Handle "Add To Cart" to this.props.addToCart(product)
5- App.js
6- Add cartItems to state as []
7- Create addToCart(product)
8- Slice, Check product existance, add to cartitems
9- Cart.js

8. Chekout Form
1- Set Active Task Management Spreadsheet
2- Create branch checkout-form
3- Cart.js
4- Make cart items persistent
5- Use LocalStorage on App constructor to load cart items (JSON.parse)
6- Use LocalStorage on addToCart to save cart items (JSON.stringify)
7- Handle Click on Process
8- Update showCheckout state to true on click
9- Conditional rendering Checkout Form
10- Get email, Name and Address required input
11- Define handleInput function
12- Add Checkout Button
13- Handle onSubmit Form Event by this.createOrder
14- Create order object and pass to parent to handle it
15- Publish changes

9. Add Modal and Animation
1- Set Active Task Management Spreadsheet
2- Create branch animation-modal
3- Show animation
4- Install react-reveal
5- Create fade effect from bottom for products
6- Create fade left for add to cart
7- Create fade right for show checkout form
8- Open Modal by click on product image
9- Install react-modal
10- Product.js
11- Import Modal
12- Set state for product to null
13- Define openModal and closeModal
14- Show Modal if product exist
15- Create Modal
16- Create zoom effect for modal
17- index.css
18- Style Product Details
19- Commit and Publish changes
20- Pull request, merge, change to master
21- Task Management Spreadsheet set it done

10. Create Products Backend
1- Install nodemon globally
2- Add server.js
3- Install express(use as a web server) body-parser(to parse the data inside in post request to the server) mongoose(for connect to MongoDB) shortid(library for create userfriendly id to save products id)
4- Install MongoDB
5- app = express()
6- app.use(bodyParser.json())
7- mongoose.connect()
8- create Product model
9- app.post("api.products")
10- Postman send post request
11- route.get("/api/products")
12- route.delete("/api/products/:id")

11. Add Redux
1- waht is redux
2- update task on spreadsheet
3- create branch add-redux-products
4- npm install redux react-redux redux-thunk
5- import redux
6- set install state
7- create types
8- types.js
9- define FETCH_PRODUCTS
10- actions/productActions.js
11- declare fetchProducts
12- create reducers
13- reducers/productReducers.js
14- define case FETCH_PRODUCTS
15- create store
16- store.js
17- import redux
18- set initial state
19- define initialState
20- create store
21- import productReducers
22- combine reducers
23- Use store
24- App.js
25- import store
26- wrap all in Provider
27- connect products
28- components/Products.js
29- connect to store
30- import fetchProducts
31- fetch products on did mount
32- package.json
33- set proxy to http://127.0.0.1:5000
34- npm run server
35- check products list
36- commit and publish
37- send pull request and merge
38- update spredsheet

12. Add Redux To Filter
1- Update task and branch
2- types.js
3- create FILTER_PRODUCTS_BY_SIZE
4- create ORDER_PRODUCTS_BY_PRICE
5- actions/productActions.js
6- create filterProducts
7- move app.js filterProducts logic here
8- create sortProducts
9- move app.js filterProducts logic here
10- reducers/productReducers.js
11- case FILTER_PRODUCTS_BY_SIZE
12- case ORDER_PRODUCTS_BY_PRICE
13- Filter.js
14- connect props: size, sort, items and filteredItems
15- connect actions: filterProducts and sortProducts
16- show loading if no filteredProducts
17- App.js
18- remove Filter props
19- check result
20- update task and branch

13. Add Redux To Cart
1- Update task and branch
2- types.js
3- create ADD_TO_CART
4- create REMOVE_FROM_CART
5- actions/cartActions.js
6- create addToCart
7- create removeFromCart
8- reducers/cartReducers.js
9- case ADD_TO_CART
10- case REMOVE_FROM_CART
11- Cart.js
12- connect props: cartItems
13- connect actions: removeFromCart
14- Product.js
15- add action addToCart
16- App.js
17- remove Cart props
18- store.js
19- set initial cartItems to localStorage
20- check result
21- update task and branch