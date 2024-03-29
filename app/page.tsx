import Movie from "./components/Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);

  return (
    <main>
      <div>Wellcome to Nextjs App</div>
      {res.results.map((movie: any) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          posterPath={movie.poster_path}
          releaseDate={movie.release_date}
        />
      ))}
    </main>
  );
}
