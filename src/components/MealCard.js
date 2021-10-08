import React from 'react';
import { Card } from '@mui/material';
import MealCardMedia from './MealCardMedia';
import MealCardContent from './MealCardContent';
import PropTypes from 'prop-types';

const MealCard = ({ meal }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<MealCardMedia thumb={meal.strMealThumb} />
			<MealCardContent
        meal={meal.strMeal}
        area={meal.strArea}
        tags={meal.strTags}
        youtube={meal.strYoutube}
      />
		</Card>
  );
};

MealCard.propTypes = {
  meal: PropTypes.object.isRequired
};

export default MealCard;