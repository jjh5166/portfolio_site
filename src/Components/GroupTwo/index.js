import React from 'react';
import About from '../About';
import { ParallaxGroup, ParallaxLayer } from '../Parallax'

export default function GroupOne() {
  return (
    <ParallaxGroup className="parallax__group group2">
      <ParallaxLayer className="parallax__layer--base solidity">
        <About />
      </ParallaxLayer>
    </ParallaxGroup>
  )
}