import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {

  const movieNumber = 1;
  return (
    <>
      {movieNumber == 1 && (
        <MovieCard
          movie={{
            title: "The Dark Knight",
            release_date: "2008",
          }}
        />
      )}
    </>
  );
}

export default App;






