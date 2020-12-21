import images from '@assets/images'
import styled from 'styled-components'

const { BgBanner } = images

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80vh;
  background: url(${BgBanner}) center center no-repeat;
  background-size: cover;
  position: relative;
  color: ${({ theme }) => theme?.colors?.default};
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    pointer-events: none;
  }

  ${({ theme }) => theme?.media?.md} {
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
`

export const HeroText = styled.h1`
  font-size: ${({ theme }) => theme?.fontSize?.custom(72)};
  line-height: 10px;
  font-weight: bold;
  z-index: 1;
  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(35)};
  }
`

export const SubHeroText = styled.span`
  font-size: ${({ theme }) => theme?.fontSize?.custom(24)};
  z-index: 1;

  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(16)};
  }
`

export const Button = styled.button`
  background: ${({ theme }) => theme?.colors?.primary};
  padding: 0.6rem 1.2rem;
  border-radius: 24px;
  font-size: ${({ theme }) => theme?.fontSize?.custom(14)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 20px;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
    background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme?.colors?.hover};
  }
`

export const SvgWrapper = styled.div`
  overflow: hidden;
  vertical-align: middle;
  box-sizing: border-box;
  fill: #fff;
  color: #fff;

  :not(svg) {
    transform-origin: 0px 0px;
  }

  img {
    width: 100%;
    z-index: 3;
  }
`
