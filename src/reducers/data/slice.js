import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchMovies, fetchGenresList } from "../../api.js"

const SLICE_NAME = `data`

const OperationType = {
    FETCH_MOVIES: `fetchMovies`,
    FETCH_GENRES_LIST: `fetchGenresList`,
}

const Operation = {
    [OperationType.FETCH_MOVIES]: createAsyncThunk(
        `${SLICE_NAME}/${OperationType.FETCH_MOVIES}`,
        fetchMovies
    ),

    [OperationType.FETCH_GENRES_LIST]: createAsyncThunk(
        `${SLICE_NAME}/${OperationType.FETCH_GENRES_LIST}`,
        fetchGenresList
    ),
}

const initialState = {
    movies: null,
    genresList: null,
}

const Selector = {
    movies: (state) => state[SLICE_NAME].movies,
    genresList: (state) => state[SLICE_NAME].genresList,
}

const dataSlice = createSlice({
    name: SLICE_NAME,
    initialState,

    extraReducers: (builder) => builder
        .addCase(Operation.fetchMovies.fulfilled, (state, action) => { state.movies = action.payload })
        .addCase(Operation.fetchGenresList.fulfilled, (state, action) => { state.genresList = action.payload })
})

export {
    Operation,
    Selector,
}

export default dataSlice.reducer
