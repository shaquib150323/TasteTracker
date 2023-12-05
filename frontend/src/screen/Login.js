import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import od from '../img/login.png'
import bt from '../img/bgt.png'
import logo from '../img/logo1.png'
var sectionStyle = {
  backgroundImage: `url(${bt})`,
  backgoundPosition: 'cover',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat'


}
export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email)
      localStorage.setItem("authToken", json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate('/');
    }
  }
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <section className="vh-100 py-3" style={sectionStyle}>
      <div className="container py-5 vh-90" style={{ overflow: 'hidden' }}>
        <div className="row d-flex justify-content-center align-items-center h-100" style={{ overflow: 'hidden' }} >
          <div className="col col-xl-10" style={{ overflow: 'hidden' }}>
            <div className="card" style={{
              boxShadow: '0 6px 1px rgba(0,0,0,0.1)', overflow: 'hidden', borderRadius: "1rem"
            }}>
              <div className="row g-0" >
                <div className="col-md-6 col-lg-5 d-none d-md-block vh-80" >
                  <img src={od}
                    alt="login form" style={{ height: '100%' }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={handleSubmit}>

                      <div className="d-flex align-items-center mb-0 pb-0">

                        <img src={logo} alt="" />

                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                      <div className="form-outline mb-4">
                        <input type="email" name="email" value={credentials.email} onChange={onChange} id="form2Example17" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="exampleInputEmail1">Email address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" name='password' id="form2Example27" value={credentials.password} onChange={onChange} className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <a href="/creatuser"
                        style={{ color: "#393f81" }}>Register here  </a><p> </p><span><a href="/"
                          style={{ color: "#393f81" }}>Go Back</a></span></p>
                      <a href="#!" className="small text-muted">Terms of use.</a><br />
                      <a href="#!" className="small text-muted">Privacy policy</a>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



































    
    //     <div>  <form onSubmit={handleSubmit}>

    //   <div className="m-3">
    //     <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
    //     <input type="email" className="form-control"  name ="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange}/>
    //   </div>
    //   <div className="m-3">
    //     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    //     <input type="password" className="form-control" name ="password" value={credentials.password} onChange={onChange}/>
    //   </div>


    //   <button type="submit" className="m-3 btn btn-success">Login</button>
    //   <Link to="/creatuser" className='m-3 btn btn-danger'>I'm a new User</Link>
    // </form></div>
  )
}
