import React from 'react';
import styled from 'styled-components';

export default function About() {
  return(
    <AboutContainer>
      <Pic>
        <img
          src="https://s3.us-east-2.amazonaws.com/jjhv.me/img/profile_pic.jpg"
          alt="profile" />
      </Pic>
    </AboutContainer>
  )
}

const Pic = styled.div`
  clip-path: circle(94px at center);
`
const AboutContainer = styled.div`

`