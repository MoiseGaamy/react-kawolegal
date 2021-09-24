import React from 'react'
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


export default function StartUp() {
    return (
        <div>
           <nav class="navbar mynav navbar-expand-lg ">
				<Link class="navbar-brand" to="#"><img src="images/logo.png" height="40px"  alt="logo"/>KAWO<span>LEGAL</span></Link>
				<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
                <ul className="nav nav-myitem justify-content-end">
						<li className="nav-item ">
						  <Link className="nav-link active" to="/">Home</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link monactive" to="/startup">Startups</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link" to="/register">Register</Link>
						</li>
						<li className="nav-item">
						  <Link className="nav-link" to="/login">Login</Link>
						</li>
					  </ul>
			</nav>
                <div class="row myrow">
                    <div class="input-group-prepend input-group-prependd">
                        <input type="text" class="form-control" placeholder="recherche" />
                        <span class="input-group-append">
                            <button type="submit" class="btn btn-primary">Search</button>
                        </span>
                    </div>
                </div>
            <div class="container mycontainer">
                <div class="row myrow">
                    <div class="col-lg-3">
                        <img src="images/logo.png" class="row_image" alt="" height="100px" />
                    </div>
                    <div class="col-lg-9">
                        <div class="jumbotron myjumbotron2">
                            <h1>Think and Zoom</h1>
                            <p>A collaborative ecosystem for problem
                            solvers and support for Startups. Lorem ipsum dolor sit amet consectetur.?</p>
                            <Link class="btn btn-info btn-lg" to="#" role="button">Register Now</Link>
                          </div>
                    </div>
                </div>
                <div class="row myrow">
                    <div class="col-lg-3">
                        <img src="images/logo.png" class="row_image" alt="" height="100px" />
                    </div>
                    <div class="col-lg-9">
                        <div class="jumbotron myjumbotron2">
                            <h1>SlateCube</h1>
                            <p>A collaborative ecosystem for problem
                            solvers and support for Startups. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem porro, totam iure officia, ducimus laudantium unde minus natus ?</p>
                            <Link class="btn btn-info btn-lg" to="#" role="button">Register Now</Link>
                        </div>
                    </div>
                </div>
                <div class="row myrow">
                    <div class="col-lg-3">
                        <img src="images/logo.png" class="row_image" alt="" height="100px" />
                    </div>
                    <div class="col-lg-9">
                        <div class="jumbotron myjumbotron2">
                            <h1>SleekJob Academy</h1>
                            <p>A collaborative ecosystem for problem
                            solvers and support for Startups. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem porro, totam iure officia, ducimus laudantium unde minus natus ?</p>
                            <Link class="btn btn-info btn-lg" to="#" role="button">Register Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            
	  <div class="footer">
		  <div>
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
