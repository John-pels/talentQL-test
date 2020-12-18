import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme?.colors?.secondary};
  min-height: 80vh;
  color: ${({ theme }) => theme?.colors?.default};
  padding: 5rem 8rem;
  ${({ theme }) => theme?.media?.md} {
    grid: auto auto / 1fr;
    width: 100%;
    padding: 0;
  }
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px 30px;
  ${({ theme }) => theme?.media?.md} {
    grid: auto auto / 1fr;
    width: 100%;
    gap: 0 30px;
  }

  /* &:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }

  &:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }

  &:nth-child(3) {
    grid-area: 1 / 3 / 2 / 4;
  }

  &:nth-child(4) {
    grid-area: 1 / 4 / 2 / 5;
  }

  &:nth-child(5) {
    grid-area: 1 / 5 / 2 / 6;
  }

  &:nth-child(6) {
    grid-area: 2 / 1 / 3 / 2;
  }
  &:nth-of-type(7) {
    grid-area: 2 / 2 / 3 / 3;
    border: 2px solid green;
  }
  &:nth-of-type(8) {
    grid-area: 2 / 3 / 3 / 4;
  }
  &:nth-of-type(9) {
    grid-area: 1 / 6 / 2 / 7;
  } */
`
export const GridItem = styled.div`
  ${({ theme }) => theme?.media?.md} {
    border-bottom: 0.1px solid ${({ theme }) => theme?.colors?.default};
  }
`

export const GridItemHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme?.media?.md} {
    padding: 0 1.5rem;
  }
`

export const Heading = styled.h2`
  transition: all 0.5s ease-in-out;
  color: ${({ theme }) => theme?.colors?.footerH2};
  font-size: ${({ theme }) => theme?.fontSize?.custom(18)};
`
export const PlusIcon = styled(AiOutlinePlus)`
  display: none;
  font-size: ${({ theme }) => theme?.fontSize?.custom(25)};

  ${({ theme }) => theme?.media?.md} {
    display: block;
  }
`

export const MinusIcon = styled(AiOutlineMinus)`
  display: none;
  font-size: ${({ theme }) => theme?.fontSize?.custom(25)};

  ${({ theme }) => theme?.media?.md} {
    display: block;
  }
`

export const BottomWrapper = styled.section`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -4rem 0;
  ${({ theme }) => theme?.media?.md} {
    flex-flow: column;
    width: 100%;
    margin: 0 0;
  }
`

export const Wrap = styled.div`
  width: 100%;
`

export const SocialMediaWrapper = styled.div`
  width: 25%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  font-size: ${({ theme }) => theme?.fontSize?.custom(25)};
  grid-gap: 20px;
  margin: 2rem 0;

  ${({ theme }) => theme?.media?.md} {
    width: 60%;
    padding: 0 1.5rem;
  }
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme?.colors?.footerP};
  font-size: ${({ theme }) => theme?.fontSize?.custom(12)};
  ${({ theme }) => theme?.media?.md} {
    text-align: center;
  }
`

export const List = styled.ul<{ isOpen?: boolean }>`
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  transition: all 0.5s ease-in-out;
  ${({ theme }) => theme?.media?.md} {
    overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    max-height: ${({ isOpen }) => (isOpen ? '50vh' : 0)};
    background: ${({ theme }) => theme?.colors?.linkHover};
  }
`
export const ListItem = styled.li`
  line-height: 30px;

  ${({ theme }) => theme?.media?.md} {
    border-bottom: 1px solid #707070;
    padding: 0.5rem 2rem;
  }
`
