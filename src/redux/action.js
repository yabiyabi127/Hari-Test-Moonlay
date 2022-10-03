import axios from "axios";
export const SET_LOADING = "SET_LOADING";
export const SET_PEOPLE = "SET_PEOPLE";
export const SET_PLANET = "SET_PLANET";
export const SET_STARSHIPS = "SET_STARSHIPS";
export const SET_ADD_PEOPLE = "SET_ADD_PEOPLE";
export const SET_DELETE_PEOPLE = "SET_DELETE_PEOPLE";
export const SET_PEOPLE_BY_ID = "SET_PEOPLE_BY_ID";
export const SET_PLANETS_BY_ID = "SET_PLANETS_BY_ID";
export const SET_STARSHIPS_BY_ID = "SET_STARSHIPS_BY_ID";

const API_URL = process.env.REACT_APP_API_URL

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
export const setPeople = (payload) => ({
  type: SET_PEOPLE,
  payload,
});
export const setPlanets = (payload) => ({
  type: SET_PLANET,
  payload,
});
export const setStarships = (payload) => ({
  type: SET_STARSHIPS,
  payload,
});
export const setaddPeople = (payload) => ({
  type: SET_ADD_PEOPLE,
  payload,
});
export const setPeopleByid = (payload) => ({
  type: SET_PEOPLE_BY_ID,
  payload,
});
export const setPlanetsByid = (payload) => ({
  type: SET_PLANETS_BY_ID,
  payload,
});
export const setStarshipsByid = (payload) => ({
  type: SET_STARSHIPS_BY_ID,
  payload,
});

export const getPeople = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/people`);
    const { status, data } = res;
    if (status == 200) {
      dispatch(setPeople(data.results));
      // dispatch(setLoading(false));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log("Duarrr error", error);
  }
};

export const getPlanet = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/planets`);
    const { status, data } = res;
    if (status == 200) {
      dispatch(setPlanets(data.results));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log("Duarrr error", error);
  }
};
export const getStarships = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/starships`);
    const { status, data } = res;
    if (status == 200) {
      dispatch(setStarships(data.results));
    }
  } catch (error) {
    dispatch(setLoading(false));
    console.log("Duarrr error", error);
  }
};
export const getPeopleById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/people/${id}`);
    const { status, data } = res;
    if (status === 200) {
      dispatch(setPeopleByid(data));
    }
  } catch (error) {
    console.log(error);
  }
};
export const getPlanetsById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    const { status, data } = res;
    if (status === 200) {
      dispatch(setPlanetsByid(data));
    }
  } catch (error) {
    console.log(error);
  }
};
export const getStarshipsByid = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    const { status, data } = res;
    if (status === 200) {
      dispatch(setStarshipsByid(data));
    }
  } catch (error) {
    console.log(error);
  }
};
