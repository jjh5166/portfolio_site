import React from 'react';
import styled from 'styled-components';

export default function About() {
  return(
    <AboutContainer>
      <GridDiv>
        <PicContainer>
          <Pic>
            <img
              src="https://s3.us-east-2.amazonaws.com/jjhv.me/img/profile_pic.jpg"
              alt="profile" />
          </Pic>
        </PicContainer>
      </GridDiv>
      <GridDiv>
        <AboutBlurb>
          <p>Hi, I'm John. I’m a full-stack web developer with a background in financial operations. I’m looking for a team that values collaboration and embraces a never-stop-learning attitude. As a self-taught programmer, I’m fast-learner and always seeking new challenges. I like to think outside the box and come up with creative, efficient solutions. I’m currently focusing on refining my React skills and learning how to use Firebase. </p>
          <br></br>
          <p>My experience is mainly in Javascript and Ruby, but I’m always open to learning new languages or utilizing a new library. User experience and functionality are important to me with the things I create. In my free time I’m an avid reader, a dilettante guitarist and a cinephile.</p>
        </AboutBlurb>
      </GridDiv>
    </AboutContainer>
  )
}

const Pic = styled.div`
  clip-path: circle(94px at center);
`
const PicContainer = styled.div`
  margin-top: 3%;
  clip-path: circle(96px at center);
  background: linear-gradient(to bottom right,red, yellow, blue);
  @media only screen and (min-width: 640px) and (orientation: landscape){
    margin-top: 20%;
  }
`
const GridDiv = styled.div`
  height:100%;
`

const AboutContainer = styled.div`
  display: grid;
  height:100%;
  grid-template-rows: 33% 90%;
  grid-template-columns: unset;
   @media only screen and (min-width: 640px) and (orientation: landscape){
    grid-template-columns: 40% 60%;
    grid-template-rows: unset;
  }
`
const AboutBlurb = styled.div`
  font-size: calc(12px + 1vw);  
  color: white;
  text-align: left;
  line-height: 1.5;
  border-radius: 45px;
  background: black;
  padding: 5%;
  margin: 0 2%;
  overflow: scroll;
  @media only screen and (min-width: 640px) and (orientation: landscape){
    padding: 7%;
    margin: 5% 3% 0;
  }
  @media only screen and (max-width: 820px) and (orientation: landscape){
    padding: 4%;
    margin: 3% 3% 0;
    max-height: 45%;
  }
`