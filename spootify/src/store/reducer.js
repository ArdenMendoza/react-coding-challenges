import store from './store';

export const initialDiscoverState = {
    newReleases: [],
    featuredPlaylists: [],
    categories: []
};

export const discoverReducer = (state = initialDiscoverState, action) => {
    switch (action.type) {
        case 'LOAD_NEW_RELEASES':
            return {
                ...state,
                newReleases: action.payload
            }
        case 'LOAD_FEATURED_PLAYLISTS':
            return {
                ...state,
                featuredPlaylists: action.payload
            }
        case 'LOAD_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
    return state;
};
