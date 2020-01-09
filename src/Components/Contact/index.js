import React from 'react';
import MyForm from './form.js'
import Icons from '../Icons'
import styled from 'styled-components'

export default function Contact() {

  return (
    <ContactContainer>
      <ContactHeader>Contact Me</ContactHeader>
      <MyForm/>
      <EmailLink>
      <a href="mailto:jjh5166@gmail.com">
        <i className="fas fa-envelope"></i>
        jjh5166@gmail.com
      </a>
      </EmailLink>
      <Icons/>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  position: absolute;
  height: inherit;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media only screen and (max-width: 820px) and (orientation: landscape){
    flex-direction: row;
    justify-content: space-between;
  }
`
const EmailLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 27px;
  width: 100%;
  > a, a:visited{
    color: white;
  }
  @media only screen and (max-width: 820px) and (orientation: landscape){
    order: 1;
    flex-direction: column;
    font-size: 15px;
  }
`
const ContactHeader = styled.h2`
  @media only screen and (max-width: 820px) and (orientation: landscape){
    display: none;
  }
`