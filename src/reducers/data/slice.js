import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { load } from "../../api.js"

const SLICE_NAME = `data`

const OperationType = {
    LOAD_MOVIE_BY_ID: `loadMovieById`,
    LOAD_MOVIES_BY_CATEGORY: `loadMoviesByCategory`,
    LOAD_MOVIES_BY_TITLE: `loadMoviesByTitle`,
    LOAD_GENRES_LIST: `loadGenresList`,
}

const Operation = {
    [OperationType.LOAD_MOVIE_BY_ID]: createAsyncThunk(
        `${SLICE_NAME}/${OperationType.LOAD_MOVIE_BY_ID}`,
        load.movieById
    ),

    [OperationType.LOAD_MOVIES_BY_CATEGORY]: createAsyncThunk(
        `${SLICE_NAME}/${OperationType.LOAD_MOVIES_BY_CATEGORY}`,
        load.moviesByCategory
    ),
    
    [OperationType.LOAD_MOVIES_BY_TITLE]: createAsyncThunk(
        `${SLICE_NAME}/${OperationType.LOAD_MOVIES_BY_TITLE}`,
        load.moviesByTitle
    ),

    [OperationType.LOAD_GENRES_LIST]: createAsyncThunk(
        `${SLICE_NAME}/${OperationType.LOAD_GENRES_LIST}`,
        load.genresList
    ),
}

const initialState = {
    movieById: null,
    moviesByCategory: null,
    moviesByTitle: null,
    genresList: null,
}

const Selector = {
    movieById: (state) => state[SLICE_NAME].movieById,
    moviesByCategory: (state) => state[SLICE_NAME].moviesByCategory,
    moviesByTitle: (state) => state[SLICE_NAME].moviesByTitle,
    genresList: (state) => state[SLICE_NAME].genresList,
}

const dataSlice = createSlice({
    name: SLICE_NAME,
    initialState,

    extraReducers: (builder) => builder
        .addCase(
            Operation.loadMovieById.fulfilled,
            (state, action) => { state.movieById = action.payload }
        )

        .addCase(
            Operation.loadMoviesByCategory.fulfilled,
            (state, action) => { state.moviesByCategory = action.payload }
        )
        
        .addCase(
            Operation.loadMoviesByTitle.fulfilled,
            (state, action) => { state.moviesByTitle = action.payload }
        )

        .addCase(
            Operation.loadGenresList.fulfilled,
            (state, action) => { state.genresList = action.payload }
        )
})

export {
    OperationType,
    Operation,
    Selector,
}

export default dataSlice.reducer
