"use strict";


const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    
    start: function() {
       let numbersOfFilms = +prompt('how many movies have you watched?', '');
    while (numbersOfFilms == '' || numbersOfFilms == null ||
    isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt('how many movies have you watched?', '');
            }
        this.count = numbersOfFilms;
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
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
    },
    toggleVisibleMyDB: function(){
            personaMovieDB.privat = !personaMovieDB.privat;
    },
    showMyDB: function(){
        if (personaMovieDB.privat == false){
            console.log(personaMovieDB);
        }
    },
    writeYourGenres: function(){
        for (let a = 0; a < 3; a++) {
            let b = prompt(`what's your favorite genre number ${a+1} ?`, '');
            if (b == '' || b == null){
                b = prompt(`what's your favorite genre number ${a+1} ?`, '');
                a--;
            } else { personaMovieDB.genres[a] = b; }
        }  
        personaMovieDB.genres.forEach(function(item, i){
            console.log(`${i}: ${item}`);
        });
        
    }

};

/*personaMovieDB.start();
personaMovieDB.rememberMyFilms();
personaMovieDB.detectPersonalLevel();
personaMovieDB.toggleVisibleMyDB();
personaMovieDB.showMyDB();
personaMovieDB.writeYourGenres();*/