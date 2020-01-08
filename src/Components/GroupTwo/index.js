import React from 'react';
import About from '../About'
import styled from 'styled-components'
import { ParallaxGroup, ParallaxLayer } from '../Parallax'

const GroupTwo = React.forwardRef((props, ref) => (

    <TwoGroup className="parallax__group" ref={ref}>
      <Pattern type="deep" />
      <TwoBase type="base">
        <About />
        
      </TwoBase>
    </TwoGroup>
))

const Pattern = styled(ParallaxLayer)`
  background:
    radial-gradient(circle at 63% 50%, rgba(96, 16, 48, 0) 9px, black 10px, rgba(96, 16, 48, 0) 35px) 0px 10px,
    radial-gradient(at 86% 69%, rgba(96, 16, 48, 0) 9px, black 10px, rgba(96, 16, 48, 0) 25px),
    white;
  background-size: 31px 17px;
  margin-top: -10%;
`
const TwoBase = styled(ParallaxLayer)`
  background: linear-gradient(80deg,black,transparent, black);
`
const TwoGroup = styled(ParallaxGroup)`
  height: 94vh;
  z-index: 6;
  @media only screen and (max-width: 820px) and (orientation: landscape){
    height: 90vh;
  }
`
export default GroupTwo;