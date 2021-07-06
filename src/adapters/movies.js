import { getImgPath } from "../api.js"

const DATE_STRING_LANGUAGE = `en-US`

const parseReleaseDate = (releaseDate) => new Date(Date.parse(releaseDate))
    .toLocaleString(DATE_STRING_LANGUAGE, {
        year: `numeric`,
        month: `long`,
        day: `numeric`,
    })

const parseMovie = (movie) => ({
    id: String(movie[`id`]),
    title: movie[`title`],
    adult: movie[`adult`],
    release: parseReleaseDate(movie[`release_date`]),
    genreIds: movie[`genre_ids`],
    originalLanguage: movie[`original_language`],
    overview: movie[`overview`],

    rating: {
        value: movie[`vote_average`],
        votes: movie[`vote_count`],
    },

    image: {
        poster: getImgPath(movie[`poster_path`]),
        background: getImgPath(movie[`backdrop_path`]),
    },
})

const parseMovies = (movies) => movies.map(parseMovie)

const getGenresByIds = (genresList, ids) => ids.map(id => genresList[id])

export {
    parseMovie,
    parseMovies,
    getGenresByIds,
}

/*

const raw = {
    adult: false,
    backdrop_path: "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
    genre_ids: [ 16, 35, 10751 ],
    id: 508943,
    original_language: "en",
    original_title: "Luca",
    overview: "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun  is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
    popularity: 6291.904,
    poster_path: "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    release_date: "2021-06-17",
    title: "Luca",
    video: false,
    vote_average: 8.2,
    vote_count: 2036,
}

const result = {
    id: "508943",
    title: "Luca",
    adult: false,
    release: "June 17, 2021",
    genreIds: [ 16, 35, 10751 ],
    originalLanguage: "en",
    overview: "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun  is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",

    rating: {
        value: 8.2,
        votes: 2036
    },

    image: {
        poster: "https://image.tmdb.org/t/p/original/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
        background: "https://image.tmdb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
    },
}

*/
