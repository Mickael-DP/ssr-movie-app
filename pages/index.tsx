import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import SearchBar from 'components/SearchBar/SearchBar';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<Box textAlign='center'>
			<Head>
				<title>My Movie app</title>
			</Head>
			<Typography
				variant='h5'
				component='h1'>
				My Movie app
			</Typography>
			<SearchBar />
		</Box>
	);
}
