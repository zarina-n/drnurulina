import FAQ from '@/components/custom/faq/faq'
import Hero from '@/components/custom/hero-section/hero'
import ListOfTests from '@/components/custom/list-of-test/list-of-tests'
// import Reviews from '@/components/custom/reviews/reviews'
import Tariffs from '@/components/custom/tariffs/tariffs'
import WorkOrder from '@/components/custom/work-order/work-order'

export default async function Home() {
  return (
    <>
      <Hero />
      <WorkOrder />
      <ListOfTests />
      <Tariffs />
      {/* <Reviews /> */}
      <FAQ />
    </>
  )
}
