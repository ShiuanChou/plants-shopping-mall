import Landing from '@/components/Landing';
import ProductList from '@/components/ProductList';
import { productsData } from '@/public/products';

export default function Home() {
  const products = productsData.slice(14).sort((a, b) => Number(b.monthlyNews) - Number(a.monthlyNews));

  return (
    <main>
      <Landing />
      <ProductList displayData={products} title='本月精選' moreBtn={true} />
    </main>
  )
}
