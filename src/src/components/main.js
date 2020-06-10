import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import Footer from './footer';

class Main extends React.Component {
	constructor(props) {
		super(props);

	}
	

	
	render() {
		return (
            <div>
            <Header />

            <div>
      {/* home
   ================================================== */}
      <section id="home" data-parallax="scroll" data-image-src="images/bg.jpg">
        <div className="overlay" />
        <div className="home-content">        
          <div className="row contents">                     
            <div className="home-content-left">
              <h3>Welcome to Recycic</h3>
              <h1>
                What Recycled Waste can do to your Community <br />
                <span style={{fontSize: '20px'}}>Promote Good Living</span> <br />
                <span style={{fontSize: '20px'}}>Prevent Pollution</span>
              </h1>
            </div>
            <div className="home-image-right">
              <div className="buttons">
                <a href="#download" className="smoothscroll button stroke">
                  <span className="icon-circle-down" aria-hidden="true" />
                  Learn E-Waste Management
                </a>
              </div>                                         
              <div className="buttons">
                <a href="#download" className="smoothscroll button stroke">
                  <span className="icon-circle-down" aria-hidden="true" />
                  Locate Nearest Recycle Center
                </a>
              </div>                                         
              <div className="buttons">
                <a href="#download" className="smoothscroll button stroke">
                  <span className="icon-circle-down" aria-hidden="true" />
                  Trade Reyclable Products
                </a>
              </div>                                         
              <div className="buttons">
                <a href="#download" className="smoothscroll button stroke">
                  <span className="icon-circle-down" aria-hidden="true" />
                  Scan your waste Products
                </a>
              </div>                                         
            </div>
          </div>
        </div> {/* end home-content */}
        <ul className="home-social-list">
          <li>
            <a href="#"><i className="fa fa-facebook-square" /></a>
          </li>
          <li>
            <a href="#"><i className="fa fa-twitter" /></a>
          </li>
          <li>
            <a href="#"><i className="fa fa-instagram" /></a>
          </li>
          <li>
            <a href="#"><i className="fa fa-youtube-play" /></a>
          </li>
        </ul>
        {/* end home-social-list */}
      </section> {/* end home */}

                </div> 

            <Footer />
            </div>                

              

		)
	}
}

export default  Main;