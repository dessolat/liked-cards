const defaultState = {
  meals: [],
  isLoading: false,
  error: ''
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return { ...state, isLoading: !state.isLoading };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_MEALS':
      return { ...state, meals: action.payload };
    case 'LIKE_TOGGLE':
      const mappedMeals = state.meals.map(meal =>
        meal.idMeal === action.payload ? { ...meal, isLiked: !meal.isLiked } : meal
      );
      return { ...state, meals: mappedMeals };
    case 'DELETE_MEAL':
      const filteredMeals = state.meals.filter(meal => meal.idMeal !== action.payload);
      return { ...state, meals: filteredMeals };
    default:
      return state;
  }
};

export default reducer;
