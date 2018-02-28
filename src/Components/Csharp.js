import React,{Component} from 'react';
import $ from 'jquery';
import Coverflow from '../../node_modules/react-coverflow/dist/react-coverflow.js';
export class Csharp extends Component {
  render() {
      return (
        <Coverflow
width={960}
height={480}
displayQuantityOfSide={2}
navigation={false}
enableHeading={false}
>

<img src={require('../images/java.jpg')} data-action="" />

<img src={require('../images/php.jpg')}  data-action="http://andyyou.github.io/react-coverflow/"/>

<img src={require('../images/phyton.jpg')} data-action="http://andyyou.github.io/react-coverflow/"/>

<img src={require('../images/cplus.jpg')}  data-action="http://andyyou.github.io/react-coverflow/"/>
<img src={require('../images/visual-basic.jpg')} data-action="http://andyyou.github.io/react-coverflow/"/>
</Coverflow>

)
}
}
export default Csharp;
