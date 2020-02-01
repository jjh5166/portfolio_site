import styled from 'styled-components';

const handleLayerType = type => {
  switch (type) {
    case "fore":
      return "-webkit-transform: translateZ(.3px) scale(.7) !important;" +
      "transform: translateZ(.3px) scale(.7) !important;" +
      "z-index: -1"
    case "deep":
      return "-webkit-transform: translateZ(-3px) scale(4) !important;" +
      "transform: translateZ(-3px) scale(4) !important;"+
      "z-index: -10;"
    case "back":
      return "-webkit-transform: translateZ(-1px) scale(2) !important;" +
      "transform: translateZ(-1px) scale(2) !important;" +
      "z-index: -2;"
    case "fly":
      return "-webkit-transform: translateZ(.6px) scale(.4) !important;" +
      " transform: translateZ(.6px) scale(.4) !important;" +
      "z-index: 3;"
    default:
      return "-webkit-transform: translateZ(0) !important;" +
      "transform: translateZ(0) !important;" +
      "z-index: 1"
  }
};
export const ParallaxGroup = styled.div`
  position: relative;
  height: 100vh;
  width:100%;
  min-height: -webkit-fill-available;
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
  @supports ((perspective: 1px) and (not (-webkit-overflow-scrolling: touch))) {
    ${({ type }) => handleLayerType(type)};
  };
`

export const ParallaxContainer = styled.div`
  height: 100%;
  min-height: -webkit-fill-available;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 200%;
  scroll-snap-type: y proximity;
  @supports ((perspective: 1px) and (not (-webkit-overflow-scrolling: touch))) {
    perspective: 1px;
  };
`