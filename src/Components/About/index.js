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
      <BlurbDiv>
        <AboutBlurb>
          <BlurbContent>
            <p>Hi, I'm John. I’m a full-stack web developer with a background in financial operations. I’m looking for a team that values collaboration and embraces a never-stop-learning attitude. As a self-taught programmer, I’m a fast-learner and always seeking new challenges. I like to think outside the box and come up with creative, efficient solutions. I’m currently focusing on refining my React skills and learning how to use Firebase. </p>
            <p>My experience is mainly in Javascript and Ruby, but I’m always open to learning new languages or utilizing a new library. User experience and functionality are important to me with the things I create. In my free time I’m an avid reader, a dilettante guitarist and a cinephile.</p>
          </BlurbContent>
        </AboutBlurb>
      </BlurbDiv>
    </AboutContainer>
  )
}

const Pic = styled.div`
  clip-path: circle(94px at center);
`
const PicContainer = styled.div`
  margin-top: 1%;
  clip-path: circle(96px at center);
  background: linear-gradient(to bottom right,#685A72, white, #685A72);
  @media only screen and (min-width: 640px) and (orientation: landscape){
    margin-top: 20%;
  }
`
const GridDiv = styled.div`
  height:100%;
`
const BlurbDiv = styled(GridDiv)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
  @media only screen and (min-width: 580px) and (orientation: landscape){
    justify-content: space-around;
  }
`

const AboutContainer = styled.div`
  position: relative;
  display: grid;
  height:100%;
  grid-template-rows: 205px 1fr;
  grid-template-columns: unset;
  @media only screen and (min-height: 560px) and (orientation: portrait){
    grid-template-rows: 215px 1fr;
  }
  @media only screen and (min-width: 580px) and (orientation: landscape){
    grid-template-columns: 40% 60%;
    grid-template-rows: unset;
  }
`
const AboutBlurb = styled.div`
  position: relative;
  font-size: calc(12px + 1vw);
  color: white;
  text-align: left;
  line-height: 1;
  border-radius: 45px;
  background: #685A72;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0 2%;
  max-height: 285px;
  @media only screen and (min-height: 580px) and (orientation: portrait){
    max-height: 97%;
  }
  @media only screen and (min-height: 800px) and (orientation: portrait){
    line-height: 1.5;
  }
  @media only screen and (min-width: 580px) and (orientation: landscape){
    height: 90%;
    margin: 0% 2%;
    line-height: 1;
  }
  @media only screen and (min-width: 824px) and (orientation: landscape){
    line-height: 1.5;
    margin: 3% 3% 0;
    max-height: 85%;
  }
`

const BlurbContent = styled.div`
  width: 100%;
  height: 100%;
  p{
    padding: 5%;
    @media only screen and (min-width: 580px) and (orientation: landscape){
      padding: 7%;
    }
    @media only screen and (min-width: 824px) and (orientation: landscape){
      line-height: 1.5;
      padding: 4%;
    }
  }

`