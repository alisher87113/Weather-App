import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { PinnedCardHolder } from './styledComponents/styled';
import { deleteCity } from '../action/action';
import { pinCity } from '../action/action';
import { deleteFromStorage } from '../functions';
import { GridItem } from './styledComponents/styled';
import { StyledH } from './styledComponents/styled';
import { MainHolder } from './styledComponents/styled';
import { StyledP } from './styledComponents/styled';
import { StyledSpan } from './styledComponents/styled';
import { StyledDiv } from './styledComponents/styled';
import { MeasuresDivPinned } from './styledComponents/styled';
import { MeasuresP } from './styledComponents/styled';
import { ButtonsHolder } from './styledComponents/styled';
import { StyledDivPinned } from './styledComponents/styled';
import Logo from '../../src/images/arrow1.png';
import { ImageStyled } from './styledComponents/styled';
import { MainHolderPinned } from './styledComponents/styled';

class PinnedGridItem extends Component {
  render() {
    const { name, weather, wind, main, id, pinned } = this.props;
    const kelvinToCelcius = (k) => Math.floor(k - 273);
    const temp = kelvinToCelcius(main.temp);
    const feelsLike = kelvinToCelcius(main.feels_like);
    const windDeg = wind.deg;

    return (
      <GridItem>
        {' '}
        <MeasuresDivPinned>
          <div style={{ display: 'flex' }}>
            <MainHolderPinned>
              <StyledH>{name}</StyledH>
              <StyledP>{weather[0].description}</StyledP>
            </MainHolderPinned>
            <span>Wind</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ paddingTop: '2rem' }}>
              <StyledDivPinned>
                <MeasuresP>Temperature:</MeasuresP>
                <StyledSpan>{temp}°C</StyledSpan>
              </StyledDivPinned>
              <StyledDivPinned>
                <MeasuresP>Feels like:</MeasuresP>
                <StyledSpan>{feelsLike}°C</StyledSpan>
              </StyledDivPinned>
              <StyledDivPinned>
                <MeasuresP>Humidity: </MeasuresP>
                <StyledSpan>{main.humidity}%</StyledSpan>
              </StyledDivPinned>
              <StyledDivPinned>
                <MeasuresP>Pressure:</MeasuresP>
                <StyledSpan>{main.pressure} mm</StyledSpan>
              </StyledDivPinned>
            </div>

            {/* <ImageStyled windDirection={wind.deg} src={Logo} /> */}
          </div>
          <ButtonsHolder pinned>
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
          </ButtonsHolder>{' '}
        </MeasuresDivPinned>
      </GridItem>
    );
  }
}

export default connect(null, { deleteCity, pinCity })(PinnedGridItem);
