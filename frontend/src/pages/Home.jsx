import MovieCard from "../components/MovieCard";
export default function Home() {
  const movies = [
    { id: 1, title: "Inception", release_date: "2010" },
    { id: 2, title: "Interstellar", release_date: "2014" },
    { id: 3, title: "Dunkirk", release_date: "2017" },
  ];

  return (
    <div className="home">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
        />
      ))}
    </div>
  );
}
