import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Tv(props) {
  const [trendingTv, setTrendingTv] = useState([]);
  let imgPrefix = "https://image.tmdb.org/t/p/w500";
  console.log(props);

  async function getTrendingTv(mediaType, callback) {
    let { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5704ef950bbc25a9de29d1340094165e`);
    callback(data.results);
  }

  useEffect(() => {
    getTrendingTv("tv", setTrendingTv);
  }, []);

  return (
    <>
      <div className="row">
        {trendingTv.map((tv, index) => (
          <div key={index} className="col-md-3">
            <div className="movie my-3 position-relative">
              <div
                className="voteHeader position-absolute p-2 bgColor end-0 top-0 mx-1 
              rounded-bottom fw-bold textShadow"
              >
                {parseFloat(tv.vote_average).toFixed(1)}
              </div>
              <div className="hoverImg mb-2">
                <Link to={`/tvshowdetails/${tv.id}`}>
                  <img
                    src={imgPrefix + tv.poster_path}
                    className="w-100"
                    alt={tv.title}
                  />
                </Link>
              </div>
              <Link to={`/tvshowdetails/${tv.id}`} className="h5 my-2">
                {tv.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
