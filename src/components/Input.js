import React, { Component } from 'react';
import { fetchWeatherMain } from '../functions';
import { connect } from 'react-redux';
import { Form } from './styledComponents/styled';
import { StyledInput } from './styledComponents/styled';

class Input extends Component {
  state = {
    city: '',
    cities: '',
  };

  handleChange = (e) => {
    this.setState({ city: e.target.value });
  };

  handleSubmit = (e) => {
    if (this.state.city !== '') {
      this.props.fetchWeatherMain(this.state.city);

      // this.addToStorage();
      this.setState({ city: '' });
    }
  };

  // Adding to the local storage
  // addToStorage = () => {
  //   if (localStorage.getItem('cities') === null) {
  //     localStorage.setItem('cities', JSON.stringify([this.state.city]));
  //   } else {
  //     this.addToLocalStorageArray('cities', this.state.city);
  //   }
  // };

  // addToLocalStorageArray = (name, value) => {
  //   let old = localStorage.getItem(name);
  //   old = JSON.parse(old);
  //   let newArr = [...old, value];

  //   localStorage.setItem(name, JSON.stringify(newArr));
  // };

  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit(e);

          // (e) => this.addToStorage(e);
        }}
      >
        <StyledInput
          type="text"
          onChange={(e) => this.handleChange(e)}
          value={this.state.city}
          placeholder="Add City"
        ></StyledInput>
      </Form>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchWeatherMain,
//   };
// };

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

export default connect(mapStateToProps, { fetchWeatherMain })(Input);
