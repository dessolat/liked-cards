import React from 'react';
import { Container } from '@mui/material';
import './App.scss';
import Header from './components/Header';
import MealCardList from './components/MealCardList';

const App = () => (
  <Container maxWidth='xl'>
    <Header />
    <MealCardList />
  </Container>
);

export default App;
