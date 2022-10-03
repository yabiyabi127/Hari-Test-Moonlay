import { SET_ADD_PEOPLE, SET_LOADING, SET_PEOPLE, SET_PEOPLE_BY_ID, SET_PLANET, SET_PLANETS_BY_ID, SET_STARSHIPS } from "./action";

const initialState = {
    isLoading: false,
    people:[],
    planets:[],
    starships:[],
    newpeople:[],
    peoplebyid:[],
    planetsbyid:[],
    starshipsbyid:[],
};

function reducer(state = initialState, { payload, type }) {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_PEOPLE:
      return {
        ...state,
        people: payload,
      };
    case SET_PLANET:
      return {
        ...state,
        planets: payload,
      };
    case SET_STARSHIPS:
      return {
        ...state,
        starships: payload,
      };
    case SET_ADD_PEOPLE:
      return {
        ...state,
        newpeople: payload,
      };
    case SET_PEOPLE_BY_ID:
      return {
        ...state,
        peoplebyid: payload,
      };
    case SET_PLANETS_BY_ID:
      return {
        ...state,
        planetsbyid: payload,
      };
    default:
      return state;
  }
}

export default reducer;
