import ProductList from "@/components/ProductList";
import { productsData } from "@/public/products";

export default function Products() {
    return (
        <main>
            <ProductList displayData={productsData} title={"全部盆栽"} moreBtn={false} />
        </main>
    )
}