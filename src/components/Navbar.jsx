import { useSelector } from "react-redux";
import { Link } from "react-router";
function Navbar() {

   const cartData = useSelector((state)=>state.products.cartItems);
  //  const cartItem=cartItems

   console.log(cartData);
   

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/add" className="nav-link">Add User</Link>
        </li>

        <li className="nav-item">
          <Link to="/display" className="nav-link">Display User</Link>
        </li>

        <li className="nav-item">
          <Link to="/products" className="nav-link">Products</Link>
        </li>
         <li className="nav-item">
          <span className="cart">Cart({cartData.length})</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;