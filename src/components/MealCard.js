import React from 'react';
import { Card } from '@mui/material';
import MealCardMedia from './MealCardMedia';
import PropTypes from 'prop-types';

const MealCard = ({ meal }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<MealCardMedia thumb={meal.strMealThumb} />
		</Card>
  );
};

MealCard.propTypes = {
  meal: PropTypes.object.isRequired
};

export default MealCard;