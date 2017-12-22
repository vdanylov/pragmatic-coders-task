import constants from '../constants/constants'

const initialState = {
    films: [],
    accepted: [],
    rejected: [],
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  
  case constants.SAVE_FILMS:
    return {
      ...state,
      films: action.films
    }
  case constants.LIKE_FILM:
    return {
      ...state,
      accepted: [
        ...state.accepted,
        action.film
      ],
      films: [
        ...state.films.filter(item => item.id != action.film.id)
      ]
    }
  case constants.DISLIKE_FILM:
    return {
      ...state,
      rejected: [
        ...state.rejected,
        action.film
      ],
      films: [
        ...state.films.filter(item => item.id != action.film.id)
      ]
    }
  case constants.SET_LOADING_STATUS:
    return {
      ...state,
      isLoading: action.isLoading
    }
  case constants.SET_LOADING_ERROR:
    return {
      ...state,
      error: action.error
    }
  default:
    return state
  }
}
