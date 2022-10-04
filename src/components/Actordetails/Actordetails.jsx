import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Actordetails() {
  const [actor, setActor] = useState({});
  // const [genre, setGenre] = useState({});
  let imgPrefix = "https://image.tmdb.org/t/p/original";
  let params = useParams();

  async function getActordetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${params.id}?api_key=5704ef950bbc25a9de29d1340094165e&language=en-US`
    );
    setActor(data);
  }
  useEffect(() => {
    getActordetails();
  }, []);

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-4 my-3">
          <img
            src={imgPrefix + actor.profile_path}
            className="img-thumbnail"
            alt={actor.name}
          />
        </div>
        <div
          key={actor.id}
          className="col-md-8 d-flex flex-column justify-content-center align-content-center"
        >
          <h1 className="h2 my-2 fw-bold">{actor.name}</h1>
          <span className="h5 me-3 my-2">
            <span className="fw-bold">Born:</span>{" "}
            {<span className="fw-bold textShadow">{actor.birthday}</span>} in{" "}
            {<span className="fw-bold textShadow">{actor.place_of_birth}</span>}
          </span>
          <div className="my-4">
            <p className="h3 fw-bold">Biography:</p>
            <p className="h5">{actor.biography}</p>
          </div>
        </div>
      </div>
    </>
  );
}
