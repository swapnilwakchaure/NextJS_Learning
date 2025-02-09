import ReviewNotFound from "./not-found";

interface ReviewDetailsProps {
    params: {
        productId: string;
        reviewId: string;
    }
}

export default async function ReviewDetails({ params }: ReviewDetailsProps) {
    const { reviewId, productId } = await params;

    if (Number(reviewId) > 1000) {
        <ReviewNotFound />
    }
    return (
        <h1>Review of {reviewId} for product {productId}</h1>
    )
}