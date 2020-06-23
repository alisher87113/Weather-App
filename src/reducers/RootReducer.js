import { initialState } from '../store/store';

export const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WEATHER':
      return {
        ...state,
        cities: [...state.cities, { ...action.payload, pinned: false }],
      };
    case 'DELETE_CITY':
      console.log('deleted');
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    case 'NOT_FOUND':
      console.log('p');
      return {
        ...state,
        notFound: !state.notFound,
      };
    case 'EXISTS':
      console.log('o');
      return {
        ...state,
        exists: !state.exists,
      };
    case 'PIN_CITY':
      return {
        ...state,
        cities: state.cities.map((city) =>
          city.id === action.payload
            ? { ...city, pinned: true }
            : { ...city, pinned: false }
        ),
      };
  }
  return state;
};
