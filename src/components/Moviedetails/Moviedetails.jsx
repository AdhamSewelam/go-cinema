import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Moviedetails() {
  const [movie, setMovie] = useState({});
  const [movieTrailer, setMovieTrailer] = useState({});
  // const [genre, setGenre] = useState({});
  let imgPrefix = "https://image.tmdb.org/t/p/original";
  let videoPrefix = "https://www.youtube-nocookie.com/embed/";
  let params = useParams();

  async function getMovieDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=5704ef950bbc25a9de29d1340094165e&language=en-US`
    );
    setMovie(data);
  }

  async function getMovieTrailer() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=5704ef950bbc25a9de29d1340094165e&language=en-US`
    );
    setMovieTrailer(data.results[data.results.length - 1]);
  }

  useEffect(() => {
    getMovieDetails();
    getMovieTrailer();
  }, []);

  function display(a) {
    let hours = Math.trunc(a / 60);
    let mins = a % 60;
    return hours + "h " + " : " + mins + "m ";
  }

  function votingNumber() {
    let voteAverage = parseFloat(movie.vote_average);
    let vote = voteAverage.toFixed(1);
    return vote;
  }

  const styles = {
    backgroundImage: `url(${imgPrefix + movie.backdrop_path})`,
  };

  return (
    <>
      <div className="bgMovie" style={styles}></div>
      <div className="movieDetailsOverlay"></div>
      <div className="movieDetails">
        <div className="row mt-5">
          <div className="col-md-7 m-auto mb-3 position-relative">
            <iframe
              className="img-thumbnail"
              src={videoPrefix + movieTrailer.key}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
          </div>
          <div className="col-md-5 position-relative d-flex flex-column justify-content-center align-content-center">
            <h1 className="h2 my-2 fw-bold">{movie.title}</h1>
            <span className="h5 me-3 my-3">
              {movie.release_date}
              <span className="h5 ms-3 my-2">{display(movie.runtime)}</span>
            </span>

            <p className="h5 my-2">
              Rating:
              {<span className="fw-bold ms-2"> {votingNumber()}</span>} / 10
              <i className="ms-2 fa-solid fa-star text-warning"></i>
            </p>
          </div>
        </div>
        <div className="row position-relative">
          <div
            key={movie.id}
            className="col-md-12 d-flex flex-column justify-content-center align-content-center"
          >
            <div className="my-2">
              <p className="h3 fw-bold">Overview:</p>
              <p className="h5">{movie.overview}</p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
