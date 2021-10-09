import React from 'react';
import MealCard from './MealCard';
import { useSelector } from 'react-redux';

import useMeals from '../hooks/useMeals';
import PropTypes from 'prop-types';

const MealCardList = ({ likedOnly }) => {
  const meals = useSelector(state => state.meals);
  const filteredMeals = useMeals(likedOnly, meals);

  return (
    <>
      {filteredMeals.length ? (
        <div className='card-list'>
          {filteredMeals.map(meal => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      ) : (
        <div className='empty-meals'>
          <h2>No meals to show.</h2>
        </div>
      )}
    </>
  );
};

MealCardList.propTypes = {
  likedOnly: PropTypes.bool
};

export default MealCardList;
