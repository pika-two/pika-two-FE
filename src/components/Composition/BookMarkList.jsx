import React from 'react'
import TrashCanIcon from '../ui/icon/TrachCanIcon'
import BookMarkListItem from '../ui/BookMarkListItem'
export default function BookMarkList({bookmarks}) {
  return (
        <div style={{
      display : 'grid',
      gridTemplateColumns : 'auto',
      gap : '1em'
    }}>
        {bookmarks.map((bookmark)=><BookMarkListItem key={bookmark.fav_company_id} bookmark={bookmark} right={<TrashCanIcon/>}/>)}
    </div>
  )
}
