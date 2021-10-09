import React from 'react';
import { Collapse, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const MealCardCollapse = ({ expanded, instructions }) => (
  <Collapse in={expanded} timeout='auto' unmountOnExit>
    <CardContent>
      <Typography paragraph>{instructions}</Typography>
    </CardContent>
  </Collapse>
);

MealCardCollapse.propTypes = {
  expanded: PropTypes.bool.isRequired,
  instructions: PropTypes.string.isRequired
};

export default MealCardCollapse;
