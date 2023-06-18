"use client"

import styles from '@/scss/_product.module.scss'
import { ProductsInterface } from '@/types/product.interface';
import AddToBagBtn from './AddToBagBtn';
import Link from 'next/link';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

function ProductCard({ props }: { props: ProductsInterface }) {
  const router = useRouter();

  const handlePage = () => {
    router.push(`/products/${props.id}`);
  }

  return (
    <article className={styles.productCard} onClick={() => handlePage()}>
      <div className={styles.plantImg}>
        <img src={`/images/${props.name}.png`} alt={props.name} />
      </div>
      <div className={styles.content}>
        {props.monthlyNews && <span className={styles.news}>本月新品</span>}
        <h2>{props.name}</h2>
        <p className={styles.price}>NT$ {props.price}</p>
        <AddToBagBtn id={props} />
      </div>
    </article>
  )
}

export default function ProductList({ displayData, title, moreBtn }:
  { displayData: ProductsInterface[], title: string, moreBtn: boolean }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.mainTitle}>{title}</h2>
      <div className={styles.wrap}>
        {displayData.map((data: ProductsInterface, index: number) => {
          return (
            <ProductCard props={data} key={index} />
          )
        })}
      </div>
      {moreBtn && <Link href={'/products'}><span className={styles.more}>更多日日盆栽<HiOutlineArrowSmallRight /></span></Link>}
    </section>
  )
}