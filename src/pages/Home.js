import React from 'react'
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Home() {
    return (
        <div>
            <div className="card mycard text-white">
		<img src="images/im.jfif" className="card-img image" alt="logo" />
		<div className="card-img-overlay bg-img">
			<nav className="navbar navbar-expand-lg ">
				<Link className="navbar-brand" to="#"><img src="images/logo.png" height="40px" alt="logo" />KAWO<span>LEGAL</span></Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
					<ul className="nav nav-myitem justify-content-end">
						<li className="nav-item ">
						  <Link className="nav-link monactive active" to="/">Home</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link" to="/startup">Startups</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link" to="/register">Register</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link" to="/login">Login</Link>
						</li>
					  </ul>
			</nav>
			  <div className="jumbotron myjumbotron">
				<h1>KAWOLEGAL</h1>
				<p>A collaborative ecosystem for problem<br />
				solvers and support for Startups.</p>
				<Link className="btn btn-info btn-lg" to="#" role="button">Register Now</Link>
			
			  </div>
		</div>
	  </div>
	  <div className="footer">
		  <div className="footer-content">
			&copy;2021 kewoLegal All Right Reserved
		  </div>
		  <div>
			  <ul className="menu">
				  <li className="item"><Link className="menu-link" to="#"><FacebookIcon /></Link></li>
				  <li className="item"><Link className="menu-link" to="#"><TwitterIcon /></Link></li>
				  <li className="item"><Link className="menu-link" to="#"><LinkedInIcon /></Link></li>
				  <li className="item"><Link className="menu-link" to="#"><InstagramIcon /></Link></li>
			  </ul>
		  </div>
	  </div>
        </div>
    )
}
