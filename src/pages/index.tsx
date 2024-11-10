import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import LayoutMain from '@/layouts/Main'
import type { NextPageWithLayout } from '@/pages/_app'

const ViewHome = dynamic(() => import('@/views/Home'), {
  suspense: true,
  ssr: true,
})

const Home: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewHome />
    </Suspense>
  )
}

Home.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>
}

export default Home
