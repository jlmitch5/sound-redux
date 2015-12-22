import {combineReducers} from 'redux';
import authed from '../reducers/authed';
import entities from '../reducers/entities';
import environment from '../reducers/environment';
import modal from '../reducers/modal';
import navigator from '../reducers/navigator';
import player from '../reducers/player';
import playlists from '../reducers/playlists';
import toggleStats from '../reducers/toggleStats';
import genres from '../reducers/genres';

const rootReducer = combineReducers({
    authed,
    entities,
    environment,
    modal,
    navigator,
    player,
    playlists,
    toggleStats,
    genres,
});

export default rootReducer;
