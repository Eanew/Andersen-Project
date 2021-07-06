const API_KEY = `0a25fd4d6065b2bbe06846e90fdd51f9`

const RootPath = {
    MOVIES: `https://api.themoviedb.org/3/movie`,
    GENRES: `https://api.themoviedb.org/3/genre/movie/list`,
    IMAGES: `https://image.tmdb.org/t/p/original`,
}

const MovieCategory = {
    POPULAR: `popular`,
    TOP_RATED: `top_rated`,
    LATEST: `latest`,
    UPCOMING: `upcoming`,
}

const Language = {
    ENG: `en-US`,
}

const fetchMovies = ({ category = MovieCategory.POPULAR, language = Language.ENG, page = 1 }) => {
    const path = `${RootPath.MOVIES}/${category}?api_key=${API_KEY}&language=${language}&page=${page}`
    console.log(`fetching`)

    return fetch(path)
        .then(response => response.json())
        .then(data => data.results)
}

const assignGenresIds = (genres) => genres.reduce((genreById, genre) => {
    genreById[genre.id] = genre.name
    return genreById
}, {})

const fetchGenresList = (language = Language.ENG) => {
    const path = `${RootPath.GENRES}?api_key=${API_KEY}&language=${language}`

    return fetch(path)
        .then(response => response.json())
        .then(data => assignGenresIds(data.genres))
}

const getImgPath = (url) => `${RootPath.IMAGES}${url}`

export {
    MovieCategory,
    Language,
    fetchMovies,
    fetchGenresList,
    getImgPath,
}

// TODO: Реализовать функцию для запроса фильмов по названию
// Шаблон: https://api.themoviedb.org/3/search/movie?api_key=0a25fd4d6065b2bbe06846e90fdd51f9&query=A
