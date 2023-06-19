'use client';

import styles from '@/scss/_shoppingBag.module.scss';
import { BagItemInterface } from '@/types/product.interface';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { decrement, increment, removeFromBag, totalBagItemSelector, totalPriceSelector } from '@/redux/bagSlice';
import ProductList from '@/components/ProductList';
import data from '@/app/products/products.json';

export default function MyBag() {
    const products = data.slice(14).sort((a: { monthlyNews: any; }, b: { monthlyNews: any; }) => Number(b.monthlyNews) - Number(a.monthlyNews));
    const dispatch = useAppDispatch();
    const bagItems = useAppSelector((state) => state.bag.bagItems);
    const totalItem = useAppSelector(totalBagItemSelector);
    const totalPrice = useAppSelector(totalPriceSelector);

    return (
        <>
            {totalItem === 0 ?
                <ProductList displayData={products} title={`我的購物袋 (${totalItem})`} moreBtn={true} /> :
                <section className={styles.container}>
                    <h2>我的購物袋 ({totalItem})</h2>
                    <div className={styles.bagList}>
                        {bagItems.map((data: BagItemInterface, index: number) => {
                            return (
                                <article className={styles.item} key={index}>
                                    <div className={styles.bagImg}>
                                        <img src={`/images/${data.product.name}.png`} alt={data.product.name} />
                                    </div>
                                    <div className={styles.info}>
                                        <h3>{data.product.name}</h3>
                                        <p className={styles.price}>NT$ {data.product.price}</p>
                                    </div>
                                    <div className={styles.function}>
                                        <div className={styles.count}>
                                            <AiOutlineMinus className={styles.decrement} onClick={() => dispatch(decrement(data.product))} />
                                            <span className={styles.num}>{data.count}</span>
                                            <AiOutlinePlus className={styles.increment} onClick={() => dispatch(increment(data.product))} />
                                        </div>
                                        <div className={styles.remove} onClick={() => dispatch(removeFromBag(data.product))}>移除</div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </section>
            }
            <div className={styles.total}>總金額 NT$ {totalPrice}</div>
        </>
    )
}