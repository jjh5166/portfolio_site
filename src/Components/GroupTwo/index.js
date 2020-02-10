import React from 'react';
import About from '../About'
import styled from 'styled-components'
import { ParallaxGroup, ParallaxLayer } from '../Parallax'

const GroupTwo = React.forwardRef((props, ref) => (

      <TwoGroupContainer>
      <TwoGroup className="parallax__group" ref={ref}>
        <Deep type="deep">
        </Deep>
        <TwoBase type="base">
          <About />
        </TwoBase>
        <Fore type="fore">
          {[...Array(30)].map((_, i) => {
            return (<TriRow row={i-10} key={"Row"+i}/>)
          })}
        </Fore>
      </TwoGroup>
      </TwoGroupContainer>
));

const TriRow = ({row}) => {
  return(
  [...Array(20)].map((_, i) => {
    let start = (row % 2) === 0 ? -30 : 0
    let color = (row % 4) === 0 ? color4 : (row % 3) === 0 ? color3 : (row % 2) === 0 ? color2 : color1
    // randomize colors
    // let color = colors[Math.floor(Math.random() * colors.length)];
    let theProps = { left: (i * 60 + start + "px"), row: row, color: color };
    return (<Tri {...theProps} key={"Tri" + row + i} />)
  })
  )
}

const color1 = "rgba(137,115,153,.8)"
const color2 = "rgba(255,140,150,.8)"
const color3 = "rgba(254,179,165,.8)"
const color4 = "rgba(242,109,153,.8)"

const Deep = styled(ParallaxLayer)`
  background: url("https://s3.us-east-2.amazonaws.com/jjhv.me/img/qbkls.png");
   -webkit-background-size: contain;
  -moz-background-size: contain;
  background-size: contain;
  background-repeat: repeat;
  top: -10%;
  z-index: -10;
  :before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255,217,179,0.6);
    z-index: 2;
    mix-blend-mode: multiply
  }
  @media only screen and (min-width: 820px) and (orientation: landscape){
    background-size: auto;
  }
`
const Fore = styled(ParallaxLayer)`
  z-index: -1;
  position: static;
  @supports ((perspective: 1px) and (not (-webkit-overflow-scrolling: touch))) {
    position: absolute;
  }
`
// const colors = [color1, color2, color3, color4]
const Tri = styled.div.attrs(props => ({
  style: {
    borderBottom: "50px solid " + props.color,
    left: props.left,
    top: ((props.row - 1) * 50 + 9) + "px",
  },
}))`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
`

const TwoBase = styled(ParallaxLayer)`
  z-index: 1;
`
const TwoGroup = styled(ParallaxGroup)`
  z-index: 6;
`
const TwoGroupContainer = styled.div`
  width:100%;
  height: 94%;
  @media only screen and (max-width: 820px) and (orientation: landscape){
    height: 90%;
  }
`
export default GroupTwo;