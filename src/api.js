import { parseMovieCard, parseMovies } from "./adapters/movies.js"
import { parseGenres } from "./adapters/genres.js"

import { Register } from "./util.js"

const API_KEY = `0a25fd4d6065b2bbe06846e90fdd51f9`

const RootPath = {
    MOVIE: `https://api.themoviedb.org/3/movie`,
    SEARCH: `https://api.themoviedb.org/3/search/movie`,
    GENRE: `https://api.themoviedb.org/3/genre/movie/list`,
    IMAGE: `https://image.tmdb.org/t/p/original`,
}

const MovieCategory = {
    POPULAR: `popular`,
    TOP_RATED: `top_rated`,
    LATEST: `latest`,
    UPCOMING: `upcoming`,
}

const QueryOptionsSymbol = {
    INIT: `?`,
    ASSIGN: `=`,
    SEPARATOR: `&`,
}

const getQueryOptionsString = (options) => {
    const { INIT, ASSIGN, SEPARATOR } = QueryOptionsSymbol

    return INIT + Object.entries(options)
        .map(([key, value]) => Register.camelToKebab(key) + ASSIGN + value)
        .join(SEPARATOR)
}

const load = {
    movieById: ({ options, id }) => {
        return fetch(`${RootPath.MOVIE}/${id}${getQueryOptionsString({ apiKey: API_KEY, ...options })}`)
            .then(response => response.json())
            .then(data => parseMovieCard(data))
    },
    
    moviesByCategory: ({ options, category = MovieCategory.POPULAR }) => {
        return fetch(`${RootPath.MOVIE}/${category}${getQueryOptionsString({ apiKey: API_KEY, ...options })}`)
            .then(response => response.json())
            .then(data => parseMovies(data.results))
    },

    moviesByTitle: ({ options }) => {
        return fetch(`${RootPath.SEARCH}/${getQueryOptionsString({ apiKey: API_KEY, ...options })}`)
            .then(response => response.json())
            .then(data => parseMovies(data.results))
    },

    genresList: ({ options }) => {
        return fetch(`${RootPath.GENRE}/${getQueryOptionsString({ apiKey: API_KEY, ...options })}`)
            .then(response => response.json())
            .then(data => parseGenres(data.genres))
    },
}

export {
    RootPath,
    MovieCategory,
    load,
}

export default load
