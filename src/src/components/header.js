import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);

	}
	

	
	render() {
		return (
   <header id="header" className="row">   
   <div className="header-logo">
     <a href="index.html">Recycic</a>
   </div>
   <nav id="header-nav-wrap">
     <ul className="header-main-nav">
       <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
       <li><a className="smoothscroll" href="#about" title="about">About</a></li>
       <li><a className="smoothscroll" href="#pricing" title="pricing">Blog</a></li>
     </ul>
     <a href="#" title="sign-up" className="button button-secondary cta">Sign Up</a>
     <a href="#" title="sign-up" className="button button-primary cta">Sign Up</a>
   </nav>
   <a className="header-menu-toggle" href="#"><span>Menu</span></a>    	
 </header> 
 )
}
}

export default Header;