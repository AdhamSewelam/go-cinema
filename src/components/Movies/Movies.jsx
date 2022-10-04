import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Movies(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  let imgPrefix = "https://image.tmdb.org/t/p/w500";
  console.log(props);

  async function getTrendingMovies(mediaType, callback) {
    let { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5704ef950bbc25a9de29d1340094165e`);
    callback(data.results);
  }

  useEffect(() => {
    getTrendingMovies("movie", setTrendingMovies);
  }, []);

  return (
    <>
      <div className="row">
        {trendingMovies.map((movie, index) => (
          <div key={index} className="col-md-3">
            <div className="movie my-3 position-relative">
              <div
                className="voteHeader position-absolute p-2 bgColor end-0 top-0 mx-1 
              rounded-bottom fw-bold textShadow"
              >
                {parseFloat(movie.vote_average).toFixed(1)}
              </div>
              <div className="hoverImg mb-2">
                <Link to={`/moviedetails/${movie.id}`}>
                  <img
                    src={imgPrefix + movie.poster_path}
                    className="w-100"
                    alt={movie.title}
                  />
                </Link>
              </div>
              <Link to={`/moviedetails/${movie.id}`} className="h5 my-2">
                {movie.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
