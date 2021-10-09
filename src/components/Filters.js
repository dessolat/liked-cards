import React from 'react';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { Checkbox, FormControlLabel } from '@mui/material';
import { pink } from '@mui/material/colors';
import PropTypes from 'prop-types';

const Filters = ({ likedOnly, setLikedOnly }) => {
  return (
    <div className='filters'>
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            checked={likedOnly}
            onChange={() => {
              setLikedOnly(!likedOnly);
            }}
            sx={{
              color: 'black',
              '&.Mui-checked': {
                color: pink[600]
              },
              '& .MuiSvgIcon-root': {
                fontSize: '1.8rem'
              }
            }}
          />
        }
        label='only liked'
      />
    </div>
  );
};

Filters.propTypes = {
  likedOnly: PropTypes.bool.isRequired,
  setLikedOnly: PropTypes.func.isRequired
};

export default Filters;
