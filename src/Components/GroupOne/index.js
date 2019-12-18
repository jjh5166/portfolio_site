import React from 'react';
import Title from '../Title';
import DownArrow from '../DownArrow'
import styled from 'styled-components'
import { ParallaxGroup, ParallaxLayer } from '../Parallax'

export default function GroupOne(props) {
  return(
    <ParallaxGroup className="parallax__group group1">
      <Lagos className="parallax__layer--back lagos"/>
      <ParallaxLayer className="parallax__layer--base">
        <Title />
      </ParallaxLayer>
      <DownArrow scrollTo={props.nextRef}/>
    </ParallaxGroup>
  )
}

const Lagos = styled(ParallaxLayer)`
  background-image: url(https://s3.us-east-2.amazonaws.com/jjhv.me/img/lagos_palms.jpg);
  background-blend-mode: multiply;
  background-size: cover;
  background-color: rgba(130,50,75,.4);
  will-change: background-color;
  background-position-x: 46%;
  @media only screen and (min-width: 813px) {
    background-position-x: 30%
  }
`