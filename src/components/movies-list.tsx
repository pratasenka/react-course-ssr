import { MovieData } from "@/types";
import SelectGenre from "./select-genre";
import styles from '../styles/movies-list.module.css';
import MovieItem from "./movie-item";
import Link from "next/link";

export default function MoviesList(props: any) {
    return <>
        <SelectGenre
            genres={props.genres}
            active={props.activeGenres}
        />
        <div className={styles["movies-count"]}>
            <span data-testid="moviesCountLabel"><b>{props.movies?.length}</b> movies found</span>
        </div>
        <div className={styles["container"]}>
            {
                props.movies?.map((movie: MovieData) => {
                    return <>
                        <Link
                            key={movie.id}
                            href={{ pathname: `/${movie.id}`, query: props.searchParams }} style={{ textDecoration: 'none' }}
                        >
                            <MovieItem
                                key={movie.id}
                                id={movie.id}
                                movie={movie}
                            // edit={props.edit}
                            // delete={props.delete}
                            // setMovieDetails={props.setMovieDetails}
                            />
                        </Link>
                    </>
                })
            }
        </div>
    </>
}