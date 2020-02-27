import React, { useRef } from 'react';
import styled from 'styled-components'

export default function SectionNav({onSelect}) {
  const scrollRef = useRef(null)
  const scrollToHere = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const SelectProjects = () => {
    onSelect('projects');
    scrollToHere();
  }
  const SelectContact = () => {
    onSelect('contact');
    scrollToHere();
  }
  return(
    <GroupNav ref={scrollRef}>
      <NavTab onClick={SelectProjects}><NavText>Projects</NavText></NavTab>
      <NavTab onClick={SelectContact}><NavText>Contact</NavText></NavTab>
    </GroupNav>
  )

}
const GroupNav = styled.div`
  width: 100%;
  background: black;
  display: inline-flex;
  justify-content: space-between;
  height: 8%;
  @media only screen and (min-height: 600px){
    height: 6%;
  }
  @media only screen and (max-width: 823px) and (orientation: landscape){
    height: 10%;
  }
`
const NavTab = styled.div`
  width: 49.8%;
  background: #685A72;
  background: linear-gradient(to bottom,  #D9CCE2 0%,#A696B2 50%,#685A72 100%);
  text-shadow: 1px 1px 1px #5B4E64;
  cursor: pointer;
  @media (hover: hover) {
    :hover{
      background: linear-gradient(to bottom,  #C2B0CE 0%,#806D8F 50%,#42354B 100%);
      text-shadow: 1px 1px 1px #A792B6;
    }
  }
`
const NavText = styled.span`
  vertical-align: middle;
`