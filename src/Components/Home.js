import React,{Component} from 'react';
import $ from 'jquery';
import { Php } from './Php';
import { Cplus } from './Cplus';
import { Csharp } from './Csharp';
import { Vbasic } from './Vbasic';
import background from '../images/background.jpg'

import io from 'socket.io-client';
const socket = io('http://localhost:3011');

export class Home extends Component {

  componentDidMount() {
    socket.emit('connectme', "connect me" )
  }
  constructor(props){
    super();
    this.state ={
      addList:{}

    }

  }

handleSubmit(e){
    e.preventDefault();
  let fullname = this.refs.fullname.value
    socket.emit('connectme', fullname )

    console.log(fullname)
}


  render() {
      return (
        <div>
        <div className="container">
              <div className="row">
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                  <div className="box">
                    <div className="icon">

                      <div className="info">
                        <h3 className="title" style={{color:'white'}}>PHP</h3>
                        <p style={{color:'white'}}>
                           (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML. the PHP reference implementation is now produced by The PHP Development Team,</p>
                        <div className="more">
                          <a href="#" title="Title Link" style={{color:'white'}}>
                            Read More <i className="fa fa-angle-double-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space"></div>
                  </div>
                </div>
                    <div className="col-xs-12 col-sm-6 col-lg-4">
                  <div className="box">
                    <div className="icon">
                      <div className="info">
                        <h3 className="title" style={{color:'white'}}>JavaScript</h3>
                          <p style={{color:'white'}}>
                          often abbreviated as JS, is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production Although it was developed under the name Mocha</p>
                        <div className="more">
                          <a href="#" title="Title Link" style={{color:'white'}}>
                            Read More <i className="fa fa-angle-double-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space"></div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="box">
                <div className="icon">

                  <div className="info">
                    <h3 className="title" style={{color:'white'}}>Phyton</h3>
                      <p style={{color:'white'}}>
                        is widely used high-level programming languange for general purpose programming. it design philosopy that emphasize code readability and syntaxs that allows programmers to express concepts in fewer lines of codes than might be used in languages such as C++ or Java </p>
                    <div className="more">
                      <a href="#" title="Title Link" style={{color:'white'}}>
                        Read More <i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </div>
                    <div className="col-xs-12 col-sm-6 col-lg-4">
                  <div className="box">
                    <div className="icon">
                      <div className="info">
                        <h2 className="title" style={{color:'white'}}>C++</h2>
                          <p style={{color:'white'}}>
                      is a high-level programming language developed by Bjarne Stroustrup at Bell Labs. adds object-oriented features to its predecessor, one of the most popular programming language for graphical applications, such as those that run in Windows and Macintosh environments.</p>
                        <div className="more">
                          <a href="#" title="Title Link" style={{color:'white'}}>
                            Read More <i className="fa fa-angle-double-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space"></div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="box">
                <div className="icon">
                  <div className="info">
                    <h2 className="title" style={{color:'white'}}>C++</h2>
                      <p style={{color:'white'}}>
                  is a high-level programming language developed by Bjarne Stroustrup at Bell Labs. adds object-oriented features to its predecessor, one of the most popular programming language for graphical applications, such as those that run in Windows and Macintosh environments.</p>
                    <div className="more">
                      <a href="#" title="Title Link" style={{color:'white'}}>
                        Read More <i className="fa fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4">
          <div className="box">
            <div className="icon">
              <div className="info">
                <h2 className="title" style={{color:'white'}}>C++</h2>
                  <p style={{color:'white'}}>
              is a high-level programming language developed by Bjarne Stroustrup at Bell Labs. adds object-oriented features to its predecessor, one of the most popular programming language for graphical applications, such as those that run in Windows and Macintosh environments.</p>
                <div className="more">
                  <a href="#" title="Title Link" style={{color:'white'}}>
                    Read More <i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="space"></div>
          </div>
        </div>
              </div>
              </div>
              <div className="container">
              <form onSubmit = {this.handleSubmit.bind(this)}>
              <li className="one_third first btmspace-30">
              <input type = "text" className="form-control" ref="fullname" />
                <button className="btn btn-success" type="submit">Send Me</button>
                <br />
                <br />
              </li>
              </form>
              </div>
        </div>
      )
  }


}
