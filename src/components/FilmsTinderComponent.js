import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class FilmsTinderComponent extends Component {

    state = {
        moreInfo: false
    }

    static propTypes = {
        film: PropTypes.object,
        likeFilm: PropTypes.func.isRequired,
        dislikeFilm: PropTypes.func.isRequired
    }

    _handleToggleInfo = moreInfo => this.setState((state, props) => ({ moreInfo }))
    
    render() {
        const { 
            film: { imageURL, title, summary, rating },
            isLoading,
            likeFilm,
            dislikeFilm
        } = this.props;
        const { moreInfo } = this.state;
        return (
            <div className='container'>
                <div>
                    <h2>{title} ({rating} / 10)</h2>
                    {!isLoading ? 
                        <img 
                            id='film-image' 
                            src={`${imageURL}`} 
                            alt={title}
                            onClick={this._handleToggleInfo.bind(this, !moreInfo)}
                        /> : <div id='loading'>isLoading</div> }
                </div>
                {moreInfo && <div><p>{summary}</p></div>}
                {!moreInfo &&
                    <div>
                        <button 
                            className='button' 
                            id='accept-button' 
                            onClick={likeFilm.bind(this, this.props.film)}
                        >&#10004;</button>
                        <button 
                            className='button' 
                            id='reject-button' 
                            onClick={dislikeFilm.bind(this, this.props.film)}
                        >&#10006;</button>
                    </div>
                }
            </div>
        )
    }
}
