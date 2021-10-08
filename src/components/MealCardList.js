import React from 'react'
import MealCard from './MealCard';
import meals from '../Meals'

const MealCardList = () => {
	return (
		<div className='card-list'>
      {meals.map(meal => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
	)
}

export default MealCardList
