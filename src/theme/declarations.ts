/**
 * colors defined here
 */

const colors = {
  primary: '#FCCC34',
  hover: '#f0c63c',
  secondary: '#000000',
  default: '#FFF',
  linkBg: '#1d1d1d',
  linkHover: '#4C4C4C',
  greyBg: '#f2f2f2',
}

/**
 * @param maxWidth max width of media query
 */

const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`
/**
 * List of available media queries
 * To use media query from a styled components, use
 * ```js
 * ${({theme}) => theme.media.desktop}
 * ```
 */

interface Media {
  custom: (maxNumber: number) => string
  sm: (maxNumber: number) => string
  md: string
  lg: string
  xl: string
}

const media: Media = {
  custom: customMediaQuery,
  /**
   * small displays like phones
   */
  sm: customMediaQuery,
  /**
   * medium displays like tablets
   */
  md: customMediaQuery(768),
  /**
   * fairly large displays like small laptops
   */
  lg: customMediaQuery(992),
  /**
   * laptops and others
   */
  xl: customMediaQuery(1024),
}

/**
 *
 * @param val font size as number(unitless)
 */

const customFontSize = (val: number) => `${val}px`

const fontSize = {
  custom: customFontSize,
  small: customFontSize(12),
  /**
   * normal font size
   */
  normal: customFontSize(16),
  /**
   * font size for headers
   */
  heading: customFontSize(20),

  hero: customFontSize(64),

  navlink: customFontSize(14),
}

/**
 * font family
 */
const fontFamily = {
  /**
   * normal font family
   */
  /**
   * font family for headers
   */
}

const border = {
  bottom: '1px solid  #707070',
}

const boxShadow = {
  basic: '0 0 0 2px #f2f2f2',
  hover: '0 10px 20px rgba(0,0,0,.19), 0 6px 6px rgba(0,0,0,.23);',
}
export { colors, media, fontSize, fontFamily, border, boxShadow }
