import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import LayoutMain from '@/layouts/Main'
import type { NextPageWithLayout } from '@/pages/_app'

const ViewSkill = dynamic(() => import('@/views/Skill'), {
  suspense: true,
  ssr: true,
})

const Skill: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewSkill />
    </Suspense>
  )
}

Skill.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>
}

export default Skill
