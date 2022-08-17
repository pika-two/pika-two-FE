import React from 'react'
import TrashCanIcon from '../ui/icon/TrashCanIcon'
import BookMarkListItem from '../ui/BookMarkListItem'
import { useInternalRouter } from '../../pages/routing'
export default function BookMarkList({bookmarks,handleDelete}) {
  const {push} = useInternalRouter();
  return (
        <div style={{
      display : 'grid',
      gridTemplateColumns : 'auto',
      gap : '1em'
    }}>
        {bookmarks?.map((bookmark)=><BookMarkListItem onClick={()=>push(`/company/${bookmark.id}`)} key={bookmark.fav_company_id} bookmark={bookmark} right={<TrashCanIcon onClick={e=>handleDelete(e,bookmark.fav_company_id)}/>}/>)}
    </div>
  )
}
