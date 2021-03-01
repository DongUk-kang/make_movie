import React, { useEffect,useState } from 'react';
import { movieAPI } from "../../api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = () => {
    const [movies, setMovies] = useState({
        nowPlaying: [],
        toprated: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        topratedError: null,
        popularError: null,
        upcomingError: null
    })

    const getdata = async () => {
        const [nowPlaying, nowPlayingError] = await movieAPI.nowPlaying()
        const [toprated, topratedError] = await movieAPI.toprated()
        const [popular, popularError] = await movieAPI.popular()
        const [upcoming, upcomingError] = await movieAPI.upcoming()
        setMovies({
            nowPlaying,
            toprated,
            popular,
            upcoming,
            nowPlayingError,
            topratedError,
            popularError,
            upcomingError
        })
    }

    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <MoviePresenter
                upcoming={movies.upcoming}
                nowPlaying={movies.nowPlaying}
                toprated={movies.toprated}
                popular={movies.popular}
            />
        </div>
    );
};

export default MovieContainer;
