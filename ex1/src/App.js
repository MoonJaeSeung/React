
import './App.css';
import React, {useState,useEffect} from 'react';
import Movie from './components/Movie';

function App() {

  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies,setMovies] = useState([
    {title: 'kossie coder1',year:2001},
    {title: 'kossie coder2',year:2002},
    {title: 'kossie coder3',year:2003},
    {title: 'kossie coder4',year:2004},
  ])

  //state가 변경이 되어야만 렌더링이 된다.
  useEffect(() =>{
    console.log('render');
  })

    const renderMovies = movies.map(movie =>{
      return(
       <Movie movie={movie} key={movie.title} />
      );
    });
    const addMovie = (event) =>{
      event.preventDefault();
      setMovies([
        ...movies,
        {
          title : movieTitle,
          year: movieYear,
        }
      ])
     
    };
  return (
    <div className="App">
     <h1>Movie list</h1>
     <form onSubmit={addMovie}>
      <input
      type="text"
      value={movieTitle}
      placeholder="영화 제목"
      onChange={e => setMovieTitle(e.target.value)}
      /><br />
      <input
      type="text"
      value={movieYear}
      placeholder="개봉년도"
      onChange={e => setMovieYear(e.target.value)}
      /><br />
      <button>영화 추가</button>
     </form>
     {renderMovies}
    </div>
  );
}

export default App;
