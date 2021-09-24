import React from 'react'
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


export default function Login() {
    return (
        <div>
            <nav class="navbar mynav navbar-expand-lg ">
				<Link class="navbar-brand" to="#"><img src="images/logo.png" height="40px" alt="logo"/>KAWO<span>LEGAL</span></Link>
				<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
                <ul className="nav nav-myitem justify-content-end">
						<li className="nav-item ">
						  <Link className="nav-link  active" to="/">Home</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link" to="/startup">Startups</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link" to="/register">Register</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link monactive" to="/login">Login</Link>
						</li>
					  </ul>
			</nav>
                 <h1 class="text-center">Already a member?Login to add your Startup</h1>
                <form>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Email Address</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Email Address" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
	  <div class="footer">
		  <div class="footer-content">
			&copy;2021 kewoLegal All Right Reserved
		  </div>
		  <div>
			  <ul class="menu">
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
