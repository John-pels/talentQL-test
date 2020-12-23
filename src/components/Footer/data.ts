import { DataTypes } from './types'

export const FooterLinks: Array<DataTypes> = [
  {
    heading: 'Personal',

    listItem: ['Services', 'Data', 'Devices', 'Getting Started', 'myMTN App'],
    list: true,
  },
  {
    heading: 'Business',

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

    list: false,
  },
  {
    heading: 'Contact Us',

    listItem: ['MTN Supplier'],
    list: true,
  },
]
