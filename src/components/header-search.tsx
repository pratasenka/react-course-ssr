'use client'

import styles from "../styles/header-search.module.css"
import { useRouter } from "next/navigation";
import SearchForm from "./search-form";

export default function HeaderSearch({ searchText }: { searchText: string }) {
    const router = useRouter()

    return <>
        <div className={styles["header-search-background-image"]}>
            <div className={`${styles['content']} ${styles["header-search-background-blur"]}`}>
                <div className={styles["header-search-company-name"]}>
                    <span><span className={styles["header-search-company-name-bold"]}>netflix</span>roulette</span>
                    <button className={styles["header-search-add-movie-button"]} onClick={() => router.push('/new')}>+ Add Movie</button>
                </div>

                <div className={styles["header-search-search"]}>
                    <SearchForm
                        searchText={searchText}
                    // searchCallback={props.searchCallback}
                    />
                </div>
            </div>
        </div>
    </>
}