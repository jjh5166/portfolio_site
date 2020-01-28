import React, { useState, useRef, useEffect } from 'react';
import { 
        ProjLinks,
        ProjBlurbContainer,
        ButtonStyle,
        ProjHeaderText,
        Project,
        ProjHeaderContainer,
        ProjTitle,
        PDContainer
} from './styled';

export default function ProjectItem({ projName, sshot, bkgdAdjust, repo, appURL, blurb }) {
  const [expanded, setExpanded] = useState(false)
  const node = useRef()

  const clickExpand = () => {
    setExpanded(!expanded);
  }
  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setExpanded(false);
  }
  useEffect(() => {
    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);
  return (
    <Project
      onClick={clickExpand}
      sshot={sshot}
      bkgdAdjust={bkgdAdjust}
      expanded={expanded}
      ref={node}
    >
      {expanded ? 
        <ProjDetails repo={repo} appURL={appURL} blurb={blurb} projName={projName}/>
        :
        <ProjHeader text={projName}/>
      }
    </Project>
  )

}
const ProjHeader = ({text}) => {
  return(
    <ProjHeaderContainer>
      <ProjHeaderText>{text}</ProjHeaderText>
    </ProjHeaderContainer>
  )
}
const ProjButtons = ({repo, appURL}) => {
  return(
    <ProjLinks>
      <ButtonStyle href={appURL} target="_blank" rel="noopener noreferrer">
        <i className="fas fa-external-link-alt"></i>
        <span>Visit App</span>
      </ButtonStyle>
      <ButtonStyle href={repo} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github-alt"></i>
        <span>View Repository</span>
      </ButtonStyle>
    </ProjLinks>
  )
}
const ProjBlurb = ({text}) => {
  return(
    <ProjBlurbContainer>
      <p>
        {text}
      </p>
    </ProjBlurbContainer>
  )
}
const ProjDetails = ({repo, appURL, blurb, projName}) => {
  return(
    <PDContainer>
      <ProjTitle>{projName}</ProjTitle>
      <ProjButtons repo={repo} appURL={appURL}/>
      <ProjBlurb text={blurb} />
    </PDContainer>
  )
}