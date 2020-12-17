import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import SEO from '@components/seo'
import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.main`
  min-height: 80vh;
`
interface LayoutProps {
  children: React.ReactNode
  title: string
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <Container>
      <SEO title={title} />
      <Navbar />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
