const parseGenres = (genres) => genres.reduce((genreById, genre) => {
    genreById[genre.id] = genre.name
    return genreById
}, {})

const getGenresByIds = (genresList, ids) => ids.map(id => genresList[id])

export {
    parseGenres,
    getGenresByIds,
}
