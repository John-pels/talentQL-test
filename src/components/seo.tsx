import Head from 'next/head'
import React from 'react'
import { useTheme } from 'styled-components'

interface SEOProps {
  title: string
}

const SEO = ({ title }: SEOProps) => {
  const theme = useTheme()
  return (
    <Head>
      <title>{title} | F&K Savings</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="robots" content="index,follow" />
      <meta name="og:type" content="website" />
      <meta name="theme-color" content={theme?.colors?.primary} />
      <meta name="description" content="TalentQL test" />
    </Head>
  )
}

export default SEO
