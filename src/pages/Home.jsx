import Moviecard from "../components/Moviecard"
import { useState, useEffect } from "react"
import '../../css/Home.css'
import { searchMovies, getPopularMovies } from '../services/api.js'
function Home(){
    const [movieSearch, setMovieSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoadimg] = useState(true)

    useEffect(()=>{
        const loadPopularMovies = async() =>{
            try{
                const populrMovies= await getPopularMovies();
                setMovies(populrMovies)

            }
            catch(err) {
                console.log(err)
                setError("failed to load movies...")


            }
            finally {
                setLoadimg(false)
            }
        }
        loadPopularMovies()
    },[])
    
    const handleSearch = async (er) => {
        er.preventDefault();
        if (!movieSearch.trim()) return 
        if (loading) return
        setLoadimg(true)
        try {
            const searchResults = await searchMovies(movieSearch)
            setMovies(searchResults)
            setError(null)

        } 
        catch (err){
            console.log(err);
            setError("failed to search movies ...")

        }
        finally {
            setLoadimg(false)

        }




    }
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movie..." 
            className="search-input"
            value={movieSearch}
            onChange= {(f) => setMovieSearch(f.target.value)}>
            
            </input>
            <button onClick={handleSearch} type="submit" className="search-button">Search</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {loading ? (<div className="loading">loading ...</div>):(<div className="movies-grid">
            {movies.map((movie =>movie.title.toLocaleLowerCase().startsWith(movieSearch) && <Moviecard movie= {movie} key={movie.id}/>))}
        </div>)}
        

    </div>
}
export default Home