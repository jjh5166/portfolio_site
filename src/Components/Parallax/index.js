import styled from 'styled-components';

const handleLayerType = type => {
  switch (type) {
    case "fore":
      return " -webkit-transform: translateZ(90px) scale(.7);" +
      "transform: translateZ(90px) scale(.7);" +
      "z-index: 2";
    case "deep":
      return "-webkit-transform: translateZ(-600px) scale(3);" +
      "transform: translateZ(-600px) scale(3);"+
      "z-index: -10;";
    case "back":
      return "-webkit-transform: translateZ(-300px) scale(2);" +
      "transform: translateZ(-300px) scale(2);" +
      "z-index: -2;";
    case "fly":
      return "-webkit-transform: translateZ(180px) scale(.4);" +
      " transform: translateZ(180px) scale(.4);" +
      "z-index: 3;";
    default:
      return "-webkit-transform: translateZ(0);" +
      "transform: translateZ(0);" +
      "z-index: 1";
  }
};
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
  ${({ type }) => handleLayerType(type)};
`

export const ParallaxContainer = styled.div`
  height: 100vh;
  perspective: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 200%;
  scroll-snap-type: y proximity;
`