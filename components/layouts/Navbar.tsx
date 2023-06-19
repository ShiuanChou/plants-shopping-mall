'use client';

import styles from '@/scss/layouts/_navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { SlBag } from "react-icons/sl";
import Logo from '@/public/images/logo.png';
import { useAppSelector } from '@/redux/store';
import { totalBagItemSelector } from '@/redux/bagSlice';

export default function Navbar() {
    const totalItem = useAppSelector(totalBagItemSelector);

    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <Link href={'/'}><Image src={Logo} alt='logo' width={40} height={40} /></Link>
            </div>
            <div className={styles.function}>
                <Link href={'/products'}>日日盆栽</Link>
                <Link href={'/my-bag'} className={styles.shoppingBag}>
                    <SlBag className={styles.icon} />
                    <span className={styles.count}>{totalItem}</span>
                </Link>
            </div>
        </nav>
    )
}