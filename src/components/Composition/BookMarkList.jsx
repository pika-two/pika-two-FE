import React from 'react'
import TrashCanIcon from '../ui/icon/TrachCanIcon'
import BookMarkListItem from '../ui/BookMarkListItem'
export default function BookMarkList() {
  return (
        <div style={{
      display : 'grid',
      gridTemplateColumns : 'auto',
      gap : '1em'
    }}>
        <BookMarkListItem right={<TrashCanIcon/>}/>
        <BookMarkListItem right={<TrashCanIcon/>}/>
        <BookMarkListItem right={<TrashCanIcon/>}/>
        <BookMarkListItem right={<TrashCanIcon/>}/>
        <BookMarkListItem right={<TrashCanIcon/>}/>
        <BookMarkListItem right={<TrashCanIcon/>}/>
    </div>
  )
}
