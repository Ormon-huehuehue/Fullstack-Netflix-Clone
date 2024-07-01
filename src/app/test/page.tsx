"use client"

import React, { useEffect, useState } from 'react';



const FavouritesComponent = () => {
  const [favourites, setFavourites] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/favourites')
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setFavourites(data.fav);
        }
      })
      .catch(error => {
        console.error('Error fetching favourites:', error);
        setError('Failed to fetch favourites');
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {favourites ? (
        <div>Favourite: {JSON.stringify(favourites)}
        </div>
       
        
      ) : (
        <div>Loading favourites...</div>
      )}


      
    </div>
    

  );
};

export default FavouritesComponent;

