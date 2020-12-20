import { LinkTypes } from './types'

export const Links: LinkTypes[] = [
  {
    heading: 'Personal',
    isMenu: true,
    lists: true,
    listItem: [
      {
        link: 'Services',
        icon: true,
      },
      {
        link: 'Data',
        icon: true,
      },
      {
        link: 'Devices',
        icon: true,
      },
      {
        link: 'Getting Started',
        icon: true,
      },
      {
        link: 'myMTN App',
        icon: false,
      },
    ],
  },
  {
    heading: 'Business',
    isMenu: false,
    lists: false,
  },

  {
    heading: 'Investors',
    isMenu: true,
    lists: true,
    listItem: [
      { link: 'More in Investors', icon: false },
      { link: 'Shareholder' },
      { link: 'Financial Reporting' },
      { link: 'Anouncements' },
    ],
  },
  {
    heading: 'Foundation',
    isMenu: false,
    lists: false,
  },
  {
    heading: 'Events',
    isMenu: false,
    lists: false,
  },
  {
    heading: 'Supports',
    isMenu: true,
    lists: true,
    listItem: [{ link: 'Help Center' }, { link: 'Community' }],
  },
  {
    heading: 'About Us',
    isMenu: false,
    lists: false,
  },
  {
    heading: 'Careers',
    isMenu: false,
    lists: false,
  },
  {
    heading: 'Contact Us',
    isMenu: true,
    lists: true,
    listItem: [{ link: 'MTN Suppliers' }],
  },
]
