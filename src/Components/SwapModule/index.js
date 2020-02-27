import React, {useState} from 'react';
import styled from 'styled-components';
import SectionNav from '../SectionNav'
import Contact from '../Contact'
import Projects from '../Projects'

export default function SwapModule() {
  const [selectedTab, selectingTab] = useState('projects')

  return (
    <GroupContainer>
      <SectionNav onSelect={selectingTab}/>
      <BottomContainer>
        <ShowTab selectedTab={selectedTab}/>
      </BottomContainer>
    </GroupContainer>
    
  )
}

function ShowTab(props) {
  switch (props.selectedTab) {
    case 'projects':
      return <Projects/>;
    case 'contact':
      return <Contact/>;
    default:
      return <Projects />;
  }
}
const GroupContainer = styled.div`
height: 100%;
`

const BottomContainer = styled.div`
width: 100%;
height: 92%;
@media only screen and (min-height: 600px){
  height: 94%;
}
@media only screen and (max-width: 823px) and (orientation: landscape){
  height: 90%;
}
`