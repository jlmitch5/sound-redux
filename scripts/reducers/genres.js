import * as types from '../constants/ActionTypes';

const initialState = {
    genres: [
        'john_mitchell',
        'less western',
        'DJ Paypal',
    ],
};

export default function player(state = initialState, action) {
    switch (action.type) {
    case types.DELETE_GENRE:
        const index = state.genres.indexOf(action.genre);

        if (index > -1) {
            return Object.assign({}, state, {
                genres: [
                    ...state.genres.slice(0, index),
                    ...state.genres.slice(index + 1, state.genres.length),
                ],
            });
        } else {
            return state;
        }
        break;

    default:
        return state;
    }
}
