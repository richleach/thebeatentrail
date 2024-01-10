'use client'

import React, { Fragment, useState } from 'react'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'
import Videos from './page'

export default function Videos() {
  const [vidData, setVidData] = useState([])
  /* 
  const getVids = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=2&playlistId=UUnIyytMWGt41WZAc6QocKcQ&key=AIzaSyDFdaGd23nu4RpHJekcUk3cnjmpao11Hjk`,
    )
    const jsonData = await response.json()
    setVidData(jsonData)
    console.log(vidData)
  }
  getVids()
 */
  //    console.log(data.items[0].snippet)

  return (
    <Fragment>
      <Gutter>
        <h2>Videos</h2>
      </Gutter>
    </Fragment>
  )
}
