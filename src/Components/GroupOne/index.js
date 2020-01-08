import React from 'react';
import Title from '../Title';
import DownArrow from '../DownArrow'
import styled from 'styled-components'
import { ParallaxGroup, ParallaxLayer } from '../Parallax'

export default function GroupOne(props) {
  return(
    <OneGroup className="parallax__group">
      <Lagos type="back" className="darken"/>
      <ParallaxLayer type="base">
        <Title />
      </ParallaxLayer>
      <DownArrow scrollTo={props.nextRef}/>
    </OneGroup>
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
const OneGroup = styled(ParallaxGroup)`
  height: 100vh;
  z-index: 5;
`