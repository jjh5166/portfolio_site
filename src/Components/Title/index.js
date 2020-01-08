import React from 'react';
import styled from 'styled-components';

export default function Title() {
  return (
    <TitleContainer>
      <TitleText >John Hartnett V</TitleText>
      <SubText>
        <Brace>&#123;</Brace> Web Developer <Brace>&#125;</Brace>
      </SubText>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
  height:100%;
  width:100%;
  font-size: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top:20%;
`
const TitleText = styled.div`
  top:30%;
  width: fit-content;
  text-shadow:-3px 0px 0 rgba(255, 255, 255, .6), 3px 0px 0 rgba(255, 255, 255, .6);
  transition: text-shadow .5s ease;
  animation: unhaze 1s 2s forwards;
  @keyframes unhaze {
  100% {
    text-shadow: 3px 0px 0 rgba(6,5,239,0.4), 4px 0px 0 rgba(255,255,255,.6)
  }
}
`
const SubText = styled.div`
width: fit-content;
  font-size: .5em;
  opacity: .7;
  /* text-shadow: -1px -1px 0 var(--blinkshadow),
  1px -1px 0 var(--blinkshadow),
  -1px 1px 0 var(--blinkshadow),
  1px 1px 0 var(--blinkshadow),
  0 -2px 8px, 0 0 2px,
  0 0 5px #ff7e00,
  0 0 15px #ff4444,
  0 0 2px #ff7e00,
  0 2px 3px #000; */

  text-shadow:-2px 0px 0 rgba(6, 5, 239, 0.4), 1px 0px 0 rgba(255, 255, 255, .6);
  animation: blinkon 2s 2s linear forwards;
  --blinkshadow: rgba(255, 255, 255, .4);
  @keyframes blinkon {
    0%, 5.99%, 9.99%, 35%, 50%, 70%, 100%{
      opacity: 1;
      color:#ff66b3;
      text-shadow: -1px -1px 0 var(--blinkshadow), 1px -1px 0 var(--blinkshadow), -1px 1px 0 var(--blinkshadow), 1px 1px 0 var(--blinkshadow), 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00, 0 2px 3px #000;
    }
    2%, 6%, 10%, 40%, 60%, 90%{
      opacity: .7;
      color:white;
    }
  }
`
const Brace = styled.span`
  font-size: 1.25em;
`