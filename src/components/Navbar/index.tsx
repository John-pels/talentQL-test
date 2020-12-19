import { Small, Large } from '@components/responsive'
import { useState } from 'react'
import {
  NavbarContainer,
  NavbarLabel,
  NavbarToggler,
  Toggler,
  NavbarFlex,
  NavbarFlexGrow,
  NavbarFlexItem,
  NavbarFlexItemHead,
  NavbarItemHeading,
  AngleDownIcon,
  Menu,
  List,
  ListItem,
} from './style'
import Link from 'next/link'
import images from '@assets/images'
import Search from '@components/Search'
import { PlusIcon, MinusIcon } from '@components/misc'

const { MtnLogo } = images
const Navbar = () => {
  const [isOpen, _setIsOpen] = useState<boolean>(false)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const handleToggle = () => {
    const newState = !isOpen
    _setIsOpen(newState)
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }
  return (
    <NavbarContainer>
      <NavbarLabel isOpen={isOpen}>
        <Link href="/">
          <a>
            <Large as="img" src={MtnLogo} />
            <Small as="img" src={MtnLogo} />
          </a>
        </Link>
        <Small>
          <NavbarToggler isOpen={isOpen} onClick={handleToggle}>
            <Toggler isOpen={isOpen}>
              <div className="icon-bar" />
              <div className="icon-bar" />
              <div className="icon-bar" />
            </Toggler>
          </NavbarToggler>
        </Small>
      </NavbarLabel>
      <NavbarFlex isOpen={isOpen}>
        <NavbarFlexGrow>
          <NavbarFlexItem isMenu>
            <NavbarFlexItemHead>
              <NavbarItemHeading>Personal</NavbarItemHeading>
              <AngleDownIcon />
              {isOpen &&
                (!showDropdown ? (
                  <PlusIcon onClick={toggleDropdown} />
                ) : (
                  <MinusIcon onClick={toggleDropdown} />
                ))}
            </NavbarFlexItemHead>

            <Menu className="menu-list" showDropdown={showDropdown}>
              <List>
                <ListItem>Hey!</ListItem>
                <ListItem>You!</ListItem>
              </List>
            </Menu>
          </NavbarFlexItem>
          <NavbarFlexItem>
            <NavbarFlexItemHead>
              <NavbarItemHeading>Business</NavbarItemHeading>
            </NavbarFlexItemHead>
          </NavbarFlexItem>
          <NavbarFlexItem>
            <NavbarFlexItemHead>
              <NavbarItemHeading>Investors</NavbarItemHeading>
              <AngleDownIcon />
              {isOpen &&
                (!showDropdown ? (
                  <PlusIcon onClick={toggleDropdown} />
                ) : (
                  <MinusIcon onClick={toggleDropdown} />
                ))}
            </NavbarFlexItemHead>
          </NavbarFlexItem>
          <NavbarFlexItem>
            <NavbarFlexItemHead>
              <NavbarItemHeading>Foundation</NavbarItemHeading>
            </NavbarFlexItemHead>
          </NavbarFlexItem>
          <NavbarFlexItem>
            <NavbarFlexItemHead>
              <NavbarItemHeading>Events</NavbarItemHeading>
            </NavbarFlexItemHead>
          </NavbarFlexItem>

          <NavbarFlexItem>
            <NavbarFlexItemHead>
              <NavbarItemHeading>Support</NavbarItemHeading>
              <AngleDownIcon />
              {isOpen &&
                (!showDropdown ? (
                  <PlusIcon onClick={toggleDropdown} />
                ) : (
                  <MinusIcon onClick={toggleDropdown} />
                ))}
            </NavbarFlexItemHead>
          </NavbarFlexItem>

          <NavbarFlexItem>
            <NavbarFlexItemHead>
              <NavbarItemHeading>About Us</NavbarItemHeading>
            </NavbarFlexItemHead>
          </NavbarFlexItem>
          <NavbarFlexItem>
            <NavbarFlexItemHead>
              <NavbarItemHeading>Careers</NavbarItemHeading>
            </NavbarFlexItemHead>
          </NavbarFlexItem>

          <NavbarFlexItem>
            <NavbarFlexItemHead>
              <NavbarItemHeading>Contact Us</NavbarItemHeading>
              <AngleDownIcon />
              {isOpen &&
                (!showDropdown ? (
                  <PlusIcon onClick={toggleDropdown} />
                ) : (
                  <MinusIcon onClick={toggleDropdown} />
                ))}
            </NavbarFlexItemHead>
          </NavbarFlexItem>
        </NavbarFlexGrow>
        <Search />
      </NavbarFlex>
    </NavbarContainer>
  )
}

export default Navbar
