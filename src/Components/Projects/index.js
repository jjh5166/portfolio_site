import React from 'react';
import styled from 'styled-components';
import ProjectItem from './item'

export default function Projects() {

  const projects = [
    {
      projName: "PremPicks",
      repo: "https://github.com/jjh5166/prempicks",
      appURL: "http://prempicks.herokuapp.com/",
      sshot: "https://s3.us-east-2.amazonaws.com/jjhv.me/img/prempicks.png",
      bkgdAdjust: "0 0",
      blurb: "A custom picks league for the English Premier League. Built with Ruby on Rails, using Sidekiq on Redis for backend, a Postgres database and a Python script. Automated email reminders, API monitoring for scoring scripts to be run. The app is fully responsive and the league has 50 users this season!"
    },
    {
      projName: "React Calendar",
      repo: "https://github.com/jjh5166/react_calendar",
      appURL: "https://jjhvcal.netlify.com/",
      sshot: "https://s3.us-east-2.amazonaws.com/jjhv.me/img/matt-power-TpHmEoVSmfQ-unsplash.jpg",
      blurb: "A calendar application built in React. Extensive use of the Context API for interacting with Momenter.js"
    },
    {
      projName: "Portfolio Site",
      repo: "https://github.com/jjh5166/portfolio_site",
      appURL: "jjhv.me",
      sshot: "https://s3.us-east-2.amazonaws.com/jjhv.me/img/portfolio_site.png",
      bkgdAdjust: "0 44%",
      blurb: "Take a look under the hood of this page! Built in React."
    }
  ]
  return (
    <ProjectsContainer>
      <ProjFlex>
        {
          projects.map((project, i) => {
            return (
              <ProjectItem
                key={'Project' + i}
                {...project}
              />
            )
          })
        }
      </ProjFlex>
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  
`
const ProjFlex = styled.div`
  position: relative;
  height:100%;
  width:100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  @media only screen and (max-width: 820px) and (orientation: landscape){
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 820px) and (orientation: landscape){
  }
`

