const initialState = {
  results: {},
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_SEARCH_RESULTS`:
      return { ...state, results: action.payload, isLoading: false };
    case `SET_LOADING`:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default reducer;
