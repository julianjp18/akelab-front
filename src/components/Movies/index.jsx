import React, { useEffect, useState } from "react";
import { Row, Col, Spin, Input } from "antd";
import './movies.scss';

const { Search } = Input;

const getMovies = async () => {
  const response = await fetch('http://localhost:3001/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        'Akelab': '123456789'
      }
    ),
    redirect: 'follow'
  });

  return await response.json();
};

const Movies = () => {
  const [movies, setmovies] = useState();

  useEffect(() => {
    const allMovies = getMovies();
    if (allMovies) allMovies.then((res) => setmovies(res));

  }, []);

  const onSearch = () => {

  };

  const getGenres = (genres) => {
    const genresList = [];
    genres.map((genreId) => {
      const found = movies.genres.find(genreMovie => genreMovie.id === genreId);
      if (found) genresList.push(found.name);
    });
    return genresList.join(", ");
  };

  return movies ? (
    <Row>
      <Col xs={24}>
        <h1>Movies</h1>
        <Row>
          <Col xs={24}>
            <div className="search-container">
              <Search placeholder="Search movie..." onSearch={onSearch} enterButton />
            </div>
          </Col>
          <Col xs={24}>
            <Row>
              {movies.results.map((movie) => {
                return (
                  <Col xs={8}>
                    <div className="movie-container">
                      <h2 className="title-movie">{movie.title}</h2>
                      <Row>
                        <Col xs={10}>
                          <img className="image-movie" src={`${movies.images_url}${movie.poster_path}`} alt={movie.title} />
                        </Col>
                        <Col xs={14}>
                          <p className="description-movie">{movie.overview}</p>
                          <div className="other-descriptions">
                            <p><b>Título:</b> {movie.original_title}</p>
                            <p><b>Calificación:</b> {movie.vote_average}</p>
                            <p><b>Géneros:</b> {getGenres(movie.genre_ids)}</p>
                            <p><b>Fecha de lanzamiento:</b> {movie.release_date}</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  ) : (
      <div className="space-container">
        <Spin tip="Loading..." size="large" />
      </div>
    );
};

export default Movies;
