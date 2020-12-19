import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import styled from 'styled-components'

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
