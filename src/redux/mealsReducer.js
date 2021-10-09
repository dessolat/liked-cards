import meals from '../Meals';

const defaultState = {
  meals
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
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
