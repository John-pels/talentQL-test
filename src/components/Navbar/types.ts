export interface LinkTypes {
  heading: string
  isMenu: boolean
  lists: boolean
  listItem?: ListItemTypes[]
}

type ListItemTypes = {
  link: string
  icon?: boolean
  subMenu?: Array<string>
}
