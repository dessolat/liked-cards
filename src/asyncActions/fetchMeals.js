import axios from 'axios';
import { setError, setMeals, toggleLoading } from '../redux/actionCreators';

const fetchMeals = () => async dispatch => {
  try {
    dispatch(toggleLoading());
    const {data} = await axios.get('https://themealdb.com/api/json/v1/1/search.php?f=c');
		data !== '' && dispatch(setMeals(data.meals));
  } catch (err) {
    dispatch(setError(err.message));
  } finally {
    dispatch(toggleLoading());
  }
};

export default fetchMeals;
