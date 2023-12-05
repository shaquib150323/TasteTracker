import react,{useState} from 'react'
import Badge from 'react-bootstrap/Badge';
import { useCart } from '../Component/ContextReducer';
import '../App.css'
import f1 from '../img/finallogo.png'
import {
  Link,useNavigate
 } from "react-router-dom";
import Modal from '../Modal';
import Cart from '../screen/Cart';

 function Navbar() {
  let data = useCart();
  const navigate= useNavigate();
  const [cartView,setCartView]=useState(false);
  const handleLogout=()=>{
 localStorage.removeItem('authToken');
 navigate('/login');
  }
  
  

  return( 
<div>

  <nav className="navbar navbar-expand-lg bg-dark  fixed-top">
     <Link className="navbar-brand fs-1 fst-italic ml-3" to="/" style={{color:'#08b308'}}><b>T</b>aste <b>T</b>racker</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" style={{color:'#ccc'}} id="navbarNav">
            <ul className="navbar-nav  d-flex justify-content-center align-items-center  fs-5 " style={{color:'#ccc',marginLeft:'4rem'}}  >
                <li className="nav-item active">
                    <a className="nav-link"  style={{color:'#fdf4d3'}} href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{color:'#fdf4d3'}}  href="#team">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{color:'#fdf4d3'}} href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{color:'#fdf4d3'}} href="#footer">Contact</a>
                </li>
                {/* {(localStorage.getItem("authToken"))?
      <li className="nav-item">
      <Link className="nav-link active fx-4" aria-current="page"  style={{color:'#fdf4d3'}} to="/myOrder">My Orders</Link>
    </li>
    :""} */}
      </ul>
      {(!localStorage.getItem("authToken"))?
    <div className="d-flex ml-auto">
       
          <Link className="btn bg-white  mx-1" style={{color:'#75AB42',fontWeight:'bold'}}  to="/login">Login</Link>
        
          <Link className="btn bg-white  mx-1" style={{color:'#75AB42',fontWeight:'bold'}} to="/creatuser">SignUp</Link>
    </div>:
    <div className='ml-auto'>
   <div className='btn bg-white  mx-2 ml-auto' style={{color:'#75AB42',fontWeight:'bold'}} onClick={()=>{setCartView(true)}}>My Cart
  {" "}
   <Badge pill bg="danger">{data.length}</Badge>
   </div>
   {cartView? <Modal ><Cart onClose={()=>setCartView(false)}></Cart></Modal>:null}
   <div className='btn bg-white  mx-2 ml-auto' style={{color:'#75AB42',fontWeight:'bold'}} onClick={handleLogout}>Logout</div>
    </div>
    }
        </div>
    </nav>
</div>
//     <div >
// <nav className="navbar navbar-expand-lg navbar-danger bg-success">
//   <div className="container-fluid">
//     <Link className="navbar-brand fs-3 fst-italic" to="/">Taste Tracker</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav  me-auto mb-2">
//         <li className="nav-item">
//           <Link className="nav-link active fx-5" aria-current="page" to="/">Home</Link>
//         </li>
//       {(localStorage.getItem("authToken"))?
//       <li className="nav-item">
//       <Link className="nav-link active fx-5" aria-current="page" to="/myOrder">My Orders</Link>
//     </li>:""}
//       </ul>
//       {(!localStorage.getItem("authToken"))?
//     <div className="d-flex">
       
//           <Link className="btn bg-white text-success mx-1"  to="/login">Login</Link>
        
//           <Link className="btn bg-white text-success mx-1"  to="/creatuser">SignUp</Link>
//     </div>:
//     <div>
//    <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>My Cart
//   {" "}
//    <Badge pill bg="danger">{data.length}</Badge>
//    </div>
//    {cartView? <Modal onClose={()=>setCartView(false)}><Cart></Cart></Modal>:null}
//    <div className='btn bg-white text-success mx-2' onClick={handleLogout}>Logout</div>
//     </div>
//     }
//     </div>
//   </div>
// </nav>
// </div>
  )
}
export default Navbar