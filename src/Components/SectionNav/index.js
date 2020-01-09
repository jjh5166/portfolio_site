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
  height: 6%;
  @media only screen and (max-width: 820px) and (orientation: landscape){
    height: 10%;
  }
`
const NavTab = styled.div`
  width: 49.8%;
  background: #454049;
  text-align: center;
  cursor: pointer;
  :hover{
    color: grey;
  }
`
const NavText = styled.span`
  vertical-align: middle;
`