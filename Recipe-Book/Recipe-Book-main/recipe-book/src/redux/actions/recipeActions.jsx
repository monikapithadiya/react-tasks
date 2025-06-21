export const setRecipes = (recipes) => ({ type: 'SET_RECIPES', payload: recipes });
export const addRecipe = (recipe) => ({ type: 'ADD_RECIPE', payload: recipe });
export const updateRecipe = (recipe) => ({ type: 'UPDATE_RECIPE', payload: recipe });
export const deleteRecipe = (id) => ({ type: 'DELETE_RECIPE', payload: id });
