const initialState = {
  recipeList: [],
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return { ...state, recipeList: action.payload };
    case 'ADD_RECIPE':
      return { ...state, recipeList: [...state.recipeList, action.payload] };
    case 'UPDATE_RECIPE':
      return {
        ...state,
        recipeList: state.recipeList.map(recipe =>
          recipe.id === action.payload.id ? action.payload : recipe
        ),
      };
    case 'DELETE_RECIPE':
      return {
        ...state,
        recipeList: state.recipeList.filter(recipe => recipe.id !== action.payload),
      };
    default:
      return state;
  }
};
