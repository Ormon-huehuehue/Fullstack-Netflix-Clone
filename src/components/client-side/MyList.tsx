"use client"


import React,{useEffect, useState} from 'react';
import MovieCard from '../MovieCard';

interface MovieListProps {
  Title: string;
}

const MyList: React.FC<MovieListProps> = ({ Title }) => {

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

  useEffect(() => {},[favourites,error]);
  if (error) {
    return <div>Error: {error}</div>;
  }
 
    // Convert movies to plain objects by serializing to JSON and parsing

    // const convertedMovies = favourites.map(movie => JSON.parse(JSON.stringify(movie._doc)));
  
    return (
      <div className="bg-black px-4 md:px-12 pt-4 space-y-8">
        <div id="movielistcard" className="w[100px] bg-black">
          <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
            {Title}
          </p>
          <div className="grid grid-cols-4 gap-2 mt-5">
          
          
            {favourites&& favourites.map((fav) => (
              <div key={fav._id}>
                <MovieCard movie={fav} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default MyList;