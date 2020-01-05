import styled from 'styled-components';

export const ParallaxGroup = styled.div`
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
  scroll-snap-align: start;
  overflow: hidden;
`

export const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`

export const ParallaxContainer = styled.div`
  height: 100vh;
  perspective: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 200%;
  scroll-snap-type: y proximity;
`