import React from 'react';
import About from '../About'
import styled from 'styled-components'
import { ParallaxGroup, ParallaxLayer } from '../Parallax'

const GroupTwo = React.forwardRef((props, ref) => (

    <TwoGroup className="parallax__group" ref={ref}>
      <Deep type="deep">
      </Deep>
      <TwoBase type="base">
        <About />
      </TwoBase>
      <Fore type="fore">
        <TriRow row={-10} />
        <TriRow row={-9} />
        <TriRow row={-8} />
        <TriRow row={-7} />
        <TriRow row={-6} />
        <TriRow row={-5} />
        <TriRow row={-4} />
        <TriRow row={-3} />
        <TriRow row={-2} />
        <TriRow row={-1} />
        <TriRow row={0} />
        <TriRow row={1} />
        <TriRow row={2} />
        <TriRow row={3} />
        <TriRow row={4} />
        <TriRow row={5} />
        <TriRow row={6} />
        <TriRow row={7} />
        <TriRow row={8} />
        <TriRow row={9} />
        <TriRow row={10} />
        <TriRow row={11} />
        <TriRow row={12} />
        <TriRow row={13} />
        <TriRow row={14} />
        <TriRow row={15} />
        <TriRow row={16} />
        <TriRow row={17} />
        <TriRow row={18} />
        <TriRow row={19} />
        <TriRow row={20} />
      </Fore>
    </TwoGroup>
))
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
  background-image: url("https://s3.us-east-2.amazonaws.com/jjhv.me/img/qbkls.png");
  background-color: rgba(254,179,165,0.6);
  background-color: rgba(255,217,179,0.6);
  background-blend-mode: multiply;
  top: -10%;
`
const Fore = styled(ParallaxLayer)``
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

const TwoBase = styled(ParallaxLayer)``
const TwoGroup = styled(ParallaxGroup)`
  height: 94vh;
  z-index: 6;
  @media only screen and (max-width: 820px) and (orientation: landscape){
    height: 90vh;
  }
`
export default GroupTwo;