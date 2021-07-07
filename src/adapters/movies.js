import { RootPath } from "../api.js"

import { Time } from "../util.js"

const DATE_STRING_LANGUAGE = `en-US`

const getImagePath = (url) => url ? RootPath.IMAGE + url : null

const parseReleaseDate = (releaseDate) => new Date(Date.parse(releaseDate))
    .toLocaleString(DATE_STRING_LANGUAGE, {
        year: `numeric`,
        month: `long`,
        day: `numeric`,
    })

const parseRuntime = (minutesAmount) => {
    if (minutesAmount === 0) return `Not known`
    if (!minutesAmount) return null

    const hours = Math.floor(minutesAmount / Time.HOUR_IN_MINUTES)
    const restOfMinutes = minutesAmount % Time.HOUR_IN_MINUTES

    if (!restOfMinutes) return hours + `h`
    if (!hours) return restOfMinutes + `m`

    return `${hours}h ${restOfMinutes}m`
}

const parseMovieCard = (movie) => ({
    id: String(movie[`id`]),
    title: movie[`title`],
    adult: movie[`adult`],
    release: parseReleaseDate(movie[`release_date`]),
    originalLanguage: movie[`original_language`],
    overview: movie[`overview`],

    rating: {
        value: movie[`vote_average`],
        votes: movie[`vote_count`],
    },

    image: {
        poster: getImagePath(
            movie[`poster_path`] ||
            (movie[`belongs_to_collection`] ? movie[`belongs_to_collection`][`poster_path`] : null)
        ),

        background: getImagePath(
            movie[`backdrop_path`] ||
            (movie[`belongs_to_collection`] ? movie[`belongs_to_collection`][`backdrop_path`] : null)
        ),
    },
    
    genreIds: movie[`genre_ids`] || movie[`genres`].map(genre => genre.id),
    genres: movie[`genres`] ? movie[`genres`].map(genre => genre.name) : null,
    status: movie[`status`] || null,
    runtime: parseRuntime(movie[`runtime`]),
})

const parseMovies = (movies) => movies.map(parseMovieCard)

export {
    parseMovieCard,
    parseMovies,
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
