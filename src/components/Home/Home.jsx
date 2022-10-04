import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [trendingCarsoul, setTrendingCarsoul] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);
  let imgPrefix = "https://image.tmdb.org/t/p/w500";
  let imgPrefixOriginal = "https://image.tmdb.org/t/p/original";
  console.log(props);

  async function getTrendingMovies(mediaType, callback) {
    let { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5704ef950bbc25a9de29d1340094165e`);
    callback(data.results.slice(0, 10));
  }

  async function getTrendingCarsoul(mediaType, callback) {
    let { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5704ef950bbc25a9de29d1340094165e`);
    callback(data.results.slice(0, 6));
  }

  useEffect(() => {
    getTrendingCarsoul("movie", setTrendingCarsoul);
    getTrendingMovies("movie", setTrendingMovies);
    getTrendingMovies("tv", setTrendingTv);
    getTrendingMovies("person", setTrendingPeople);
  }, []);

  return (
    <>
      <div className="row">
        <div className="my-5">
          <Splide
            options={{
              type: "loop",
              gap: "10px",
              drag: "free",
              arrows: true,
              pagination: true,
              perPage: 2,
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: true,
                speed: 1,
              },
              breakpoints: {
                1024: {
                  perPage: 2,
                },
                767: {
                  perPage: 1,
                },
                640: {
                  perPage: 1,
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <Link to={`/moviedetails/${trendingCarsoul[0]?.id}`}>
                <div className="position-relative SplideSlide d-flex flex-column justify-content-center align-content-center align-items-center">
                  <img
                    src={imgPrefixOriginal + trendingCarsoul[0]?.backdrop_path}
                    className="d-block w-100 img-fluid img-thumbnail rounded-3"
                    alt={trendingCarsoul[0]?.title}
                  />
                  <div className="position-absolute bottom-0 pb-3 d-none d-md-block">
                    <h4 className="h5 hoverTitle text-white fw-bold textShadow p-2">
                      {trendingCarsoul[0]?.title}
                    </h4>
                  </div>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={`/moviedetails/${trendingCarsoul[1]?.id}`}>
                <div className="position-relative SplideSlide d-flex flex-column justify-content-center align-content-center align-items-center">
                  <img
                    src={imgPrefixOriginal + trendingCarsoul[1]?.backdrop_path}
                    className="d-block w-100 img-fluid img-thumbnail rounded-3"
                    alt={trendingCarsoul[1]?.title}
                  />
                  <div className="position-absolute bottom-0 pb-3 d-none d-md-block">
                    <h4 className="h5 hoverTitle text-white fw-bold textShadow p-2">
                      {trendingCarsoul[1]?.title}
                    </h4>
                  </div>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={`/moviedetails/${trendingCarsoul[2]?.id}`}>
                <div className="position-relative SplideSlide d-flex flex-column justify-content-center align-content-center align-items-center">
                  <img
                    src={imgPrefixOriginal + trendingCarsoul[2]?.backdrop_path}
                    className="d-block w-100 img-fluid img-thumbnail rounded-3"
                    alt={trendingCarsoul[2]?.title}
                  />
                  <div className="position-absolute bottom-0 pb-3 d-none d-md-block">
                    <h4 className="h5 hoverTitle text-white fw-bold textShadow p-2">
                      {trendingCarsoul[2]?.title}
                    </h4>
                  </div>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={`/moviedetails/${trendingCarsoul[3]?.id}`}>
                <div className="position-relative SplideSlide d-flex flex-column justify-content-center align-content-center align-items-center">
                  <img
                    src={imgPrefixOriginal + trendingCarsoul[3]?.backdrop_path}
                    className="d-block w-100 img-fluid img-thumbnail rounded-3"
                    alt={trendingCarsoul[3]?.title}
                  />
                  <div className="position-absolute bottom-0 pb-3 d-none d-md-block">
                    <h4 className="h5 hoverTitle text-white fw-bold textShadow p-2">
                      {trendingCarsoul[3]?.title}
                    </h4>
                  </div>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={`/moviedetails/${trendingCarsoul[4]?.id}`}>
                <div className="position-relative SplideSlide d-flex flex-column justify-content-center align-content-center align-items-center">
                  <img
                    src={imgPrefixOriginal + trendingCarsoul[4]?.backdrop_path}
                    className="d-block w-100 img-fluid img-thumbnail rounded-3"
                    alt={trendingCarsoul[4]?.title}
                  />
                  <div className="position-absolute bottom-0 pb-3 d-none d-md-block">
                    <h4 className="h5 hoverTitle text-white fw-bold textShadow p-2">
                      {trendingCarsoul[4]?.title}
                    </h4>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          </Splide>
        </div>

        <div className="col-md-4 flex-column d-flex justify-content-center align-content-center">
          <div className="brdr mb-4"></div>
          <h2 className="h3 textShadow">Trending Movies To Watch Right Now</h2>
          <p className="text-muted m-0">Trending Movies To Watch</p>
          <Link to={`/movies`} className="seeMore">
            See More →
          </Link>
          <div className="brdr mt-4"></div>
        </div>
        {trendingMovies.map((movie, index) => (
          <div key={index} className="col-md-2">
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

      <div className="row">
        <div className="col-md-4 flex-column d-flex justify-content-center align-content-center">
          <div className="brdr mb-4"></div>
          <h2 className="h3 textShadow">
            Trending Tv Shows To Watch Right Now
          </h2>
          <p className="text-muted m-0">Trending Tv Shows To Watch</p>
          <Link to={`/tv`} className="seeMore">
            See More →
          </Link>
          <div className="brdr mt-4"></div>
        </div>
        {trendingTv.map((tv, index) => (
          <div key={index} className="col-md-2">
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
                    alt={tv.name}
                  />
                </Link>
              </div>
              <Link to={`/tvshowdetails/${tv.id}`} className="h5 my-2">
                {tv.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-4 flex-column d-flex justify-content-center align-content-center">
          <div className="brdr mb-4"></div>
          <h2 className="h3 textShadow">Trending Actors To Watch Right Now</h2>
          <p className="text-muted m-0">Trending Actors To Watch</p>
          <div className="brdr mt-4"></div>
        </div>
        {trendingPeople.map((actor, index) => (
          <div key={index} className="col-md-2">
            <div className="movie my-3 position-relative">
              <div className="hoverImg mb-2">
                <Link to={`/actordetails/${actor.id}`}>
                  <img
                    src={imgPrefix + actor.profile_path}
                    className="w-100"
                    alt={actor.name}
                  />
                </Link>
              </div>
              <Link to={`/actordetails/${actor.id}`} className="h5 my-2">
                {actor.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
