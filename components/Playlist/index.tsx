import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Movie } from "models/movie.model";
import classes from "./Playlist.module.css"

type Props = {
    movies: Movie [];
};

const Playlist = ({ movies }: Props) => {
    return (
        <TableContainer
				className={classes.root}
				component={Paper}>
				<Table
					sx={{ minWidth: 650 }}
					aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell
								align='center'
								className={classes.tableCell}>
								ID
							</TableCell>
							<TableCell
								align='center'
								className={classes.tableCell}>
								Titre
							</TableCell>
							<TableCell
								align='center'
								className={classes.tableCell}>
								Évaluation
							</TableCell>
							<TableCell
								align='center'
								className={classes.tableCell}>
								Nb de votes
							</TableCell>
							<TableCell
								align='center'
								className={classes.tableCell}>
								Popularité
							</TableCell>
							<TableCell
								align='center'
								className={classes.tableCell}>
								Date de sortie
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{movies?.map((movie) => (
							<TableRow
								key={movie.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								className={classes.root}
								>
								<TableCell align='center'>{movie.id}</TableCell>
								<TableCell align='center'>{movie.title}</TableCell>
								<TableCell align='center'>{movie.vote_average}</TableCell>
								<TableCell align='center'>{movie.vote_count}</TableCell>
								<TableCell align='center'>{movie.popularity}</TableCell>
								<TableCell align='center'>{movie.release_date}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

    )

};

export default Playlist;