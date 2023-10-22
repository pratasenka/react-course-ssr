'use client'

import { apiRequest } from "@/api-requests";
import { MovieData } from "@/types";
import styles from '../styles/movie-details.module.css';
import { useRouter } from "next/navigation";
import Link from "next/link";

export async function MovieDetails(props: any): Promise<React.ReactElement> {
    const router = useRouter();
    const movie: MovieData | null = await apiRequest.findMovieById(props.movieId);

    const capitalize = (word: string): string => {
        return word
            .toLowerCase()
            .replace(/\w/, firstLetter => firstLetter.toUpperCase());
    }

    return <>
        {
            movie ?
                <div className={`${styles['wrapper']} ${styles['movie-details']}`}>
                    <div className={styles['movie-details-company-name']}>
                        <span><span className={styles['movie-details-company-name-bold']}>netflix</span>roulette</span>
                        <Link
                            href={{ pathname: `/`, query: props.searchParams }} style={{ textDecoration: 'none' }}
                        >
                            <button
                                className={styles['movie-details-search-movie-button']}
                            // onClick={() => router.push('/')}
                            >
                                X
                            </button>
                        </Link>
                    </div >
                    <div className="row">
                        <div className="col span4">
                            <img className={styles['movie-details-image']} src={movie.imageUrl} />
                        </div>
                        <div className="col space"></div>
                        <div className="col span5">
                            <div className="row">
                                <div className={`col span0 ${styles['movie-details-name']}`}>
                                    <span id='movie-details-name'>{movie.name.toUpperCase()}</span>
                                </div>
                                <div className="col space"></div>
                                <div className={`col ${styles['movie-details-number-circle']}`}>
                                    {movie.rating}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col span0 ${styles['movie-details-genre']}">
                                    <span>{movie.relevantGenres.map((genre: string) => capitalize(genre)).join(', ')}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className={`col span0 ${styles['movie-details-release']}`}>
                                    <span>{movie.releaseYear}</span>
                                </div>
                                <div className="col space"></div>
                                <div className={`col span0 ${styles['movie-details-release']}`}>
                                    <span>{movie.duration}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className={`col span10 ${styles['movie-details-description']}`}>
                                    <span>{movie.description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                : <h1>Incorrect movie ID: {props.movieId}</h1>
        }
    </>
}
