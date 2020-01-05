import React from 'react';
import About from '../About';
import styled from 'styled-components'
import { ParallaxGroup, ParallaxLayer } from '../Parallax'

const GroupTwo = React.forwardRef((props, ref) => (

    <ParallaxGroup className="parallax__group group2" ref={ref}>
      <Waves className="parallax__layer--deep" />
      <ParallaxLayer className="parallax__layer--base fdtn">
        <About />
      </ParallaxLayer>
    </ParallaxGroup>
))

const Waves = styled(ParallaxLayer)`
  background:
    radial-gradient(circle at 63% 50%, rgba(96, 16, 48, 0) 9px, black 10px, rgba(96, 16, 48, 0) 35px) 0px 10px,
    radial-gradient(at 86% 69%,      rgba(96, 16, 48, 0) 9px, black 10px, rgba(96, 16, 48, 0) 25px),
    white;
  background-size: 31px 17px;
`

export default GroupTwo;