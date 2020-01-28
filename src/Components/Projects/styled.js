import styled from 'styled-components';

export const ProjLinks = styled.div`
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
  @media only screen and (max-width: 820px) and (orientation: landscape){
    /* height: 44px; */
  }
  @media only screen and (min-width: 820px) and (orientation: landscape){
  }
  p{
    padding: 12px 24px;
  }
`
export const ButtonStyle = styled.a`
	cursor: pointer;
	display: inline-block;
  position: relative;
  background: #fff;
  color: darkgrey;
  overflow: hidden;
  padding: 14px;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
  backface-visibility: hidden;
  i{
    color: darkgrey;
    position: absolute;
    height: 100%;
    width: 100%;
    font-size: 180%;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    left: 0;
    top: -100%;
  }
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
  :hover{
    span {
      -webkit-transform: translateY(300%);
      -moz-transform: translateY(300%);
      -ms-transform: translateY(300%);
      transform: translateY(300%);
    }
    i{
      top: 0;
    }
  }
`

export const Project = styled.div`
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