import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import od from '../img/login.png'
import bt from '../img/bgt.png'
import logo from '../img/logo1.png'
var sectionStyle = {
  backgroundImage: `url(${bt})`,
  backgoundPosition:'cover',
  objectFit:'cover',
  backgroundRepeat:'no-repeat',
  boxShadow:'0 6px 1px rgba(0,0,0,0.5)'

}

export default function SignUp() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }))
    const response = await fetch("https://tastetracker.onrender.com/api/creatuser", {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
    })
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
  }
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <>
      <section className="vh-100 p-0" style={sectionStyle}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none vh-60 d-md-block">
                  <img src={od}
                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem",height:'100%'}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={handleSubmit}>

                        <div className="d-flex align-items-center mb-3 pb-1"><img src={logo} alt=""/>
    </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>SignUp into your account</h5>

                        <div className="form-outline mb-4">
                          <input type="text" name="name" value={credentials.name} onChange={onChange} id="form2Example17" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="exampleInputEmail1">Name</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="email" name="email" value={credentials.email} onChange={onChange} id="form2Example17" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="exampleInputEmail1">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" name='password' id="form2Example27" value={credentials.password} onChange={onChange} className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">Sign Up</button>
                        </div>

                        <p className="mb-3 pb-lg-2" style={{ color: "#393f81" }}> Already a User <a href="/login"
                          style={{ color: "#393f81" }}>Sign in</a><p>  </p><a href="/"
                          style={{ color: "#393f81" }}>Go Back</a></p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
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



    
    
    
    
    
    
    
    
    
    
      {/* <div className="container">
    <form onSubmit={handleSubmit}>
    <div className="m-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control"  name ="name" value={credentials.name} aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control"  name ="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name ="password" value={credentials.password} onChange={onChange}/>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name ="geolocation" value={credentials.geolocation}  onChange={onChange}/>
  </div>
      
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
</form>
    
</div> */}



    </>
  )
}
