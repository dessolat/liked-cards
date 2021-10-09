import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import fetchMeals from './asyncActions/fetchMeals';
import Header from './components/Header';
import Filters from './components/Filters';
import MealCardList from './components/MealCardList';
import Loader from './components/loader/Loader';

const App = () => {
  const [likedOnly, setLikedOnly] = useState(false);
  const error = useSelector(state => state.error);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
    // eslint-disable-next-line
  }, []);

  return (
    <Container maxWidth='xl'>
      {error !== '' ? (
        <div className='error-message'>
          <h2>{error}</h2>
        </div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Filters likedOnly={likedOnly} setLikedOnly={setLikedOnly} />
          <MealCardList likedOnly={likedOnly} />
        </>
      )}
    </Container>
  );
};
export default App;
