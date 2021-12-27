import './sidebar-language-selector.scss'

import React, { FunctionComponent } from 'react'

interface SidebarLanguageSelectorProps {
  language: string
  translationLink?: string
}

const SidebarLanguageSelector: FunctionComponent<SidebarLanguageSelectorProps> = ({ language, translationLink }) => {
  const deActive = language === 'de'
  const deLink = deActive ? '.' : translationLink ?? '/'
  const enActive = language === 'en'
  const enLink = enActive ? '.' : translationLink ?? '/en/home/'

  return (
    <div className="language-selector">
      <a
        className='selected-language'
        href={deLink}
        data-lang="de"
        role="link"
        aria-label='ariaLanguageSelectorGerman'
        aria-hidden
      >
        DE
      </a>
      <span>/</span>
      <a
        className='selected-language'
        href={enLink}
        data-lang="en"
        role="link"
        aria-label='ariaLanguageSelectorEnglish'
                aria-hidden
      >
        EN
      </a>
    </div>
  )
}
