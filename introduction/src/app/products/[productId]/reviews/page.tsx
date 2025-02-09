export default async function Reviews({ params }: {
    params: { productId: string }
}) {
    const { productId } = await params;
    return (
        <h1>Reviews of product id {productId}</h1>
    )
}