"use strict";

let numbersOfFilms;

const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numbersOfFilms = +prompt('how many movies have you watched?', '');
    while (numbersOfFilms == '' || numbersOfFilms == null ||
    isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt('how many movies have you watched?', '');
            }
    personaMovieDB.count = numbersOfFilms;
}



function rememberMyFilms(){
    
    for (let i = 0; i < 2; i++){
    let a = prompt('what was one of the last movies you watched?', '');
    let b = prompt('how much do you rate it?', '');
    
    if (a !== null && b != null && a != '' && b != '' && a.length < 19) {
        personaMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
        }
    }
}   
    
function detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
        console.log('quite a few movies have been viewed');
    }
    else if (personaMovieDB.count > 10 && personaMovieDB.count < 30) {
        console.log('you are a classic viewer');
    } 
    else if (personaMovieDB.count > 30) {
        console.log('are you a movie fan');
    }
    else {console.log('error');}
        
    console.log(personaMovieDB);
}

function showMyDB(){
    if (personaMovieDB.privat == false){
            console.log(personaMovieDB);
    }
}

function writeYourGenres(){

    for (let a = 0; a < 3; a++) {
         personaMovieDB.genres[a] = prompt(`what's your favorite genre number ${a+1} ?`, '');
        }   console.log(personaMovieDB);
}


start();
rememberMyFilms();
detectPersonalLevel();
showMyDB();
writeYourGenres();
