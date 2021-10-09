import React, { useState } from 'react';
import { Card } from '@mui/material';
import MealCardMedia from './MealCardMedia';
import MealCardContent from './MealCardContent';
import MealCardActions from './MealCardActions';
import MealCardCollapse from './MealCardCollapse';
import PropTypes from 'prop-types';

const MealCard = ({ meal }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <div className='flex-container'>
        <MealCardMedia thumb={meal.strMealThumb} />
        <MealCardContent
          meal={meal.strMeal}
          area={meal.strArea}
          tags={meal.strTags}
          youtube={meal.strYoutube}
        />
      </div>
      <MealCardActions
        expanded={expanded}
        setExpanded={setExpanded}
        id={meal.idMeal}
        isLiked={meal.isLiked}
      />
      <MealCardCollapse expanded={expanded} instructions={meal.strInstructions} />
    </Card>
  );
};

MealCard.propTypes = {
  meal: PropTypes.object.isRequired
};

export default MealCard;
