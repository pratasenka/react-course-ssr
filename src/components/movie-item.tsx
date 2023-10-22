'use client'

// import { useRouter } from 'next/navigation';
import styles from '../styles/movie-item.module.css';
import Link from 'next/link';

export default function MovieItem(props: any) {
    // const router = useRouter();

    return <>
        <Link href={`/${props.movie.id}`} style={{ textDecoration: 'none' }}>
            <div
                className={styles["movie-item"]}
            // onClick={() => router.push(`/${props.movie.id}`)}
            >
                <div className={styles["movie-item-image-container"]}>
                    {/* <div className={`${styles["dropdown"]} ${styles["dropdown-position"]}`}>
                        <button className={styles["dropbtn"]}>x</button>
                        <div className={styles["dropdown-content"]}>
                            <a onClick={(e) => {
                            e.stopPropagation();
                            props.edit(props.movie.id);
                        }}
                        >Edit</a>

                        <a onClick={(e) => {
                            e.stopPropagation()
                            props.delete(props.movie.id)
                        }}
                        >Delete</a>
                        </div>
                    </div> */}
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
                            {/* {props.movie.relevantGenres.map((genre: string) => capitalize(genre)).join(', ')} */}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    </>
}