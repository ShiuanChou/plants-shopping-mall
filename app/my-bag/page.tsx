import styles from '@/scss/_shoppingBag.module.scss';
import { productsData } from '@/public/products';
import { ProductsInterface } from '@/types/product.interface';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function MyBag() {
    return (
        <>
            <section className={styles.container}>
                <h2>我的購物袋 (20)</h2>
                <div className={styles.bagList}>
                    {productsData.map((data: ProductsInterface, index: number) => {
                        return (
                            <article className={styles.item} key={index}>
                                <div className={styles.bagImg}>
                                    <img src={`/images/${data.name}.png`} alt={data.name} />
                                </div>
                                <div className={styles.info}>
                                    <h3>{data.name}</h3>
                                    <p className={styles.price}>NT$ {data.price}</p>
                                </div>
                                <div className={styles.function}>
                                    <div className={styles.count}>
                                        <AiOutlineMinus className={styles.decrement} />
                                        <span className={styles.num}>1</span>
                                        <AiOutlinePlus className={styles.increment} />
                                    </div>
                                    <div className={styles.remove}>移除</div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
            <div className={styles.total}>總金額 NT$ 1000</div>
        </>
    )
}