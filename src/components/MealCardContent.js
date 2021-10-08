import React from 'react';
import { CardContent, Typography, Link } from '@mui/material';
import PropTypes from 'prop-types';

const MealCardContent = ({ meal, area, tags, youtube }) => {
  return (
    <CardContent sx={{ minHeight: 160 }}>
      <Typography gutterBottom variant='h6' component='div'>
        {meal}
      </Typography>
      <Typography variant='body2'>Cuisine: {area}</Typography>
      {tags && <Typography variant='body2'>Tags: {tags.split(',').join(', ')}</Typography>}
      <Typography variant='body2' mt={1}>
        {'YouTube: '}
        <Link href={youtube} underline='none'>
          {youtube}
        </Link>
      </Typography>
    </CardContent>
  );
};

MealCardContent.propTypes = {
  meal: PropTypes.string.isRequired,
  area: PropTypes.string,
  tags: PropTypes.string,
  youtube: PropTypes.string
};

export default MealCardContent;
