import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export class Header extends Component {

    render() {
        return (
            <div className="class-name">

              <div className="wrapper row1">
                <header id="header" className="hoc clear">

                  <div id="logo" className="fl_left">
                    <h1><a href="index.html">Programming</a></h1>
                    <p>Language</p>
                  </div>

                  <nav id="mainav" className="fl_right">
                    <ul className="clear">
                      <li className=""><a href="index.html">Home</a></li>
                      <li><a className="" href="#">Pages</a>
                        <ul>
                          <li><a href="">Gallery</a></li>
                          <li><a href="">Full Width</a></li>
                          <li><a href="">Sidebar Left</a></li>
                          <li><a href="">Sidebar Right</a></li>
                          <li><a href="">Basic Grid</a></li>
                        </ul>
                      </li>
                      <li><a className="" href="">Dropdown</a>
                        <ul>
                          <li><a href="#">Level 2</a></li>
                          <li><a className="drop" href="#">Level 2 + Drop</a>
                            <ul>
                              <li><a href="#">Level 3</a></li>
                              <li><a href="#">Level 3</a></li>
                              <li><a href="#">Level 3</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Level 2</a></li>
                        </ul>
                      </li>

                    </ul>
                  </nav>
                </header>
              </div>
            </div>
        );
    }
}
