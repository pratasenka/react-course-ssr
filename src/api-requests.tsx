import { request } from "./requests";
import { FindMoviesParams, MovieData } from "./types";
import {
    constructUrl,
    transformDtoToMovieData,
    transformMovieDataToDto,
} from "./utils";

class APIRequest {
    private readonly HOST = "http://localhost:4000";

    constructor() { }

    async updateMovieById(movie: MovieData): Promise<MovieData | null> {
        try {
            const putResult: any = await request.put(
                `${this.HOST}/movies`,
                transformMovieDataToDto(movie)
            );

            return transformDtoToMovieData(putResult);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async addMovie(movie: MovieData): Promise<MovieData | null> {
        try {
            const { id: string, ...addMovieData } =
                transformMovieDataToDto(movie);
            const postResult: any = await request.post(
                `${this.HOST}/movies`,
                addMovieData
            );

            return transformDtoToMovieData(postResult);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findMovieById(movieId: string): Promise<MovieData | null> {
        try {
            const parsedData = await request.get(
                `${this.HOST}/movies/${movieId}`
            );

            return transformDtoToMovieData(parsedData);
        } catch (error: any) {
            if (error.name === "AbortError") {
                console.log("Request Aborted!");
            }
            return null;
        }
    }

    async findMoviesByQuery(
        searchParams: FindMoviesParams
    ): Promise<MovieData[] | null> {
        try {
            const parsedData = await request.get(
                constructUrl(`${this.HOST}/movies`, searchParams)
            );

            return parsedData.data.map((movie: any): MovieData => {
                return transformDtoToMovieData(movie);
            });
        } catch (error: any) {
            if (error.name === "AbortError") {
                console.log("Request Aborted!");
            }
            return null;
        }
    }
}

export const apiRequest = new APIRequest();
