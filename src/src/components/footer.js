import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	

	
	render() {
		return (
                    
            <div>
            <footer>
              <div className="footer-bottom">
                <div className="row">
                  <div className="col-twelve">
                    <div className="copyright">
                      <p align="center">&copy; Andela Build4SDG 2020 Group 103.</p> 
                    </div>
                    <div id="go-top">
                      <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon-arrow-up" /></a>
                    </div>         
                  </div>
                </div>    	
              </div>
            </footer>
            <div id="preloader"> 
              <div id="loader" />
            </div>
          </div>
        
              

		)
	}
}

export default Footer;