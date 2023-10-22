import styles from '../styles/select-genre.module.css'

export default function SelectGenre(props: any) {
    return <>
        <div className={styles.selectGenre}>
            {
                [
                    <a
                        key={'All'}
                        id={'All'}
                        // className={styles.active}
                        className={(props.genres.length === props.active.length || props.active.length === 0) ? styles.active : ''}
                    // onClick={() => updateActive('All')}
                    >
                        ALL
                    </a>,
                    ...props.genres?.map((genre: string) => {
                        console.log(props.active.includes(genre) && props.genres.length !== props.active.length)
                        return <a
                            key={genre}
                            id={genre + '-genre-item'}
                            className={props.active.includes(genre) && props.genres.length !== props.active.length ? styles.active : ''}
                        // onClick={() => updateActive(genre)}
                        >
                            {genre.toUpperCase()}
                        </a>
                    })
                ]
            }
            <span></span>
            {/* <MoviesSorting
                sortBy={props.sortBy}
                setSortBy={props.setSortBy}
            /> */}
        </div>
    </>
}