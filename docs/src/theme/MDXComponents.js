import MDXComponents from '@theme-original/MDXComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default {
  ...MDXComponents,
  icon: FontAwesomeIcon,
}
