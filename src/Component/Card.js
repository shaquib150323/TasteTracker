import React, { useContext, useEffect, useState,useRef } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;
 let dispatch=useDispatchCart();
 let data = useCart();
  const priceRef=useRef();
const[qty,setQly]=useState(1);
const [size,setSize]=useState("")
  const handleAddtoCart=async()=>{
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

let finalPrice=qty*parseInt(options[size]);
useEffect(()=>{
  setSize(priceRef.current.value)
},[])
  return (
    <div>
      {" "}
      <div>
        <div className="card mx-2 my-3"  style={{ width: "18rem", maxHeight: "360px" }}>
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body text-dark">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className='container '>
              <select className='mx-2 h-100  rounded text-light' style={{backgroundColor:'#75AB42'}}  onChange={(e)=>setQly(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i+1}>{i + 1}</option>
                  )
                })}
              </select>
              <select className='mx-2 h-100  rounded ' style={{backgroundColor:'#75AB42'}} ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                {priceOptions.map((data) => {
                  return <option key={data} value={data}  >{data}</option>
                })}
              </select>  
              <div className='d-inline h-100 fs-5 text-dark'>
                ₹{finalPrice}/-
                </div>
            </div>
            <hr>
            </hr>
            <button className={'btn  justify-center text-light ms-2'} style={{backgroundColor:'#75AB42'}} onClick={handleAddtoCart}
            >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
