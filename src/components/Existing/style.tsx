import { MarginalContainer } from '@components/container'
import styled from 'styled-components'

export const ExistingContainer = styled(MarginalContainer)`
  display: flex;
  flex-flow: column;
  padding-top: 5rem;
  padding-bottom: 5rem;
`

export const ExisitingHeading = styled.h1`
  line-height: 1;
  font-weight: 500;
  font-size: ${({ theme }) => theme?.fontSize?.custom(24)};

  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(18)};
  }
`

export const Paragraph = styled.p`
  font-weight: 400;
  line-height: 1.3;
  font-size: ${({ theme }) => theme?.fontSize?.normal};

  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(14)};
  }
`
