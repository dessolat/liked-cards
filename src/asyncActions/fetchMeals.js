import axios from 'axios';
import { setMeals } from '../redux/actionCreators';

const fetchMeals = () => async dispatch => {
  const { data } = await axios.get('https://themealdb.com/api/json/v1/1/search.php?f=a');
  dispatch(setMeals(data.meals))
};

export default fetchMeals;
