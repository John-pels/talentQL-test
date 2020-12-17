import styled from 'styled-components'

export const MarginalContainer = styled.div`
  padding: 1rem 7rem;

  ${({ theme }) => theme?.media?.md} {
    padding: 1rem 2rem;
  }
`
