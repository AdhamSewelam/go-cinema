import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Tvshowdetails() {
  const [tv, setTv] = useState({});
  const [tvTrailer, setTvTrailer] = useState({});
  // const [genre, setGenre] = useState({});
  let imgPrefix = "https://image.tmdb.org/t/p/original";
  let videoPrefix = "https://www.youtube-nocookie.com/embed/";
  let params = useParams();

  async function getTvshowdetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.id}?api_key=5704ef950bbc25a9de29d1340094165e&language=en-US`
    );
    setTv(data);
  }

  async function getTvTrailer() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=5704ef950bbc25a9de29d1340094165e&language=en-US`
    );
    setTvTrailer(data.results[data.results.length - 1]);
  }

  useEffect(() => {
    getTvshowdetails();
    getTvTrailer();
  }, []);

  function votingNumber() {
    let voteAverage = parseFloat(tv.vote_average);
    let vote = voteAverage.toFixed(1);
    return vote;
  }

  const styles = {
    backgroundImage: `url(${imgPrefix + tv.backdrop_path})`,
  };

  return (
    <>
      <div className="bgTv" style={styles}></div>
      <div className="tvDetailsOverlay"></div>
      <div className="tvDetails">
        <div className="row mt-5">
          <div className="col-md-7 m-auto mb-3">
          <iframe
              className="img-thumbnail"
              src={videoPrefix + tvTrailer.key}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
          </div>
          <div
            key={tv.id}
            className="col-md-5 d-flex flex-column justify-content-center align-content-center"
          >
            <h1 className="h2 my-2 fw-bold">{tv.original_name}</h1>
            <span className="h5 me-3 my-3">{tv.first_air_date}</span>

            <p className="h5 my-2">
              Rating:
              {<span className="fw-bold ms-2"> {votingNumber()}</span>} / 10
              <i className="ms-2 fa-solid fa-star text-warning"></i>
            </p>
          </div>
        </div>
        <div className="row">
          <div
            key={tv.id}
            className="col-md-12 d-flex flex-column justify-content-center align-content-center"
          >
            <div className="my-2">
              <p className="h3 fw-bold">Overview:</p>
              <p className="h5">{tv.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
