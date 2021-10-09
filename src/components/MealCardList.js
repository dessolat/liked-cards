import React, { useEffect } from 'react';
import MealCard from './MealCard';
import { useSelector, useDispatch } from 'react-redux';
import fetchMeals from '../asyncActions/fetchMeals';
import PropTypes from 'prop-types';

const MealCardList = () => {
  const meals = useSelector(state => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
		// eslint-disable-next-line
  }, []);

  return (
    <div className='card-list'>
      {meals.map(meal => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

MealCardList.propTypes = {
  likedOnly: PropTypes.bool
};

export default MealCardList;
