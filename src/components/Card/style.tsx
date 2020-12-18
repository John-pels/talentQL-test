import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s;
  ${({ theme }) => theme?.media?.md} {
    flex-flow: column;
  }
`

export const CardColumn = styled.div`
  width: 48.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
  box-shadow: ${({ theme }) => theme?.boxShadow?.basic};
  border-radius: 15px;
  padding: 18px 25px;
  background: ${({ theme }) => theme?.colors?.default};

  &:hover {
    box-shadow: ${({ theme }) => theme?.boxShadow?.hover};
  }

  ${({ theme }) => theme?.media?.md} {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
`

export const Text = styled.span`
  font-size: ${({ theme }) => theme?.fontSize?.normal};
  line-height: 2;
  font-weight: 700;
`
export const SubText = styled.span`
  font-size: ${({ theme }) => theme?.fontSize?.custom(12)};
  line-height: 1;
  font-weight: 400;
`

export const IconWrapper = styled.div`
  display: flex;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme?.colors?.primary};

  ${({ theme }) => theme?.media?.md} {
    width: 40px;
    height: 40px;
  }
`
