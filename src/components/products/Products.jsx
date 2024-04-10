import React,{useState} from 'react'
import './products.css'
import plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import './products.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {
    const [data, setdata] = useState(ProductsData)
    const[parent] = useAutoAnimate();

    const filter = (type)=>{

        setdata(ProductsData.filter((product)=>product.type===type))

    }

  return (
      <div className="container-1">
          <img src={plane} alt="" />
          <h1>Our Featured Products</h1>

          <div className="products-1">
          <div className="menu-list">
              <ul>
              <li onClick={()=>setdata(ProductsData)} >All</li>
              <li onClick={()=>filter("skin care")}>Skin Care</li>
              <li onClick={()=>filter("conditioner")}>Conditioners</li>
              <li onClick={()=>filter("foundation")}>Foundations</li>
              </ul>
              </div>
             <div className="list" ref={parent}>
                 {
                     data.map((product , i)=>(
                         <div className="product">
                             <div className="left-s">
                                 <div className="name">
                                 <span>{product.name}</span>
                                 <span>{product.detail}</span>
                             </div>
                             <span>{product.price}</span>
                             <div>Shop Now</div>
                         </div>
                         <img src={product.img} alt="" className="img-p"/>
                         </div>
                     ))
                 }
                
             </div>
          </div>
      </div>
  )
}

export default Products