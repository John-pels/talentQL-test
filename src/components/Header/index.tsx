import { MarginalContainer } from '@components/container'
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { HeaderContainer, HeroText, SubHeroText, TextWrapper, Button } from './style'
const Header = () => {
  return (
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
  )
}

export default Header
