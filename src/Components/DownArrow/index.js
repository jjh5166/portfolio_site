import React from 'react';
import styled from 'styled-components'

export default function DownArrow({scrollTo}) {
  const clickHandler = () => {
    scrollTo.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <DownArrowContainer onClick={clickHandler}>
      <i className="fa fa-chevron-down"></i>
    </DownArrowContainer>
  )
}


const DownArrowContainer = styled.div`
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  animation: bounce 2s infinite 3s;
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