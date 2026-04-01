import { Review } from "../types/ProductDetailsType";

export const getOverAllRating = (reviews:Review[]) => {
    const overAllRating = reviews?.length ? (reviews?.reduce((acc, review) => acc + review?.rating, 0) / reviews?.length).toFixed(1) : 0;

    return overAllRating;
}