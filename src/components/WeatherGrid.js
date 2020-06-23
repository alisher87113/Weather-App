import React, { Component } from 'react';
import { connect } from 'react-redux';
import GridWeatherElement from './GridWeatherElement';
import { StyledGrid } from './styledComponents/styled';
import PinnedGridItem from './PinnedGridItem';

class WeatherGrid extends Component {
  render() {
    const filteredArr = this.props.info.filter((city) => city.pinned !== false);
    const pinnedIndex = this.props.info.indexOf(filteredArr[0]) + 1;
    const startingRow = pinnedIndex % 3 === 0 ? 1 : pinnedIndex % 3;

    console.log(startingRow);
    return (
      <div>
        <StyledGrid pinnedIndex={pinnedIndex} startingRow={startingRow}>
          {this.props.info.map((city) =>
            city.pinned ? (
              <PinnedGridItem
                id={city.id}
                key={city.id}
                name={city.name}
                weather={city.weather}
                main={city.main}
                wind={city.wind}
              />
            ) : (
              <GridWeatherElement
                id={city.id}
                key={city.id}
                name={city.name}
                weather={city.weather}
                main={city.main}
                wind={city.wind}
              />
            )
          )}
        </StyledGrid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.cities,
  };
};

export default connect(mapStateToProps)(WeatherGrid);
