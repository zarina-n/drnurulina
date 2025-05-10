import Hero from '@/components/custom/hero-section/hero'
import ListOfTests from '@/components/custom/list-of-test/list-of-tests'
import WorkOrder from '@/components/custom/work-order/work-order'

// interface Props {
//   params: Promise<{ locale: string }>
// }

export default async function Home() {
  return (
    <>
      <Hero />
      <WorkOrder />
      <ListOfTests />
    </>
  )
}
