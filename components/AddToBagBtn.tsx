'use client';

import { ProductsInterface } from "@/types/product.interface";
import styles from "@/scss/_product.module.scss";
import { MouseEvent } from "react";
import { useAppDispatch } from "@/redux/store";
import { addToBag } from "@/redux/bagSlice";

export default function AddToBagBtn({ product }: { product: ProductsInterface }) {
   const dispatch = useAppDispatch();
   
    const handleBag = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        dispatch(addToBag(product));
        alert('加入成功');
        e.stopPropagation();
    }

    return (
        <button onClick={handleBag} className={styles.addToBag}>加入購物袋</button>
    )
}