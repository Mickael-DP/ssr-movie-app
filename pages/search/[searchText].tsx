import SearchResult from "components/SearchResult/SearchResult";
import { GetServerSideProps } from "next";
import { fetchMovies } from "services/api/tmdb";
import { SearchMoviesResult } from "models/movie.model";

type Props = {
    searchResults: SearchMoviesResult;
}

export default function Search( { searchResults } : Props) {
    return <SearchResult searchResults={searchResults} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const searchText = context.params?.searchText;

    if (!searchText || Array.isArray(searchText)) {
        return {
            notFound: true,
        };
    }

    const searchResult = await fetchMovies(searchText);

    return {props: { searchResults : searchResult }};
};