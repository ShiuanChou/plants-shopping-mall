'use client';

import { ProductsInterface } from "@/types/product.interface";
import styles from "@/scss/_product.module.scss";
import { MouseEvent } from "react";

export default function AddToBagBtn({ id }: { id: ProductsInterface }) {
    const handleBag = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(id)
        e.stopPropagation()
    }

    return (
        <button onClick={(e) => handleBag(e)} className={styles.addToBag}>加入購物袋</button>
    )
}