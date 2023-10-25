'use client'

import styles from '../styles/movie-item.module.css';

export default function MovieItem(props: any) {
    return <>
        <div
            className={styles["movie-item"]}
        >
            <div className={styles["movie-item-image-container"]}>
                <img
                    className={styles["movie-item-image"]}
                    src={props.movie.imageUrl}
                />
            </div>

            <div className={styles["movie-item-detail"]}>
                <div className={styles["movie-item-detail-row"]}>
                    <span className={styles["movie-item-name"]}>{props.movie.name}</span>
                    <div className={styles["movie-item-release-date-right"]}>
                        <span className={styles["movie-item-release-date"]}>{props.movie.releaseYear.split('-')[0]}</span>
                    </div>

                </div>
                <div className={styles["movie-item-detail-row"]}>
                    <span className={styles["movie-item-genre"]}>
                        {props.movie.relevantGenres.join(', ')}
                    </span>
                </div>
            </div>
        </div>
    </>
}