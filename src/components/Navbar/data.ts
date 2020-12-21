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
        subMenu: [
          'Tarrif Plans',
          'Roaming',
          'International Rates',
          'Country Code Prefix',
          'Recharge',
          'SIM Services',
        ],
      },
      {
        link: 'Data',
        icon: true,
        subMenu: ['Data Plans', 'Social Media Bundles', 'Video Streaming Pack', 'Data Gifting'],
      },
      {
        link: 'Devices',
        icon: true,
        subMenu: ['Device Financing', '4G MiFi', 'Smart Phone Feature'],
      },
      {
        link: 'Getting Started',
        icon: true,
        subMenu: ['Coverage Map', 'Find a Store', 'How-to guides', 'Internet settings'],
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
