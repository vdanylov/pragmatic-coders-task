import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class FilmsTinderComponent extends Component {

    state = {
        moreInfo: false,
        loaded: false
    }

    static propTypes = {
        film: PropTypes.object,
        likeFilm: PropTypes.func.isRequired,
        dislikeFilm: PropTypes.func.isRequired
    }

    componentWillReceiveProps = (nextProps) => {
        const { film: { id } } = this.props;
        if(id !== nextProps.film.id){
            this.setState({loaded: false});
        }
    }
    

    _handleToggleInfo = moreInfo => this.setState((state, props) => ({ moreInfo }))

    _handleOnImageOnload = () => this.setState({ loaded: true});
    
    render() {
        const { 
            film: { imageURL, title, summary, rating },
            isLoading,
            likeFilm,
            dislikeFilm
        } = this.props;
        const { moreInfo, loaded } = this.state;
        return (
            <div className='container'>
                <div>
                    <div>
                        <h3 id='film-title'>{title}</h3>
                        <p id='film-rating'>({rating} / 10)</p>
                    </div>
                        <img 
                            style={{ display: !loaded && 'none'}}
                            id='film-image' 
                            src={`${imageURL}`} 
                            alt={title}
                            onLoad={this._handleOnImageOnload}
                            onClick={this._handleToggleInfo.bind(this, !moreInfo)}
                        /> 
                    {!loaded && 
                        <div id='loading'>
                            <div id='loading-sign'>isLoading</div>                        
                        </div>}
                </div>
                {moreInfo && <div id='summary'><p>{summary}</p></div>}
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
