import React from 'react'
import Existing from '@components/Existing'
import Layout from 'src/layout'
import Become from '@components/Become'
import Header from '@components/Header'

export default function Home() {
  return (
    <Layout title="Home">
      <Header />
      <Existing />
      <Become />
    </Layout>
  )
}
