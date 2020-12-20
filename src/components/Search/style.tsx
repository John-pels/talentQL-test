import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 2rem;

  ${({ theme }) => theme?.media?.lg} {
    width: 100%;
    margin: 1rem 0 0;
  }
`

export const Form = styled.form`
  width: 100%;
`

export const InputGroup = styled.div`
  position: relative;

  ${({ theme }) => theme?.media?.lg} {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  background: ${({ theme }) => theme?.colors?.primary};
  border: 2px solid ${({ theme }) => theme?.colors?.secondary};
  border-radius: 20px;
  padding: 0.4rem 0 0.4rem 1.8rem;
  outline: none;

  ${({ theme }) => theme?.media?.lg} {
    width: 100%;
  }
`

export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: ${({ theme }) => theme?.fontSize.custom(20)};
`

export const Title = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme?.fontSize?.custom(18)};
  color: #000;
`
