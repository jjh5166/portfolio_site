import React, {Component} from 'react';
import $ from 'jquery';
// import IconBar from './Components/IconBar';
import {ParallaxContainer} from './Components/Parallax'
import GroupOne from './Components/GroupOne'
import GroupTwo from './Components/GroupTwo'
import GroupThree from './Components/GroupThree'

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef()
  }
  state = {
    scrollTop: 0,
  };

  debugOn = () => {
    $('.parallax__group').toggleClass('group-debug')
  };

  handleScroll = (event) => {
    let scroller = event.target.scrollTop
    let opac = Math.min(.9, ((.001 * scroller) + .4));
    $('.lagos').css('background-color', 'rgba(130, 50, 75,' + opac + ')');
    // console.log(this.ref.current.style.backgroundColor)
    // this.ref.current.style.backgroundColor('rgba(130, 50, 75,' + opac + ')')
    // this.state.ref.current.style.backgroundColor('rgba(130, 50, 75,' + opac + ')')
    // let opac = Math.min(.9, ((.001 * scroller) + .4));
    // $('.lagos').css('opacity', opac);
    this.setState({
      scrollTop: event.target.scrollTop
    })
    event.stopPropagation()
  }
  render() {
  return (
    <ParallaxContainer onScroll= {this.handleScroll}>
      <button className="thebutton" onClick={this.debugOn}>debug</button>
      <GroupOne scrollTop={this.state.scrollTop}/>
      <GroupTwo/>
      <GroupThree/>
    </ParallaxContainer>
  );
  }
}

// const NameText = styled.div`
//   background: url("https://s3.us-east-2.amazonaws.com/jjhv.me/img/matt-power-TpHmEoVSmfQ-unsplash.jpg") center;
//   background-size: contain;
//   background-clip: text;
//   color: transparent;
//   -webkit-background-clip: text;
//   font-size: 100px;
// `

export default App;
