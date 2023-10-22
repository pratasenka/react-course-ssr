import styles from "../styles/search-form.module.css"

export default function SearchForm({ searchText }: { searchText: string }) {
    return <>
        <p>FIND YOUR MOVIE</p>
        <div className="searchForm">
            <input
                id='searchFormInput'
                className={styles.searchFormInput}
                placeholder='What do you want to watch?'
                defaultValue={searchText}
            // setSearchText={setSearchText}
            // onEnter={onSubmit}
            />
            <button
                id='searchFormButton'
                className={styles.searchFormButton}
            // onClick={onSubmit}
            >
                SEARCH
            </button>
        </div>
    </>
}