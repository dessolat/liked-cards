import React from 'react';
import { CardActions, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { pink } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const MealCardActions = ({ expanded, setExpanded, id, isLiked }) => {

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardActions sx={{ justifyContent: 'space-between' }}>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        checked={!!isLiked}
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
      <FormControlLabel
        control={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'>
            <ExpandMoreIcon />
          </ExpandMore>
        }
        label='Show recipe'
      />
      <IconButton
        aria-label='delete'
        sx={{
          color: 'black',
          '& .MuiSvgIcon-root': {
            fontSize: '1.8rem'
          }
        }}>
        <DeleteOutlineRoundedIcon />
      </IconButton>
    </CardActions>
  );
};

MealCardActions.propTypes = {
	expanded: PropTypes.bool.isRequired,
	setExpanded: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	isLiked: PropTypes.bool
}

export default MealCardActions;
