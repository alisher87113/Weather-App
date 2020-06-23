import { ADD_WEATHER, DELETE_CITY, NOT_FOUND, EXISTS, PIN_CITY } from './types';

export const fetchWheather = (data) => {
  return {
    type: ADD_WEATHER,
    payload: data,
  };
};

export const deleteCity = (id) => {
  console.log('pop');
  return {
    type: DELETE_CITY,
    payload: id,
  };
};

export const pinCity = (id) => {
  return {
    type: PIN_CITY,
    payload: id,
  };
};

export const notFound = () => {
  return {
    type: NOT_FOUND,
  };
};

export const exists = () => {
  return {
    type: EXISTS,
  };
};
