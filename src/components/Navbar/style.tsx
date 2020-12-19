import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'
import { GridAnimation } from './animation'

export const NavbarContainer = styled.section`
  display: flex;
  background: ${({ theme }) => theme?.colors?.primary};
  padding: 1rem;
  ${({ theme }) => theme?.media?.lg} {
    flex-direction: column;
  }
`

export const NavbarLabel = styled.div<{ isOpen: boolean }>`
  transition: 0.2s;
  ${({ theme }) => theme?.media?.lg} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .small {
    display: none;
  }
  .large {
    display: block;
  }
  ${({ theme }) => theme?.media?.lg} {
    .small {
      display: block;
    }
    .large {
      display: none;
    }
  }

  z-index: 22;
  width: 80px;

  img {
    width: 50%;
    height: 100%;

    ${({ theme }) => theme?.media?.lg} {
      width: 25%;
    }
  }
`

export const NavbarToggler = styled.div<{ isOpen: boolean }>`
  width: 22px;
  height: 22px;
  transition: 0.3s;
  cursor: pointer;
  transform: ${({ isOpen }) => isOpen && 'rotate(90deg) perspective(200)'};
`

export const Toggler = styled.div<{ isOpen: boolean }>`
  .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 4px 0 4px 0;
    transition: all 0.5s;
    background-color: ${({ theme }) => theme?.colors?.secondary};

    &:nth-of-type(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
      transform-origin: ${({ isOpen }) => isOpen && '10% 10%'};
    }

    &:nth-of-type(2) {
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
      filter: alpha(opacity= ${({ isOpen }) => (isOpen ? 0 : 100)});
    }
    &:nth-of-type(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
      transform-origin: ${({ isOpen }) => isOpen && '10% 90%'};
    }
  }
`

export const NavbarFlex = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex: 1;
  position: relative;

  ${({ theme }) => theme?.media?.lg} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-height: max-content;
    margin: ${({ isOpen }) => (isOpen ? '1rem 0 10rem 0' : 0)};
    transition: all 0.5s ease-in-out;
    overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    max-height: ${({ isOpen }) => (isOpen ? '50vh' : 0)};
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`

export const NavbarFlexGrow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;

  ${({ theme }) => theme?.media?.lg} {
    background: ${({ theme }) => theme?.colors?.linkBg};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }
`
export const NavbarFlexItem = styled.div<{ isMenu?: boolean }>`
  display: flex;
  position: relative;
  ${({ theme }) => theme?.media?.lg} {
    width: 100%;
  }

  &:hover {
    .menu-list {
      display: ${({ isMenu }) => isMenu && 'flex'};
    }

    ${({ theme }) => theme?.media?.lg} {
      transition: 1.5s;
      position: unset;
      min-width: unset;
    }
  }
`
export const NavbarFlexItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => theme?.media?.lg} {
    width: 100%;
    padding: 0.8rem;
    color: ${({ theme }) => theme?.colors?.default};
    border-bottom: ${({ theme }) => `1px solid ${theme?.colors?.navHead}`};
  }
`
export const NavbarItemHeading = styled.span`
  font-size: ${({ theme }) => theme?.fontSize?.custom(14)};
`
export const AngleDownIcon = styled(FaAngleDown)`
  margin-left: 0.3rem;

  ${({ theme }) => theme?.media?.lg} {
    display: none;
  }
`

export const Menu = styled.div<{ showDropdown?: boolean }>`
  display: none;
  flex-flow: column;
  transition: 0.3s;
  animation: ${GridAnimation} 1s 1 cubic-bezier(0, 1, 0.5, 1);
  color: ${({ theme }) => theme?.colors?.default};
  overflow-y: hidden;
  position: absolute;
  top: 120%;
  background: ${({ theme }) => theme?.colors?.linkBg};
  z-index: 10;
  min-width: 300px;
  transition: 0.1s;
  border-radius: 20px;

  ${({ theme }) => theme?.media?.lg} {
    width: 100%;
    display: flex;
    animation: none;
    overflow: ${({ showDropdown }) => (showDropdown ? 'visible' : 'hidden')};
    opacity: ${({ showDropdown }) => (showDropdown ? 1 : 0)};
    max-height: ${({ showDropdown }) => (showDropdown ? '50vh' : 0)};
    background: ${({ theme }) => theme?.colors?.linkHover};
    border-radius: 0;
    /* z-index: unset; */
    /* position: unset; */
  }
`

export const List = styled.ul`
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  transition: all 0.5s ease-in-out;
`
export const ListItem = styled.li`
  line-height: 30px;
  border-bottom: 1px solid #707070;
  padding: 0.5rem 0 0.5rem 1.5rem;
  cursor: pointer;
  ${({ theme }) => theme?.media?.md} {
    /* padding: 0.5rem 2rem; */
  }
`
