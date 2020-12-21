import images from '@assets/images'
import { MarginalContainer } from '@components/container'
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { HeaderContainer, HeroText, SubHeroText, TextWrapper, Button, SvgWrapper } from './style'

const { Path } = images
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Button>
          <AiOutlineLeft /> &nbsp;Back
        </Button>
        <MarginalContainer>
          <TextWrapper>
            <SubHeroText>Contact</SubHeroText>
            <HeroText>MTN Suppliers</HeroText>
          </TextWrapper>
        </MarginalContainer>
      </HeaderContainer>
      {/* <SvgWrapper>
        <img src={Path} alt="path" />
      </SvgWrapper> */}
    </>
  )
}

export default Header
