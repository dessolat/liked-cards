export const toggleLoading = () => ({
  type: 'TOGGLE_LOADING'
});

export const setError = payload => ({
  type: 'SET_ERROR',
  payload
});

export const setMeals = payload => ({
  type: 'SET_MEALS',
  payload
});

export const likeToggle = payload => ({
  type: 'LIKE_TOGGLE',
  payload
});

export const deleteMeal = payload => ({
  type: 'DELETE_MEAL',
  payload
});