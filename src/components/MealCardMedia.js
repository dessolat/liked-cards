import React from 'react';
import { CardMedia } from '@mui/material';
import PropTypes from 'prop-types';

const MealCardMedia = ({ thumb }) => <CardMedia component='img' image={thumb} alt='' />;

MealCardMedia.propTypes = {
  thumb: PropTypes.string.isRequired
};

export default MealCardMedia;
