import React from 'react';
import styled from 'styled-components';

export default function Title() {
  const handleScroll = (e) => {
    console.log(e.scrollTop)
    e.stopPropagation()
  }
  return (
    <TitleContainer onScroll={(e)=>handleScroll}>
      <LineLeft>John</LineLeft>
      <LineRight>Hartnett</LineRight>
      <LineDown>V</LineDown>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 23%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 2em;
`
const LineLeft = styled.div`
`
const LineRight = styled.div`
`
const LineDown = styled.div`
`