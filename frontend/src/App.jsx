import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
  return (
    <>
      <MovieCard
        movie={{
          title: "Inception",
          release_date: "2010",
        }}
      />
    </>
  );
}

export default App;
