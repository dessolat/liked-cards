import axios from 'axios';
import { setMeals } from '../redux/actionCreators';

const fetchMeals = () => async dispatch => {
	try {
		const { data } = await axios.get('https://themealdb.com/api/json/v1/1/search.php?f=c');
		dispatch(setMeals(data.meals))
		
	} catch (err) {
		console.error(err.message)
	}
};

export default fetchMeals;
