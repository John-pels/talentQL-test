import images from '@assets/images'
import styled from 'styled-components'

const { Down } = images

export const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  ${({ theme }) => theme?.media?.md} {
    padding: 1rem 1.5rem 2rem 1.5rem;
  }
`

export const SelectInput = styled.select`
  width: 60%;
  vertical-align: middle;
  border: 2px solid ${({ theme }) => theme?.colors?.default};
  color: ${({ theme }) => theme?.colors?.default};
  background: ${({ theme }) => theme?.colors?.secondary};
  background-image: url('${Down}');
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%, right 1.8em top 50%;
  background-size: 20px 20px;
  outline: none;
  padding: 0.8rem;
  border-radius: 30px;
  will-change: box-shadow;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  appearance: none;

  ${({ theme }) => theme?.media?.md} {
    width: 100%;
  }

  option {
    background: ${({ theme }) => theme?.colors?.secondary};
    color: ${({ theme }) => theme?.colors?.default};
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`

export const OptionTag = styled.option``
