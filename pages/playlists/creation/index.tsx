import Playlist from 'components/Playlist';
import { Movie } from 'models/movie.model';
import React from 'react';
import { useState } from 'react';

const PlaylistCreationPage = () => {
	const [playlist, setPlaylist] = useState<Movie[]>([]);

	React.useEffect(() => {
		const playlistStr = window.localStorage.getItem('playlist');
		const playlistValue = playlistStr
			? (JSON.parse(playlistStr) as Movie[])
			: [];
		setPlaylist(playlistValue);
	}, []);

	if (!playlist) return <div>Playlist is empty!</div>;

	return <Playlist movies={playlist} />;
};

export default PlaylistCreationPage;
