import React from 'react'
import Existing from '@components/Existing'
import Layout from 'src/layout'
import Become from '@components/Become'
import Header from '@components/Header'
import { GetServerSidePropsContext } from 'next'
import { getStates } from '@services/request'

export default function Home({ data }) {
  return (
    <Layout title="Home" data={data}>
      <Header />
      <Existing />
      <Become />
    </Layout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const data = await getStates()
    if (!data.length) {
      return
    }
    return {
      props: { data },
    }
  } catch (error) {
    console.log(error)
  }
}
