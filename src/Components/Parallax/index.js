import styled from 'styled-components';

const handleLayerType = type => {
  switch (type) {
    case "fore":
      return "-webkit-transform: translateZ(90px) scale(.7) !important;" +
      "transform: translateZ(90px) scale(.7) !important;"
    case "deep":
      return "transform: translateZ(-450px) scale(2.5) !important;" +
        "-webkit-transform: translateZ(-450px) scale(2.5) !important;"
    case "back":
      return "-webkit-transform: translateZ(-300px) scale(2) !important;" +
      "transform: translate3d(-300px) scale(2) !important;"
    case "fly":
      return "-webkit-transform: translateZ(180px) scale(.4) !important;" +
      " transform: translateZ(180px) scale(.4) !important;"
    default:
      return null
  }
};
export const ParallaxGroup = styled.div`
  position: relative;
  height: 100vh;
  width:100%;
  scroll-snap-align: start;
  transform-style: preserve-3d;
`

export const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform-style: preserve-3d;
  transform-origin: 0 0;
  @supports ((perspective: 1px) and (not (-webkit-overflow-scrolling: touch))) {
    ${({ type }) => handleLayerType(type)};
  };
`

export const ParallaxContainer = styled.div`
  height: 100%;
  width:100%;
  perspective: 300px;
  perspective-origin: 0 0;
  overflow-x: hidden;
  overflow-y: scroll;
  transform-style: preserve-3d;
  min-height: -webkit-fill-available;
  -webkit-overflow-scrolling: touch;
  font-size: 200%;
  scroll-snap-type: y proximity;
`