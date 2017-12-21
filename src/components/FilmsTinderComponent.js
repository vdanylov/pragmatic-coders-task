import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import constants from '../redux/constants/constants'

@connect(
    state => ({
        films: state.films,
        isLoading: state.isLoading,
        error: state.error,
    }),
    dispatch => ({
        getFilms(){
            dispatch({type: constants.GET_FILMS})
        }
    })
)
export default class FilmsTinderComponent extends Component {

    static propTypes = {
        films: PropTypes.array,
        isLoading: PropTypes.bool,
        error: PropTypes.object
    }

    componentDidMount = () => this.props.getFilms();
    
    render() {

        const { films, isLoading, error } = this.props;

        return (
            !isLoading ? 
                <div>
                    <div>
                        <div>
                            Rating
                        </div>
                        Picture
                    </div>
                    <div>
                        Control Panel
                        {films.map(film => <p key={films.id}>{film.title}</p> )}
                    </div>
                </div> : <div>isLoading...</div>        
        )
    }
}