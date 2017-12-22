import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import constants from '../redux/constants/constants'
import FilmsTinderComponent from './FilmsTinderComponent'

@connect(
    state => ({
        films: state.films,
        isLoading: state.isLoading,
        error: state.error,
    }),
    dispatch => ({
        getFilms(){
            dispatch({type: constants.GET_FILMS})
        },
        likeFilm(film){
            dispatch({type: constants.LIKE_FILM, film})
        },
        dislikeFilm(film){
            dispatch({type: constants.DISLIKE_FILM, film})
        }
    })
)
export default class FilmsTinderContainer extends Component {

    static propTypes = {
        films: PropTypes.array,
        isLoading: PropTypes.bool,
        error: PropTypes.object
    }

    componentDidMount = () => this.props.getFilms();
    
    render() {

        const { 
            error,
            films,
            isLoading,
            likeFilm,
            dislikeFilm
        } = this.props;

        return (
                <div>
                    <h1 id='title-header'>filmder</h1>
                    <div>
                        {Array.isArray(films) && films.length > 0 ? 
                            <FilmsTinderComponent 
                                film={films[0]} 
                                isLoading={isLoading} 
                                likeFilm={likeFilm}
                                dislikeFilm={dislikeFilm}
                            /> : 
                            !isLoading && <div>No films left :(</div>
                        }
                    </div>
                </div>
        )
    }
}