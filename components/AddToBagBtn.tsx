'use client';

import { ProductsInterface } from "@/types/product.interface";
import styles from "@/scss/_product.module.scss";

export default function AddToBagBtn({ id }: { id: ProductsInterface }) {
    const handleBag = () => {
        console.log('add to bag')
    }

    return (
        <button onClick={() => handleBag()} className={styles.addToBag}>加入購物袋</button>
    )
}