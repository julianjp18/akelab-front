import React, { useEffect, useState } from "react";
import FilterImage from '../../resources/images/filter.png';
import YellowStar from '../../resources/images/yellow_star.png';
import GrayStar from '../../resources/images/gray_star.png';
import { Row, Col, Spin, Input, Select } from "antd";
import './movies.scss';

const { Option } = Select;

const SHOW_MOVIE = 'show-movie';
const HIDE_MOVIE = 'hide-movie';

const getMovies = async () => {
  const response = await fetch('https://akelab-server.herokuapp.com/movies', {
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
  const [originalMovies, setoriginalMovies] = useState();
  const [order, setOrder] = useState();
  const [searchTitleMovie, setSearchTitleMovie] = useState();
  const [genres, setGenres] = useState();
  useEffect(() => {
    const allMovies = getMovies();
    if (allMovies) allMovies.then((res) => {
      setmovies(res);
      setoriginalMovies(res);
    });
  }, []);

  const orderMovies = (orderType) => {
    if (orderType === 'asc-date') {
      movies.results.sort((a, b) => {
        if (a.release_date < b.release_date) {
          return 1;
        }
        if (a.release_date > b.release_date) {
          return -1;
        }
        
        return 0;
      });
    } else if (orderType === 'desc-date') {
      movies.results.sort((a, b) => {
        if (a.release_date > b.release_date) {
          return 1;
        }
        if (a.release_date < b.release_date) {
          return -1;
        }
        
        return 0;
      });
    } else if (orderType === 'zero-points') {
      movies.results.sort((a, b) => {
        if (a.vote_average > b.vote_average) {
          return 1;
        }
        if (a.vote_average < b.vote_average) {
          return -1;
        }
        
        return 0;
      });
    } else if (orderType === 'ten-points') {
      movies.results.sort((a, b) => {
        if (a.vote_average < b.vote_average) {
          return 1;
        }
        if (a.vote_average > b.vote_average) {
          return -1;
        }
        
        return 0;
      });
    } else setmovies(originalMovies);
  };

  const changeOrder = (value) => { 
    setOrder(value);
    if (!value) orderMovies('');
    if (value === 'newsOlders') orderMovies('asc-date');
    if (value === 'oldersNews') orderMovies('desc-date');
    if (value === 'zeroPoints') orderMovies('zero-points');
    if (value === 'tenPoints') orderMovies('ten-points');
  };

  const onSearch = (e) => {
    const { value } = e.target;
    setSearchTitleMovie(value);
  };

  const changeGenres = (values) => {
    if (values) setGenres(values);
    else setGenres([]);
  };

  const getGenres = (genres) => {
    const genresList = [];
    genres.map((genreId) => {
      const found = movies.genres.find(genreMovie => genreMovie.id === genreId);
      if (found) genresList.push(found.name);
    });
    return genresList.join(", ");
  };

  const getGenresIds = (genresMovies) => {
    let isMatch = false;
    genresMovies.map((genreId) => {
      const found = genres.find(genreMovieId => genreMovieId === genreId);
      if (found) {
        isMatch = true;
        return true;
      }
    });

    return isMatch;
  };

  const showMovie = (genre_ids) => {
    if (genres.length > 0) {
      if (getGenresIds(genre_ids)) return SHOW_MOVIE;
      return HIDE_MOVIE;
    }
    return SHOW_MOVIE;
  };

  const searchByTitle = (original_title, title) => {
    return (title.toLowerCase().includes(searchTitleMovie.toLowerCase()) || original_title.toLowerCase().includes(searchTitleMovie.toLowerCase())) ? SHOW_MOVIE : HIDE_MOVIE;
  };

  const getFilter = ({ genre_ids, original_title, title }) => {
    if (searchTitleMovie) return searchByTitle(original_title, title);
    if (genres) return showMovie(genre_ids);
    return SHOW_MOVIE;
  };

  const showStars = () => (
    <>
      <img className="yellow-star" src={YellowStar} alt='yellow star' />
      <img className="yellow-star" src={YellowStar} alt='yellow star' />
      <img className="yellow-star" src={YellowStar} alt='yellow star' />
      <img className="yellow-star" src={YellowStar} alt='yellow star' />
      <img className="yellow-star" src={GrayStar} alt='yellow star' />
    </>
  );

  return movies ? (
    <Row>
      <Col xs={24}>
        <h1>Movies</h1>
        <Row className="movies-main-container">
          <Col xs={24}>
            <Row>
              <Col xs={4}>
                <div className="search-container">
                  <Input placeholder="Search movie..." value={searchTitleMovie} onChange={onSearch} />
                </div>
              </Col>
              <Col className="filter-col" xs={3}>
                <Select mode="multiple" placeholder="Select genres" onChange={changeGenres} showArrow style={{ width: 150, textAlign: 'left', marginTop: 3 }}>
                  {movies && movies.genres.map((genre) => (
                    <Option value={genre.id}>{genre.name}</Option>
                  ))}
                </Select>
              </Col>
              <Col xs={2}>
                <Select placeholder="Order" onChange={changeOrder} style={{ width: 150, textAlign: 'left', marginTop: 3 }}>
                  <Option value="disabled" disabled>Date</Option>
                  <Option value="newsOlders">News - olders</Option>
                  <Option value="oldersNews">Olders - news</Option>
                  <Option value="disabled" disabled>Calification</Option>
                  <Option value="zeroPoints">0 - 10 points</Option>
                  <Option value="tenPoints">10 - 0 points</Option>
                </Select>
              </Col>
            </Row>
          </Col>
          <Col xs={24}>
            <Row className="movies-list-container">
              {movies.results.map((movie) => {
                return (
                  <Col className={getFilter(movie)} xs={8}>
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
                            <p><b>Calificación:</b> {movie.vote_average} {showStars(movie.vote_average)}</p>
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
