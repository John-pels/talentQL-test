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

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<number>(-1)
  const year = new Date().getFullYear()

  const toggleDropdown = (index: number) => {
    setIsOpen(!isOpen)
    setSelected(index)
  }

  const data = [
    {
      heading: 'Personal',

      listItem: ['Services', 'Data', 'Devices', 'Getting Started', 'myMTN App'],
      list: true,
    },
    {
      heading: 'Business',
      toggle: '',
      list: false,
    },

    {
      heading: 'Investors',

      listItem: ['More in Investors', 'Shareholders', 'Financial Reporting', 'Announcements'],
      list: true,
    },
    {
      heading: 'Foundation',

      list: false,
    },
    {
      heading: 'Events',
      list: false,
    },
    {
      heading: 'Support',
      listItem: ['Help Center', 'Community'],
      list: true,
    },
    {
      heading: 'About Us',
      list: false,
    },
    {
      heading: 'Career',
      toggle: '',
      list: false,
    },
    {
      heading: 'Contact Us',

      listItem: ['MTN Supplier'],
      list: true,
    },
  ]
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
