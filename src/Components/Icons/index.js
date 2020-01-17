import React from 'react';
import styled from 'styled-components'

export default function Icons() {
  return (
    <IconContainer>
      <IconLink href="https://github.com/jjh5166" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"/>
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/jjhv5/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"/>
      </IconLink>
      <IconLink href="https://www.goodreads.com/user/show/58250451-john" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-goodreads"/>
      </IconLink>
    </IconContainer>
  );
};

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  > a:visited{
    color: white;
  }
  @media only screen and (max-width: 820px) and (orientation: landscape){
    order: 3;
    flex-direction: column;
  }
`

const IconLink = styled.a`
  margin: 0 4px;
  font-size: 45px;
  @media only screen and (max-width: 820px) and (orientation: landscape){
    margin: 6px 0;
  }
`
