import styles from '@/scss/_plantIntro.module.scss';
import { productsData } from '@/public/products';
import { SlSocialInstagram, SlSocialFacebook, SlSocialYoutube } from 'react-icons/sl';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import Link from 'next/link';

export default function Landing() {
    const monthlyNew = productsData.find(plant => plant.monthlyNews === true);

    return (
        <section className={styles.container}>
            <div className={`${styles.wrap} ${styles.title}`}>
                <div className={styles.content}>
                    <h1>日日靜好</h1>
                    <p>室內盆栽專賣店</p>
                </div>
                <div className={styles.social}>
                    <SlSocialFacebook />
                    <SlSocialInstagram />
                    <SlSocialYoutube />
                </div>
            </div>
            <div className={`${styles.wrap} ${styles.plantBg}`}>
                <div className={styles.content}>
                    <img src={`/images/${monthlyNew?.name}.png`} alt={monthlyNew?.name} />
                </div>
            </div>
            <div className={`${styles.wrap} ${styles.subTitle}`}>
                <div className={styles.content}>
                    <span className={styles.news}>本月新品</span>
                    <h2 className={styles.newTitle}>{monthlyNew?.name}</h2>
                    <p>{monthlyNew?.description}</p>
                    <Link href={'/products'}>
                        <span className={styles.shopNow}>立即選購<HiOutlineArrowSmallRight /></span>
                    </Link>
                </div>
            </div>
        </section>
    )
}