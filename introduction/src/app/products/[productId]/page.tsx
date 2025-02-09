export default async function ProductDetails({ params }: {
    params: { productId: string }
}) {
    const { productId } = await params;
    return (
        <h1>Product details of product id {productId}</h1>
    )
}