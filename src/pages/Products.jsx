import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts,addCartItem } from "../redux/productSlice";

function Products() {

    const dispatch= useDispatch();


//     useEffect(()=>{
// dispatch(fetchProducts())
//     },[])

     useEffect(()=>{
dispatch(fetchProducts())
    })

     useEffect(()=>{
dispatch(fetchProducts())
    },[data, info])

         useEffect(()=>{
          return()=>{
            // dispatch(fetchProducts())
            cleanup()
          }
    })


    const data = useSelector((state)=>state.products);
// console.log("data",data.products);

  return (
    <div>
        <h1>Product Page</h1>
     <div className="products-container">
  {data?.products.map((item) => (
    <div className="product-card" key={item.id}>
      <img
        className="product-image"
        src={item.thumbnail}
        alt={item.title}
      />

      <h3 className="product-title">{item.title}</h3>

      <p className="product-price">₹{item.price}</p>

      <p className="product-rating">⭐ {item.rating}</p>

      <p className="product-brand">{item.brand}</p>

      <button onClick={()=>dispatch(addCartItem(item))} className="cart-btn">Add to Cart</button>
    </div>
  ))}
</div>
    </div>
  )
}

export default Products
