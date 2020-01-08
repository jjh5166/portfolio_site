import React from 'react';
import styled from 'styled-components'
import SwapModule from '../SwapModule'
import { ParallaxGroup, ParallaxLayer } from '../Parallax'

export default function GroupThree() {
  return (
    <ThreeGroup className="parallax__group">
      <ParallaxLayer>
        <SwapModule/>
      </ParallaxLayer>
    </ThreeGroup>
  )
}

const ThreeGroup = styled(ParallaxGroup)`
  height: 100vh;
  z-index: 7;
  display:flex;
  flex-direction: column;
`