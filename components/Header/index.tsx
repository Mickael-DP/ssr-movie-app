import { Box, Link, Typography } from "@mui/material";
import SearchBar from "components/SearchBar/SearchBar";

const Header = () => {
	return (
		<Box
			display='flex'
			justifyContent='space-around'>
			<Box
				display='flex'
				alignItems='center'>
				<Typography
					variant='h5'
					component='h1'>
					My Movie app
				</Typography>
				<Link href='/'>Recherche</Link>
				<Link href={'/playlists/creation'}>Playlist</Link>
			</Box>
			<SearchBar />
		</Box>
	);
};

export default Header;
