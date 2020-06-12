import React,{useState} from 'react'
import MovieCard from './MovieCard'

function SearchMovies() {

    const[query, setQuery] = useState('');
    const[movies, setMovies] = useState([]);

    const SearchMovies = async (e) => {
        e.preventDefault();
        
    

    // const query = 'Fast&Furious'
    

    const url= `https://api.themoviedb.org/3/search/movie?api_key=983bdf1e4065499afcec6350d07163d9&language=en-US&query=${query}&page=1&include_adult=false`;
    console.log(url)
    try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
        

    }catch(err) {
        console.error(err);
    }
    

    }
    return (
        <>
           <form className='form' onSubmit={SearchMovies}>
            <label htmlFor='query' className='Label'>Movie name</label>
                <input className='input' 
                type='text' name='query' 
                placeholder='Fast&Furious' 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}/>
                <button className='button' type='submit'>Search</button>
           </form>
           <div className='card-list'>
               {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id}/>
               ))}
            </div>
            <footer className='footer'>&copy;2020 by John Katua</footer>
        </>
        
    )
}

export default SearchMovies
