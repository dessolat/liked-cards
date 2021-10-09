import { useMemo } from 'react';

const useMeals = (likedOnly, meals) =>
  useMemo(() => (likedOnly ? meals.filter(meal => meal.isLiked) : meals), [likedOnly, meals]);

export default useMeals;
