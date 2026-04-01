import { Review } from "../types/ProductDetailsType";

export const getRatingDistribution = (reviews: Review[]) => {
  const distribution = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  reviews.forEach(({ rating }) => {
    if (rating >= 1 && rating <= 5) {
      distribution[rating as 1 | 2 | 3 | 4 | 5]++;
    }
  });

  return [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: distribution[star as 1 | 2 | 3 | 4 | 5],
  }));
};