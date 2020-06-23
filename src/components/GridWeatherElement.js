import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteCity } from '../action/action';
import { pinCity } from '../action/action';
import { deleteFromStorage } from '../functions';
import { GridItem } from './styledComponents/styled';
import { StyledH } from './styledComponents/styled';
import { MainHolder } from './styledComponents/styled';
import { StyledP } from './styledComponents/styled';
import { StyledSpan } from './styledComponents/styled';
import { StyledDiv } from './styledComponents/styled';
import { MeasuresDiv } from './styledComponents/styled';
import { MeasuresP } from './styledComponents/styled';
import { ButtonsHolder } from './styledComponents/styled';
const DissapearingSpan = styled.span`
  font-size: 1.5rem;
  @media (max-width: 930px) {
    display: none;
  }
`;

class GridWeatherElement extends Component {
  render() {
    const { name, weather, wind, main, id, pinned } = this.props;
    const kelvinToCelcius = (k) => Math.floor(k - 273);
    const temp = kelvinToCelcius(main.temp);
    const feelsLike = kelvinToCelcius(main.feels_like);

    return (
      <GridItem>
        <MainHolder>
          <StyledH>{name}</StyledH>
          <StyledP>{weather[0].description}</StyledP>
        </MainHolder>

        <MeasuresDiv>
          <StyledDiv>
            <MeasuresP>Temperature:</MeasuresP>
            <StyledSpan>{temp}°C</StyledSpan>
          </StyledDiv>
          <StyledDiv>
            <MeasuresP>Feels like:</MeasuresP>
            <StyledSpan>{feelsLike}°C</StyledSpan>
          </StyledDiv>
          <StyledDiv>
            <MeasuresP>Humidity: </MeasuresP>
            <StyledSpan>{main.humidity}%</StyledSpan>
          </StyledDiv>
          <StyledDiv>
            <MeasuresP>Pressure:</MeasuresP>
            <StyledSpan>
              {main.pressure} <DissapearingSpan>mm</DissapearingSpan>
            </StyledSpan>
          </StyledDiv>
        </MeasuresDiv>
        <ButtonsHolder pinned={pinned}>
          <i
            className="fa fa-thumb-tack"
            onClick={() => this.props.pinCity(id)}
          ></i>

          <i
            className="fa fa-trash"
            onClick={() => {
              this.props.deleteCity(id);
              deleteFromStorage(name);
            }}
          ></i>
        </ButtonsHolder>
      </GridItem>
    );
  }
}

export default connect(null, { deleteCity, pinCity })(GridWeatherElement);
