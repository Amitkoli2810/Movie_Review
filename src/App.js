
import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import movies from './data.json'

function App() {
  

  return (
    <>
    
      <Header/>
      <div className="main">
       
        {
          movies.map((element)=>{
            return(
            <Movie title={element.Title} 
            year={element.Year} 
            poster={element.Poster} 
            imdb={element.imdbID}  />
            )
          })
        }
      </div>
    </>
  );
}

export default App;
