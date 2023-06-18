"use client"

import styles from '@/scss/_detail.module.scss';
import { productsData } from '@/public/products';
import { SlSocialInstagram, SlSocialFacebook, SlSocialYoutube } from 'react-icons/sl';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AddToBagBtn from '@/components/AddToBagBtn';

export default function PlantDetail({ params }: { params: { plant: string } }) {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const data = productsData.find(data => data.id.toString() === params.plant)
        setDetail(data ? data : {});
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
                        <AddToBagBtn id={detail?.id} />
                        <span>剩餘數量：{detail?.available}</span>
                    </div>
                </div>
            </section>
        </article>
    )
}