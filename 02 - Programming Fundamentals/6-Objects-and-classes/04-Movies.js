function movies(input) {
    const moviesColection = [];
    for (let line of input) {
        let element = line.split(" ");

        if (element[0] == "addMovie") { 
            let movieName = element.slice(1).join(" ");
            moviesColection.push({ name: movieName });
        } else if (element.includes("directedBy")) {
            pushIntoObj("directedBy", "director", element)
        } else if (element.includes("onDate")){
            pushIntoObj("onDate", "date", element)
        }
    }

    const filterMovies = moviesColection.filter(el => Object.keys(el).length===3);
    for (const movie of filterMovies) {
        console.log(JSON.stringify(movie))
    }

    function pushIntoObj(inputCommand, objProperty, arr) {
        let commandIndex = arr.indexOf(inputCommand);
        let movieName = arr.slice(0, commandIndex).join(" ");

        let currentMovieObj = moviesColection.find(obj => obj.name === movieName);
        if (currentMovieObj) {
            let director = arr.slice(commandIndex + 1).join(" ");
            currentMovieObj[objProperty] = director;
        }
    }

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])