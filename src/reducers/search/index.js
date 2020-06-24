const initialState = {
  results: {
    tours: [],
    cities: [],
    attractions: []
  },
  isLoading: false,
  notFound: false,
  lastRequest: ``
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_SEARCH_RESULTS`:
      return {
        ...state,
        results: action.payload,
        isLoading: false,
        notFound: false
      };
    case `SET_LOADING`:
      return { ...state, isLoading: true };
    case `SET_NOT_FOUND`:
      return { ...state, notFound: true };
    case `SET_LAST_REQUEST`:
      return { ...state, lastRequest: action.payload };
    default:
      return state;
  }
};

export default reducer;
