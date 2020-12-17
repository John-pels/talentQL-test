import React from 'react'
import Existing from '@components/Existing'
import Layout from 'src/layout'
import Become from '@components/Become'

export default function Home() {
  return (
    <Layout title="Home">
      <Existing />
      <Become />
    </Layout>
  )
}
