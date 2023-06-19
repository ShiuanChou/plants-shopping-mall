import ProductList from "@/components/ProductList";
import data from './products.json';

export default function Products() {
    return (
        <ProductList displayData={data} title={"全部盆栽"} moreBtn={false} />
    )
}