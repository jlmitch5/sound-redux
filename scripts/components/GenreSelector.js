import React, {Component, PropTypes} from 'react';
import {deleteGenre} from '../actions/genre';

class GenreSelector extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(genre) {
        const {dispatch} = this.props;
        dispatch(deleteGenre(genre));
    }

    render() {
        const {genres} = this.props;

        return (
            <div className='genreSelector-container'>{genres.map(genre => {
                const boundDelete = this.delete.bind(this, genre);
                return (<div className='genreSelector-genre'>
                    <span className='genreSelector-genre-name'>
                        {genre}
                    </span>
                    <a className='genreSelector-genre-delete'
                      genre={genre}
                      onClick={boundDelete}
                    >
                        <i className='icon ion-close-round'></i>
                    </a>
                </div>);
            })}</div>
        );
    }
}

GenreSelector.propTypes = {
    genres: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default GenreSelector;
