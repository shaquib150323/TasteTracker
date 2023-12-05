import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './screen/Home';
import Footer from './Component/Footer';
import Login from './screen/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import './App.css'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screen/SignUp';
import { CartProvider } from './Component/ContextReducer.js';
import MyOrder from './screen/MyOrder.js';

function App() {
  return (
    <CartProvider>

    <Router>
      <div>
 
       <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/creatuser' element={<SignUp/>} />
        
        {/* <Route exact path='/myOrder' element={<MyOrder/>} /> */}


      </Routes>
      </div>
    </Router>
   </CartProvider>
    );
}



export default App;
