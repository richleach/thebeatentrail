'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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

      <Link href="https://www.facebook.com/TheBeatenTrailLLC" target="_blank">
        <Image src="/Facebook.png" width={32} height={32} alt="Check us out on Facebook" />
      </Link>

      <Link href="https://www.youtube.com/channel/UCnIyytMWGt41WZAc6QocKcQ" target="_blank">
        <Image src="/Youtube.png" width={32} height={32} alt="Check us out on Youtube" />
      </Link>

      <Link href="https://www.tiktok.com/@thebeatentrail" target="_blank">
        <Image src="/Tiktok.png" width={32} height={32} alt="Check us out on Tiktok" />
      </Link>

      <Link href="https://www.instagram.com/thebeatentrail/" target="_blank">
        <Image src="/Instagram.png" width={32} height={32} alt="Check us out on Instagram" />
      </Link>

      <Link href="https://www.twitter.com/@trailbeaten" target="_blank">
        <Image src="/Twitter.png" width={32} height={32} alt="Check us out on X" />
      </Link>
    </nav>
  )
}
