import React from 'react'
import Link from 'next/link'

import { type Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  const d = new Date()
  let year = d.getFullYear()

  return (
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <picture>
            <img
              className={classes.logo}
              src="/tbtLogoSmall.png"
              height={50}
              width={148}
              alt="The Beaten Trail"
            />
          </picture>
        </Link>
        <nav className={classes.nav}>
          {/*<ThemeSelector />
           {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
          <Link href="/admin">Admin</Link>
          <Link
            href="https://github.com/payloadcms/payload/tree/main/templates/ecommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </Link>
          <Link href="https://payloadcms.com" target="_blank" rel="noopener noreferrer">
            Payload
          </Link> 
          <Link href="/admin">Admin</Link>*/}
          <Link href="/admin">About</Link>
          <Link href="/admin">Copyright &copy; {year} The Beaten Trail - All Rights Reserved.</Link>
        </nav>
      </Gutter>
    </footer>
  )
}
