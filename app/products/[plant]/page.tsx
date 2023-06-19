"use client"

import styles from '@/scss/_detail.module.scss';
import data from '@/app/products/products.json';
import { useEffect, useState } from 'react';
import AddToBagBtn from '@/components/AddToBagBtn';
import { ProductsInterface } from '@/types/product.interface';

export default function PlantDetail({ params }: { params: { plant: string } }) {
    const [detail, setDetail] = useState<ProductsInterface>();

    useEffect(() => {
        const products = data.find(data => data.id.toString() === params.plant)
        setDetail(products);
    }, [params, detail]);

    return (
        <article className={styles.container}>
            <section className={`${styles.wrap} ${styles.plantBg}`}>
                <div className={styles.content}>
                    <img src={`/images/${detail?.name}.png`} alt={detail?.name} />
                </div>
            </section>
            <section className={`${styles.wrap} ${styles.title}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{detail?.name}</h1>
                    <span className={styles.price}>NT$ {detail?.price}</span>
                    <p className={styles.description}>{detail?.description}</p>
                    <div className={styles.foot}>
                        <AddToBagBtn product={detail ? detail : {}} />
                        <span>剩餘數量：{detail?.available}</span>
                    </div>
                </div>
            </section>
        </article>
    )
}