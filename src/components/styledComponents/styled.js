import styled, { css, keyframes } from 'styled-components';
const gridAnimation = keyframes`
  0% {transform: scale(0)}
  40% { transform : scale(0.8)}
  80% {transform: scale(1.05)}
  100%{transform: scale(1)}
`;
export const GridItem = styled.div`
  border: 1px ${(props) => (props.pinned ? 'red' : 'grey')} solid;
  border-radius: 10px;

  animation-name: ${gridAnimation};
  animation-duration: 0.5s;
  }
`;

export const MainHolder = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1450px) {
    flex-direction: column;
  }
`;

export const StyledP = styled.p`
  padding: 0.8rem 1rem 0 0.4rem;

  font-size: 1.6rem;
  @media (max-width: 1200px) {
    padding-top: 0;
    padding-left: 0.4rem;
  }
  @media (max-width: 928px) {
    font-size: 1.3rem;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledDivPinned = styled.div`
  width: 19.6rem;
  display: flex;
  justify-content: space-between;
  padding-left: 0.4rem;
  @media (max-width: 1150px) {
    width: 13rem;
  }
`;

export const StyledSpan = styled.span`
  font-size: 1.5rem;
`;

export const StyledH = styled.h4`
  font-size: 2rem;
  color: gray;
  padding: 0.4rem;
`;

export const MeasuresP = styled.p`
  font-size: 1.3rem;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 2fr);
  grid-template-rows:  minmax(170px, 170px,);
  grid-auto-flow: row dense;
  & ${GridItem}:nth-child(${(props) => props.pinnedIndex}) {
    grid-column: ${(props) => props.startingRow} / span 2;
    
  }
  @media(max-width: 840px){
    grid-template-columns: repeat(2, 2fr);
    & ${GridItem}:nth-child(${(props) => props.pinnedIndex}) {
    grid-column: 1 / span 2;
    
  }
  }
  
`;

export const MeasuresDiv = styled.div`
  padding: 2rem 0.8rem 0.4rem 0.4rem;
`;

export const GridContainer = styled.div`
  width: 50%;
`;

export const ButtonsHolder = styled.div`
  cursor: pointer;
  font-size: 1.7rem;
  float: right;
  padding: 0.5rem 0.8rem 0.4rem 0;

  & i:first-child {
    padding-right: 0.9rem;
    color: rgba(40, 250, 190, 0.9);
    transform: rotate(45deg);
    transition: transform 2s ease-out;
    transform: ${(props) => props.pinned && 'rotate(0deg )'};
    color: ${(props) => props.pinned && 'red'};
  }
  & i:nth-child(2) {
    color: rgba(250, 100, 100, 0.9);
  }
`;

//input
export const Form = styled.form`
  width: 50%;
  padding: 2rem 0 1rem 0;
  padding-left: 17%;
`;

export const StyledInput = styled.input`
  height: 2.5rem;
  width: 32%;
  font-size: 2rem;
  border: 1px gray solid;
  border-radius: 3px;
  padding: 2px;
`;

export const MeasuresDivPinned = styled.div`
  padding: 0.4rem 0.8rem 0.4rem 0.4rem;
`;

export const ImageStyled = styled.img`
  transform: rotate(90deg);

  height: 60px;
  margin: auto;
`;

export const MainHolderPinned = styled(MainHolder)`
  width: 20rem;
  display: flex;
  margin-right: 5rem;
`;
