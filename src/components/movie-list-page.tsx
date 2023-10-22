/* eslint-disable @next/next/no-async-client-component */
import { useParams } from "next/navigation";

import { apiRequest } from "@/api-requests";
import { FindMoviesParams, MovieData } from "@/types";
import HeaderSearch from "./header-search";
import MoviesList from "./movies-list";
import { MovieDetails } from "./movie-details";


export default async function MovieListPage(
    props: any
) {
    const genres = ['documentary', 'comedy', 'horror', 'crime'];
    const movies: MovieData[] | null = await apiRequest.findMoviesByQuery({
        sortBy: props.searchParams['sortBy'] || '',
        sortOrder: 'asc',
        search: props.searchParams['query'] || '',
        searchBy: 'title',
        filter: props.searchParams['genre'] || '',
    });

    // console.log(props.movieId)
    console.log(props.searchParams)


    return <>
        <div className="App">
            <div className="App-header">
                {
                    props.movieId ?
                        <MovieDetails
                            searchParams={props.searchParams}
                            movieId={props.movieId}
                        /> :
                        <HeaderSearch
                            searchText={props.searchParams['query'] || ''}
                        // searchCallback={(searchText: string) => updateSearchParameters('query')(searchText)}
                        />
                }
            </div>

            <div className="App-content">
                <MoviesList
                    searchParams={props.searchParams}
                    movies={movies}
                    genres={genres}
                    activeGenres={props.searchParams['genre']?.split(',') || []}
                    sortBy={props.searchParams['sortBy'] || ''}
                // edit={(movieId: string) => navigate(`${movieId}/edit`)}
                // setActiveGenres={(activeGenres: string[]) => updateSearchParameters('genre')(activeGenres.length === genres.length ? [] : activeGenres)}
                // setMovieDetails={updateMovieDetails}
                // sortBy={searchParams.get('sortBy') || ''}
                // setSortBy={(sortBy: string) => updateSearchParameters('sortBy')(sortBy)}
                />
            </div >
        </div>
    </>
}