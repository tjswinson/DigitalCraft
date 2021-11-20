onst getMovies = () => {
    fetch(‘https://imdb-api.com/en/API/Keyword/k_i4gqi304/fight’).then(response => response.json()).then(data => console.log(data));
    }
    getMovies()