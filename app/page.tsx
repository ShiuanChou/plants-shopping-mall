import Landing from '@/components/Landing';
import ProductList from '@/components/ProductList';
import data from '@/app/products/products.json';


export default function Home() {
  const products = data.slice(14).sort((a: { monthlyNews: any; }, b: { monthlyNews: any; }) => Number(b.monthlyNews) - Number(a.monthlyNews));

  return (
    <>
      <Landing />
      <ProductList displayData={products} title='本月精選' moreBtn={true} />
    </>
  )
}
