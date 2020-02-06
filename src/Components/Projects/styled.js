import React from 'react';
import styled from 'styled-components';

export const ProjBlurbContainer = styled.div`
  font-size: calc(10px + 1vw);
  background: hsla(0, 0%, 10%, .8);
  min-height: 80px;
  max-height: 180px;
  color: white;
  text-align: left;
  line-height: 1.5;
  overflow: scroll;
  width: 100%;
  margin-bottom: -.05%;
  p{
    padding: 12px 24px;
  }
`

export const Project = styled.div`
  cursor: pointer;
  flex: 1 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-blend-mode: multiply;
  background-color: hsla(0, 0%, 41%, 1);
  background-image:${props => (props.sshot ? ("url(" + props.sshot + ")") : ' ')};
  background-size: cover;
  background-position: center center;
  transition: all 1s;
  color: hsla(0, 0%, 100%, 0.7);
  ${props => props.expanded ?
    `flex-grow: 13; z-index: 2; flex-direction: column; justify-content: space-between;
    color: white; background-color: hsla(0, 0%, 60%, 1);`
    :
    `:hover{ background-color: hsla(0, 0%, 27%, 1);
      color: hsla(0, 0%, 100%, 1);}`
  }
  @media only screen and (max-width: 820px) and (orientation: landscape){
    height:100%;
  }
  @media only screen and (min-width: 820px) and (orientation: landscape){
    background-position: ${props => props.bkgdAdjust};
  }
`
export const ProjHeaderText = styled.h3`
  text-align: center;
  white-space: nowrap;
  @media only screen and (min-width: 660px) and (orientation: landscape){
    display: inline-block;
    width: 90%;
    white-space: pre-wrap;
  }
`
export const ProjHeaderContainer = styled.div`
`
export const ProjTitle = styled.div`
  background: hsla(0, 0%, 10%, .8);
  width: 100%;
  padding: 10px 0;
`

export const PDContainer = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ProjLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25%;
  font-size: calc(10px + 1vw);
  width: 80%;
  @media only screen and (min-width: 660px) and (orientation: landscape){
    flex-direction: row;
  }
  @media only screen and (max-width: 820px) and (orientation: landscape){
    width: 354px;
    height: 44px;
  }
  @media only screen and (min-width: 820px) and (orientation: landscape){
    width: 400px;
    height: 50px;
  }
`
const ButtonStyle = styled.a`
	cursor: pointer;
	display: inline-block;
  position: relative;
  background: #fff;
  color: darkgrey;
  overflow: hidden;
  font-size: 16px;
  padding: 14px;
  line-height: 24px;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  span {
    display: inline-block;
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.3s;
    -webkit-backface-visibility: hidden;
    -moz-transition: all 0.3s;
    -moz-backface-visibility: hidden;
    transition: all 0.3s;
    backface-visibility: hidden;
  }
  :before{
    left: 0;
	  top: -100%;
    position: absolute;
    height: 100%;
    width: 100%;
    line-height: 2.5;
    font-size: 180%;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }
  :hover{
    span {
      -webkit-transform: translateY(300%);
      -moz-transform: translateY(300%);
      -ms-transform: translateY(300%);
      transform: translateY(300%);
    }
    :before {
	    top: -20%;
    }
  }
`

const ExtLinkButton = styled(ButtonStyle)`
  :before{
    font-weight: 900;
    font-family: "Font Awesome 5 Pro";
    content: "\f35d";
  }
`
const GitHubButton = styled(ButtonStyle)`
  :before{
    font-family: "Font Awesome 5 Brands";
    content: "\f113";
  }
`

export const ProjButtons = ({ repo, appURL }) => {
  return (
    <ProjLinks>
      <ExtLinkButton href={appURL} target="_blank" rel="noopener noreferrer">
        <span>Visit Site</span>
      </ExtLinkButton>
      <GitHubButton href={repo} target="_blank" rel="noopener noreferrer">
        <span>View Repository</span>
      </GitHubButton>
    </ProjLinks>
  )
}