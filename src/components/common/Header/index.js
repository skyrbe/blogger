import React,{Component} from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Brand</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><Link to="/">List View <span className="sr-only">(current)</span></Link></li>
                  <li><Link to="/add">Add Blog</Link></li>
                </ul>
              </div>
            </div>
            </nav>
        );

}

export default Header;
