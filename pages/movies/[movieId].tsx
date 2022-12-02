import MovieCard from 'components/MovieCard';
import { Movie } from 'models/movie.model';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { fetchMovie } from 'services/api/tmdb';

type Props = {
	movie: Movie;
};

export default function MoviePage({ movie }: Props) {
	return <MovieCard movie={movie} />;
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	const movieId = context.params?.movieId;

// 	if (!movieId || Array.isArray(movieId)) {
// 		return {
// 			notFound: true,
// 		};
// 	}

// 	const movie = await fetchMovie(movieId);

// 	return { props: { movie } };
// };

export const getStaticProps: GetStaticProps = async (context) => {
	const movieId = context.params?.movieId;
  
	if (!movieId || !Number(movieId) || Array.isArray(movieId)) {
	  return { notFound: true };
	}
  
	const movie = await fetchMovie(movieId);
  
	return {
	  props: {
		movie,
	  },
	  revalidate: 24 * 60 * 60,
	};
  };
  
  export const getStaticPaths: GetStaticPaths = async () => {
	return {
	  paths: [],
	  fallback: "blocking",
	};
  };


