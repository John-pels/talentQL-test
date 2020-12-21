import { Small, Large } from '@components/responsive'
import { Fragment, useState } from 'react'
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
  AngleRightIcon,
  Menu,
  List,
  ListItem,
  ListItemHead,
  SubMenu,
} from './style'
import Link from 'next/link'
import images from '@assets/images'
import Search from '@components/Search'
import { PlusIcon, MinusIcon } from '@components/misc'
import CustomModal from '@components/Modal'
import { Title } from '@components/Search/style'
import { Links } from './data'

const { MtnLogo } = images
const Navbar = () => {
  const [isOpen, _setIsOpen] = useState<boolean>(false)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [menu, setMenu] = useState<Array<string>>([])
  const [selected, setSelected] = useState<number>(-1)
  const [giphy, setGiphy] = useState<Array<any>>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const handleToggle = () => {
    const newState = !isOpen
    _setIsOpen(newState)
  }

  const toggleDropdown = (index: number) => {
    setShowDropdown(!showDropdown)
    setSelected(index)
  }
  const onHover = (index: number, menu) => {
    setSelected(index)
    setMenu(menu)
  }

  return (
    <Fragment>
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
            {Links.map((link, index) => {
              const { isMenu, lists, heading, listItem } = link
              const _open = isOpen && lists
              const _check = isOpen && selected === index
              const _index = index

              return (
                <NavbarFlexItem isMenu={isMenu} key={index} isSubMenu={selected === index}>
                  <NavbarFlexItemHead>
                    <NavbarItemHeading>{heading}</NavbarItemHeading>
                    {lists && <AngleDownIcon />}
                    {_open &&
                      (showDropdown && _check ? (
                        <MinusIcon onClick={() => toggleDropdown(index)} />
                      ) : (
                        <PlusIcon onClick={() => toggleDropdown(index)} />
                      ))}
                  </NavbarFlexItemHead>

                  {lists && (
                    <>
                      <Menu
                        className="menu-list"
                        showDropdown={_check && showDropdown}
                        isSubMenu={selected === index}
                      >
                        <List>
                          {listItem.map((list, index) => (
                            <ListItem
                              key={index}
                              onMouseMoveCapture={() => onHover(_index, list.subMenu)}
                              onBlur={() => onHover(-1, [])}
                            >
                              <ListItemHead>
                                <span>{list.link}</span> {list.icon && <AngleRightIcon />}
                              </ListItemHead>
                            </ListItem>
                          ))}
                        </List>
                      </Menu>
                      <SubMenu className="sub-menu">
                        {Array.isArray(menu) && menu.length > 0
                          ? menu.map((sub, index) => <ListItem key={index}>{sub}</ListItem>)
                          : null}
                      </SubMenu>
                    </>
                  )}
                </NavbarFlexItem>
              )
            })}
          </NavbarFlexGrow>
          <Search setGiphy={setGiphy} setShowModal={setShowModal} />
        </NavbarFlex>
      </NavbarContainer>
      <CustomModal show={showModal} closeModal={() => setShowModal(false)} width="40rem" padding>
        <Title>Giphy Urls</Title>
        {Array.isArray(giphy) && giphy.length > 0 ? (
          giphy.map((gif, index) => (
            <p key={gif.id}>
              <span>{index + 1} &nbsp;</span>
              {gif.url}
            </p>
          ))
        ) : (
          <p>No Gif!</p>
        )}
      </CustomModal>
    </Fragment>
  )
}

export default Navbar
