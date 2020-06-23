import { fetchWheather, exists } from './action/action';
import { notFound } from './action/action';

const addToStorage = (city) => {
  if (localStorage.getItem('cities') === null) {
    localStorage.setItem('cities', JSON.stringify([city]));
  } else {
    addToLocalStorageArray('cities', city);
  }
};

const addToLocalStorageArray = (name, value) => {
  let old = localStorage.getItem(name);
  old = JSON.parse(old);
  let newArr = [...old, value];

  localStorage.setItem(name, JSON.stringify(newArr));
};
const citiesArr = () => JSON.parse(localStorage.getItem('cities'));

export const deleteFromStorage = (city) => {
  console.log(city);
  let old = localStorage.getItem('cities');
  let newArr;
  old = JSON.parse(old);
  newArr = old.filter((singleCity) => singleCity !== city.toLowerCase());
  console.log(newArr);
  localStorage.setItem('cities', JSON.stringify(newArr));
};

export const fetchWeatherMain = (city, check) => (dispatch) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=beb257192a04dd0d96576ae8c0c90799`
  )
    .then((response) => response.json())
    .then((data) => {
      if (check === 'fromLocalStorage') {
        dispatch(fetchWheather(data));
      } else {
        if (citiesArr() === null && data.message !== 'city not found') {
          dispatch(fetchWheather(data));
          addToStorage(city);
        } else if (
          !citiesArr().includes(city) &&
          data.message !== 'city not found'
        ) {
          dispatch(fetchWheather(data));
          addToStorage(city);
        } else if (data.cod == '404') {
          dispatch(notFound());
          setTimeout(() => {
            dispatch(notFound());
          }, 3000);
        } else if (citiesArr().includes(city)) {
          dispatch(exists());
          setTimeout(() => {
            dispatch(exists());
          }, 3000);
        }
      }
    });
};

// export const deleteCity = () => {};
