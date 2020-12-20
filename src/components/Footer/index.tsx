import React from 'react'
import {
  FooterContainer,
  Grid,
  GridItem,
  GridItemHeading,
  Heading,
  SocialMediaWrapper,
  Paragraph,
  BottomWrapper,
  Wrap,
  List,
  ListItem,
} from './style'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'
import Dropdown from '@components/Dropdown'
import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@components/misc'
import { data } from './data'
const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<number>(-1)
  const year = new Date().getFullYear()

  const toggleDropdown = (index: number) => {
    setIsOpen(!isOpen)
    setSelected(index)
  }

  return (
    <FooterContainer>
      <Grid>
        {data.map((grid, index) => {
          const { heading, listItem, list } = grid
          return (
            <GridItem key={index}>
              <GridItemHeading>
                <Heading>{heading}</Heading>
                {list &&
                  (isOpen && selected === index ? (
                    <MinusIcon onClick={() => toggleDropdown(index)} />
                  ) : (
                    <PlusIcon onClick={() => toggleDropdown(index)} />
                  ))}
              </GridItemHeading>
              {list && (
                <List isOpen={isOpen && selected === index}>
                  {listItem.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </List>
              )}
            </GridItem>
          )
        })}
      </Grid>
      <BottomWrapper>
        <Wrap>
          <SocialMediaWrapper>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </SocialMediaWrapper>
          <Paragraph>&copy; {year} MTN Nigeria Communications PLC, All rights reserved.</Paragraph>
          <Paragraph>Privacy Policy & Data Protection</Paragraph>
        </Wrap>
        <Wrap>
          <Dropdown />
        </Wrap>
      </BottomWrapper>
    </FooterContainer>
  )
}

export default Footer
