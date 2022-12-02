import { Button } from '@mui/material';
import MovieCard from 'components/MovieCard';
import { Movie } from 'models/movie.model';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { Head } from 'next/document';
import { fetchMovie } from 'services/api/tmdb';

type Props = {
	movie: Movie;
};

export default function MoviePage({ movie }: Props) {

	function addMovieToPlaylist(): void {
		const playlistStr = window.localStorage.getItem('playlist');

		const playlist = (playlistStr ? JSON.parse(playlistStr) : []) as Movie[];
		const existingMovie = playlist.find((m) => m.id === movie.id);
		if (existingMovie) return;

		const updatedPlaylist = [...playlist, movie];

		window.localStorage.setItem('playlist', JSON.stringify(updatedPlaylist));
	}

	return (
		<>
			
			<Button onClick={addMovieToPlaylist}>Add to playlist</Button>
			<MovieCard movie={movie} />
		</>
	);
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
		fallback: 'blocking',
	};
};
