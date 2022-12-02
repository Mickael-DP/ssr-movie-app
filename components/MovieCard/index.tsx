import { Button, Card, CardContent, Rating, Typography } from '@mui/material';
import React from 'react';
import classes from './MovieCard.module.css';
import { Movie } from '../../models/movie.model';
import Image from 'next/image';
import { getImage } from 'services/api/tmdb';
import router from 'next/router';

type Props = { movie: Movie };

const MovieCard = ({ movie }: Props) => {
	const imgSrc = getImage(movie.poster_path);
	const returnhome = () => {
		router.push('/');
	};

	return (
		<>
			<Button
				variant='contained'
				color='primary'
				onClick={returnhome}>
				Back Home
			</Button>
			<Card className={classes.root}>
				<Image
					priority
					src={imgSrc}
					alt={movie.title}
					layout='responsive'
					width={500}
					height={750}
				/>
				<CardContent>
					<Rating
						defaultValue={movie.vote_average}
						precision={0.25}
						max={10}
						size='large'
						readOnly
					/>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						mt={3}>
						{movie.title}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'>
						{movie.overview}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						mt={3}>
						Date de sortie : {movie.release_date}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'>
						Titre original : {movie.original_title} - VO :{' '}
						{movie.original_language}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'>
						Popularité : {movie.popularity}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'>
						Évaluation : {movie.vote_average}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'>
						Votes : {movie.vote_count}
					</Typography>
				</CardContent>
			</Card>
		</>
	);
};

export default MovieCard;
