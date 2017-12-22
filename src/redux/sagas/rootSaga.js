import { getFilms, likeFilm, dislikeFilm } from '../actions/filmsActions'
import { call, put, takeEvery, all } from 'redux-saga/effects'
import constants from '../constants/constants'

function* workerLikeFilmSaga(action){
  yield call(likeFilm, action.film)
}

function* workerDislkeFilmSaga(action){
  yield call(dislikeFilm, action.film)
}

function* workerGetFilmsSaga() {
  try {
    yield put({type: constants.SET_LOADING_STATUS, isLoading: true});      
    const films = yield call(getFilms);
    yield put({ type: constants.SAVE_FILMS, films })
    yield put({type: constants.SET_LOADING_STATUS, isLoading: false});  
  } catch (error) {
    yield put({type: constants.SET_LOADING_STATUS, isLoading: false});      
  }
}

function* watchLikeDislikeFilms(){
  yield takeEvery('LIKE_FILM', workerLikeFilmSaga) // action to get films   
  yield takeEvery('DISLIKE_FILM', workerDislkeFilmSaga) // action to get films   
}

function* watchGetFilms(){
  yield takeEvery('GET_FILMS', workerGetFilmsSaga) // action to get films   
}
  
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
  export default function* rootSaga(){
    yield all([
      watchGetFilms(),
      watchLikeDislikeFilms()
    ])
  }