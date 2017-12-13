const movies = (state = [], action) => {
    switch (action.type) {
        case 'MOVIES_FETCH_DATA_SUCCESS':
            return action.movies.results;

        default:
            return state;
    }
}

export default movies;
