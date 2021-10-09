import React from 'react'
import MealCard from './MealCard';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'

const MealCardList = () => {
	const meals = useSelector(state => state.meals);

	return (
		<div className='card-list'>
      {meals.map(meal => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
	)
}

MealCardList.propTypes = {
  likedOnly: PropTypes.bool
};

export default MealCardList
