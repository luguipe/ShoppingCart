// Ex 3 - write out all items with their stock number
// provide a button and use onClick to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// list out the Cart items in another column
import shoppinglogo from '/shopping-cart.svg';

function NavBar({ menuitems }) {
  const { Card, Button } = ReactBootstrap;
  const [stock, setStock] = React.useState(menuitems);
  const [cart, setCart] = React.useState([]);
  
  const moveToCart = (e) => {
    let [name, num] = e.target.innerHTML.split(":");
    if (num <= 0) return; // zero items in stock

    // get item with name from stock and update stock
    // let item = stock.filter((item) => item.name == name);
    let selectedItem = stock.find((item) => item.name == name);
    if (!selectedItem || selectedItem.instock <= 0) return;

    // check if its in stock ie item.instock > 0
    let newStock = stock.map((item) => {
      if (item.name == name) {
        item.instock--;
      }
      return item;
    });
    // now filter out stock items == 0;

    setStock([...newStock]);

    setCart([...cart, selectedItem]); // Add the selected item to the cart
    // console.log(`Cart: ${JSON.stringify(cart)}`);
    
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cart.filter((_, i) => i !== index);
    setCart(updatedCartItems);
  
    // increment the stock of the item removed from the cart
    const item = cart[index].name;
    const newStock = stock.map((stockItem) => {
      if (stockItem.name === item) {
        stockItem.instock++;
      }
      return stockItem;
    });
    setStock([...newStock]);
};

  const updatedList = menuitems.map((item, index) => {
    return (
      <Button key={index} onClick={moveToCart}>
        {item.name}:{item.instock}
      </Button>
    );
  });

  // note that React needs to have a single Parent
  return (
    <>
    <div>
        {/* <a  href="https://github.com/luguipe" target="_blank">
          <img id='cartIcon' src={shoppinglogo} className="logo react" alt="shopping logo" />
        </a> */}
      </div>
      <h1>Stock</h1>
      <ul key="stock" style={{ listStyleType: "none" }}>
        {updatedList}
      </ul>
      <h2>
        <img id='cartIcon' src={shoppinglogo} alt="shopping logo" />
          Cart Items:
      </h2>
      <Cart cartitems={cart} removeFromCart={removeFromCart}> Cart Items</Cart>
    </>
  );
}
function Cart({ cartitems, removeFromCart }) {
  const { Card, Button } = ReactBootstrap;
  console.log("rendering Cart");

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const updatedList = cartitems.map((item, index) => {
    return (
      <li key={index}>
        {item.name} <Button onClick={() => handleRemoveItem(index)}>X</Button>
      </li>
    );
    // <Button key={index}>{item.name}</Button>;
  });

  return (
    <ul style={{ listStyleType: "none" }} key="cart">
      {updatedList}
    </ul>
  );
}

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 },
];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
