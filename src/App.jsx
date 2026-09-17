import { Link, Route, Routes } from "react-router"
import Home from "./pages/Home"
import AddUser from "./pages/AddUser"
import DisplayUser from "./pages/DisplayUser"
import Products from "./pages/Products"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      {/* <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/add" >Add User</Link></li>
        <li><Link to="/display">Display User</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
      <br /> */}
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/add" element={<AddUser />} />
        <Route  path="/display" element={<DisplayUser />} />
        <Route  path="/products" element={<Products />} />

        </Routes>
    </div>
  )
}

export default App
