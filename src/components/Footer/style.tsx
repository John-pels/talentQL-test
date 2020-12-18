import styled from 'styled-components'

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
  }

  &:nth-child(1) {
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
  }
  &:nth-of-type(8) {
    grid-area: 2 / 3 / 3 / 4;
  }
  &:nth-of-type(9) {
    grid-area: 1 / 6 / 2 / 7;
  }
`
export const GridItem = styled.div`
  border: 2px solid red;
`
