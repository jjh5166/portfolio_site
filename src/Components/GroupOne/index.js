import React from 'react';
import Title from '../Title';
import styled from 'styled-components'
import { ParallaxGroup, ParallaxLayer } from '../Parallax'

export default function GroupOne(props) {

  let opac = 'rgba(130,50,75, ' + Math.min(.9, ((.001 * props.scrollTop) + .4)) + ')';

  return(
    <ParallaxGroup className="parallax__group group1">
      <Lagos className="parallax__layer--back" backgroundOpac={opac}>
        <p>{props.scrollTop}</p>
      </Lagos>
      <ParallaxLayer className="parallax__layer--base">
        <Title />
      </ParallaxLayer>
    </ParallaxGroup>
  );
}


const Lagos = styled(ParallaxLayer).attrs(({ backgroundOpac}) => ({
  style: {
    backgroundColor: backgroundOpac
  },
}))`
  background-image: url(https://s3.us-east-2.amazonaws.com/jjhv.me/img/lagos_palms.jpg);
  background-blend-mode: multiply;
  background-size: cover;
`