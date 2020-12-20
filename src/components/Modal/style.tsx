import styled from 'styled-components'

export const ModalBackground = styled.div<{
  show?: boolean
  animation?: boolean
}>`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  transform: translateY(${({ show }: any) => (show ? '0' : '-100vh')});
  ${({ animation, show }) =>
    animation &&
    `
  transition-delay: ${show} => show ? "0" : "0.2s"; 
  `}
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div<{
  show?: boolean
  bgColor?: string
  width?: string
  animation?: boolean
  padding?: boolean
  lightbox?: boolean
}>`
  background: ${({ bgColor }) => (bgColor ? bgColor : '#fff')};
  border-radius: 10px;
  padding: ${({ padding }) => (padding ? '3rem' : 0)};
  height: 80vh;
  @media (max-width: 768px) {
    padding: ${({ padding }) => (padding ? '3rem 2rem' : 0)};
    border-radius: 0;
    max-height: none;
    height: ${({ lightbox }) => !lightbox && '100%'};
  }
  transform: translateY(${({ show }) => (show ? '0' : '-100vh')});
  ${({ animation }) =>
    animation &&
    `
    transition: transform 0.3s;
    `}
  width: ${({ width }) => (width ? width : '25rem')};
  position: relative;
  @media (max-width: 500px) {
    min-width: 100%;
  }
  .flex-plan-mobile {
    overflow-y: scroll;
    @media (max-width: 360px) {
      height: 50vh;
      height: 100%;
    }
    height: 100%;
  }
`

export const ModalTextContent = styled.div`
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  color: #5d6189;
  height: 100%;
`

export const ModalClose = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  width: 20px;
`

export const Scrollable = styled.div`
  overflow-y: auto;
  max-height: 100%;
`
