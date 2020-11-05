const numbersOfFilms = +prompt('how many movies have you watched?', '');
const personaMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

const a = prompt('what was one of the last movies you watched?', ''),
      b = prompt('how much do you rate it?', ''),
      c = prompt('what was one of the last movies you watched?', ''),
      d = prompt('how much do you rate it?', '');


personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);