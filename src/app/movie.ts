import { Time } from "@angular/common";
import { Category } from "./category";

export class Movie {
    movieId!: number;
    title!: String;
    synopsys!: Text;
    image!: String;
    createdAt!: Date;
    duration!: Time;
    summary!: Text;
}
