import React from 'react';
import About from '../About';
import styled from 'styled-components'
import { ParallaxGroup, ParallaxLayer } from '../Parallax'

const GroupTwo = React.forwardRef((props, ref) => (

    <ParallaxGroup className="parallax__group group2" ref={ref}>
      <Waves/>
      <ParallaxLayer className="parallax__layer--base fdtn">
        <About />
      </ParallaxLayer>
    </ParallaxGroup>
))

const Waves = styled(ParallaxLayer)`
  /* background-image: url(https://s3.us-east-2.amazonaws.com/jjhv.me/img/matt-power-TpHmEoVSmfQ-unsplash.jpg);
  width: 300%; */
  background:
linear-gradient(-45deg, white 25%, transparent 25%, transparent 75%, black 75%, black) 0 0,
linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, white 75%, white) 1em 1em,
linear-gradient(45deg, black 17%, transparent 17%, transparent 25%, black 25%, black 36%, transparent 36%, transparent 64%, black 64%, black 75%, transparent 75%, transparent 83%, black 83%) 1em 1em;
background-color: white;
background-size: 2em 2em;
`

export default GroupTwo;