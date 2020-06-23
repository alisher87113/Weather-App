import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import WeatherGrid from './components/WeatherGrid';
import { connect } from 'react-redux';
import { fetchWeatherMain } from './functions';
import { GridContainer } from './components/styledComponents/styled';
import styled from 'styled-components';

const ErrorDiv = styled.div`
  font-size: 2rem;
  color: red;
  padding: 0 0 1rem 0;
  width: 50%;
  text-align: center;
`;

class App extends Component {
  componentDidMount() {
    const cities = JSON.parse(localStorage.getItem('cities'));
    cities !== null &&
      cities.map((city) => {
        this.props.fetchWeatherMain(city, 'fromLocalStorage');
      });
  }

  render() {
    return (
      <div className="App" style={{ width: '90vw', margin: 'auto' }}>
        <Input />
        {this.props.notFound ? <ErrorDiv>Cound't find city</ErrorDiv> : ''}
        {this.props.exists ? (
          <ErrorDiv>This city already exists in your Grid</ErrorDiv>
        ) : (
          ''
        )}
        <GridContainer>
          <WeatherGrid />
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    notFound: state.notFound,
    exists: state.exists,
  };
};

export default connect(mapStateToProps, { fetchWeatherMain })(App);
