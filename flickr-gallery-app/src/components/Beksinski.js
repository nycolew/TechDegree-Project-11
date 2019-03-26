import React from 'react';
import Container from './Container';

const Beksinski = (props) => {
  return (
    <div>
      <h2>{ props.searchTerm } Pictures</h2>
      <Container searchTerm={ props.searchTerm } />
    </div>
  );
};

export default Beksinski; 
