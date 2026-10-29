import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    //restore the user’s favorites after a page refresh
    useEffect( () => {
        const storedFav = localStorage.getItem("favos") // key is favorites
        if (storedFav) setFavorites(JSON.parse(storedFav)) // convert stored to json 

    }, [])
    //
    useEffect(() => {
        localStorage.setItem('favos',JSON.stringify(favorites))
    }, [favorites])
    const addToFavorites =(movie) => {
        setFavorites(prev => [...prev, movie])

    }

    const removeFavorites =  (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }
    const vale = {
        favorites,
        addToFavorites,
        removeFavorites,
        isFavorite
    }
    return <MovieContext.Provider value={vale}>
        {children}
    </MovieContext.Provider>
}