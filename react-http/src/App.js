import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Spinner from "./UI/Spinner/Spinner";

const App = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setLoading] = useState(false);

  const [error, setError] = useState();

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) throw new Error("failed to fetch");
      const json = await response.json();
      setLoading(false);
      setError(null);
      setMovies(json.results);
    } catch (error) {
      setError("Oops something went wrong.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  let content;
  if (movies?.length) content = <Movies movies={movies} />;
  if (isLoading)
    content = (
      <div className="loading">
        <Spinner />
      </div>
    );
  if (error) content = <div className="alert-error">{error}</div>;

  return (
    <main>
      <section className="fetch">
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section className="movies">{content}</section>
    </main>
  );
};
export default App;
