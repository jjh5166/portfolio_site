import React, {useState} from 'react';
import styled from 'styled-components';
import SectionNav from '../SectionNav'
import Contact from '../Contact'
import Projects from '../Projects'

export default function SwapModule() {
  const [selectedTab, selectingTab] = useState('projects')
  const handleSelect = (section) => {
    selectingTab(section)
  }

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
`

const BottomContainer = styled.div`
width: 100%;
background: repeating-radial-gradient(seagreen, beige);
height: 94vh;
@media only screen and (max-width: 820px) and (orientation: landscape){
  height: 90vh;
}
`