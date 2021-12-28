import './sidebar-language-selector.scss'

import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

interface SidebarLanguageSelectorProps {
  language: string
  translationLink?: string
}

const SidebarLanguageSelector: FunctionComponent<
  SidebarLanguageSelectorProps
> = ({ language, translationLink }) => {
  const deActive = language === 'de'
  const deLink = deActive ? '.' : translationLink ?? '/'
  const enActive = language === 'en'
  const enLink = enActive ? '.' : translationLink ?? '/en/home/'

  return (
    <div className='language-selector'>
      <a
        className='selected-language'
        href={deLink}
        data-lang='de'
        role='link'
        aria-label='ariaLanguageSelectorGerman'
        aria-hidden
      >
        DE
      </a>
      <span>/</span>
      <a
        className='selected-language'
        href={enLink}
        data-lang='en'
        role='link'
        aria-label='ariaLanguageSelectorEnglish'
        aria-hidden
      >
        EN
      </a>
    </div>
  )
}

export const query = graphql`
  query HeaderQuery($id: Int, $whatElse: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default SidebarLanguageSelector
