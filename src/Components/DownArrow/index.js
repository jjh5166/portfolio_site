import React, { useState } from 'react';
import styled from 'styled-components'

export default function DownArrow({ scrollTo }) {
  const [wasClicked, clicking] = useState(false)
  const clickHandler = () => {
    clicking(true);
    scrollTo.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <DownArrowContainer onClick={clickHandler} wasClicked={wasClicked}>
      <i className="fa fa-chevron-down"></i>
    </DownArrowContainer>
  )
}

const DownArrowContainer = styled.div`
  cursor: pointer;
  z-index: 2;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  animation: bounce 2s infinite 5s;
  animation-play-state: ${props => (props.wasClicked ? 'paused' : 'running')};
  @keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-8px);
  }
}
`