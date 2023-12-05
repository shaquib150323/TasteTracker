import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import i1 from '../img/insta-1.jpg'
import i2 from '../img/insta-2.jpg'
import i3 from '../img/insta-3.jpg'
import i4 from '../img/insta-4.jpg'
import i5 from '../img/insta-5.jpg'
import i6 from '../img/insta-6.jpg'
import p1 from '../img/prod-1.jpg'
export default function Footer() {
  return (
    <div>
	<footer className="footer-05 mt-5" id='footer'>
			<div className="container">


				<div className="row">					
				<div className="col-md-6 col-lg-3 mb-md-0 ">
							<h2 className="footer-heading ml-5">Contact Us</h2>
				
						<div className="block-23 mb-3">
              <ul  >
                <li style={{color:'#fff'}}><span className="icon ion-ios-pin "></span><span >Kamla Nehru Institute of Technology, Sultanpur, Uttar Pradesh, India</span></li>
                <li ><a href="#"style={{color:'#fff'}}><span className="icon ion-ios-call"></span><span >+2 392 3929 210</span></a></li>
                <li ><a href="#"style={{color:'#fff'}}><span className="icon ion-ios-send"></span><span>tastetracker3@gmail.com</span></a></li>
              </ul>
            </div>
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input type="text" className="form-control rounded-left" placeholder="Enter email address"/>
                <button type="submit" className="form-control submit rounded-right"><span className="sr-only">Submit</span><i className="ion-ios-send"></i></button>
              </div>
            </form>
					</div>
					<div className="col-md-6 col-lg-3 mb-md-0 mb-4">
							<h2 className="footer-heading">About Us</h2>
							<div className="block-21 mb-4 d-flex">
	              {/* <a className="img mr-4 rounded" style="background-image: url(images/image_1.jpg);"></a> */}
	              <div className="text" style={{color:'#fff'}}>
	            We believe that great food should be accessible to all, which is why we've partnered with the best local restaurants in town to bring you a wide variety of mouthwatering cuisines.
	              </div>
	            </div>
					</div>
					<div className="col-md-6 col-lg-3 mb-md-0 mb-4">
						<h2 className="footer-heading">Best Sellers</h2>
						<div className="row">
							<div className="col-md-12">
								<div className="featured">
									<a href="#" className="img rounded mb-3" style={{backgroundImage:`url(${p1})`}}></a>
									<div className="text">
										<h3><a href="#">Grilled Beef with potatoes</a></h3>
										<p className="rate">
											<a href="#"><span className="ion-ios-star"></span></a>
											<a href="#"><span className="ion-ios-star"></span></a>
											<a href="#"><span className="ion-ios-star"></span></a>
											<a href="#"><span className="ion-ios-star"></span></a>
											<a href="#"><span className="ion-ios-star"></span></a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3 mb-md-0 mb-4">
						<h2 className="footer-heading">Instagram</h2>
						<div className="block-24">
							<div className="row no-gutters">
								<div className="col-4 col-md-4">
									<a href="#" className="img" style={{backgroundImage:`url(${i1})`}}></a>
								</div>
								<div className="col-4 col-md-4">
									<a href="#" className="img" style={{backgroundImage:`url(${i2})`}}></a>
								</div>
								<div className="col-4 col-md-4">
									<a href="#" className="img" style={{backgroundImage:`url(${i3})`}}></a>
								</div>
								<div className="col-4 col-md-4">
									<a href="#" className="img" style={{backgroundImage:`url(${i4})`}}></a>
								</div>
								<div className="col-4 col-md-4">
									<a href="#" className="img" style={{backgroundImage:`url(${i5})`}}></a>
								</div>
								<div className="col-4 col-md-4">
									<a href="#" className="img" style={{backgroundImage:`url(${i6})`}}></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-5 pt-4 border-top">
          <div className="col-md-6 col-lg-8">
            <p className="copyright"><script>document.write(new Date().getFullYear());</script> All rights reserved.</p>
          </div>
          <div className="col-md-6 col-lg-4 text-md-right">
          	<p className="copyright">©Copyright  <i className="ion-ios-heart" aria-hidden="true">Taste Tracker</i> 2023.
 </p>
          </div>
        </div>
			</div>
		</footer>





















{/* 
<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </Link>
      <span className="text-muted">© 2021 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" to="#"><svg className="bi" width="24" height="24"></svg></a></li>
      <li className="ms-3"><a className="text-muted" to="#"><svg className="bi" width="24" height="24"></svg></a></li>
      <li className="ms-3"><a className="text-muted" to="#"><svg className="bi" width="24" height="24"></svg></a></li>
    </ul>
  </footer> */}
  				{/* <div className="row border-bottom mb-5 pb-4 align-items-center">
					<div className="col-md-6 mb-md-0 mb-4">
						<h2 className="logo">     <Link className="navbar-brand fs-1 fst-italic ml-3" to="/" style={{color:'#ccc'}}><b>T</b>aste <b>T</b>racker</Link></h2>
					</div>
					<div className="col-md-6 mb-md-0 mb-4 text-md-right">
						<ul className="ftco-footer-social p-0 mb-0">
              <li className="ftco-animate"><a href="https://github.com/TasteTracker3" data-toggle="tooltip" data-placement="top" title="Twitter">           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="1px" width="42" height="42" viewBox="0 0 50 50">
                          <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg></a></li>
              <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook">    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                          <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg></a></li>
            </ul>
					</div>
				</div> */}

    </div>

)
}
