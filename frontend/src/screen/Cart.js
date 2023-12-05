import React from 'react'
import Delete from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from '../Component/ContextReducer';
import t from '../img/mangif.gif'
export default function Cart({onClose}) {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
      <div className='d-flex justify-content-center align-item-center h-50' style={{marginTop:'150px'}}><img src={t} alt="" />
      </div>
        
      <h1 className='mx-2 d-flex justify-content-center  pt-5' style={{color:'#75AB42'}}>Your cart is empty !</h1>
      <div className='text-center' >
        <button className='btn bg-light pt-1 mt-5' style={{color:'#75AB42',fontWeight:'bold'}}  onClick={onClose}>Go Back</button>
        </div>
      </div>
    
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>
    
      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md '>
        <table className='table table-hover  '>
          <thead className='fs-4' >
            <tr style={{color:'#75AB42'}}>
              <th scope='col' style={{color:'#75AB42'}}>S.no</th>
              <th scope='col' style={{color:'#75AB42'}}>Name</th>
              <th scope='col' style={{color:'#75AB42'}} >Quantity</th>
              <th scope='col' style={{color:'#75AB42'}}>Option</th>
              <th scope='col' style={{color:'#75AB42'}}>Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' style={{color:'#75AB42'}}>{index + 1}</th>
                <td style={{color:'#75AB42'}}>{food.name}</td>
                <td style={{color:'#75AB42'}} >{food.qty}</td>
                <td style={{color:'#75AB42'}}>{food.size}</td>
                <td style={{color:'#75AB42'}}>{food.price}</td>
                <td style={{color:'#75AB42'}}><button type="button" className="btn p-1 " style={{color:'#75AB42'}}>
                    <Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                    </button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2' style={{color:'#75AB42'}}>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-light mt-5 ' style={{color:'#75AB42'}}    onClick={handleCheckOut}> 
           Check Out
       </button>
        </div>
      </div>



    </div>
  )
}