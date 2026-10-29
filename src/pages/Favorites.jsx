import '../../css/Favorites.css'
import Moviecard from '../components/Moviecard'
import { useMovieContext } from '../contexts/MovieContext'
function Favorites(){
    const { favorites } = useMovieContext();
    if (favorites) {
        return (
            <div className='favorites'>
                <h2>Beğendilerin ...</h2>
            <div className="movies-grid">
            {favorites.map((movie => (<Moviecard movie= {movie} key={movie.id}/>)))}
        </div>
        </div>
        )
    }
    return(
    <div className="favorites-empty">
        <h2>No  favorites movies yet</h2>
        <p> start adding movies to ure favorites and they will appear asap </p>
    </div>
    )

}
export default Favorites