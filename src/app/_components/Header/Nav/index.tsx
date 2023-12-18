'use client'

import React from 'react'
import Link from 'next/link'
import { FacebookIcon, FacebookShareButton } from 'next-share'

import { Header as HeaderType, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav
      className={[
        classes.nav,
        // fade the nav in on user load to avoid flash of content and layout shift
        // Vercel also does this in their own website header, see https://vercel.com
        user === undefined && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      {user && <Link href="/account">Account</Link>}
      {!user && (
        <React.Fragment>
          <Link href="/login">Login</Link>
          <Link href="/create-account">Create Account</Link>
        </React.Fragment>
      )}
      <Link href="">Videos</Link>
      <span style={{ color: 'lightgrey' }}>|</span>
      <Link href="">Join Us On A Ride</Link>
      <span style={{ color: 'lightgrey' }}>|</span>
      <Link href="">Amazon Favorites</Link>
      <span style={{ color: 'lightgrey' }}>|</span>
      <Link href="">Our Gear</Link>
      <span style={{ color: 'lightgrey' }}>|</span>
      <Link href="">Blog</Link>
      <span style={{ color: 'lightgrey' }}>|</span>
      <Link href="">Partners &amp; Friends</Link>
      <FacebookShareButton
        url={'https://github.com/next-share'}
        quote={'next-share is a social share buttons for your next React apps.'}
        hashtag={'#nextshare'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </nav>
  )
}
