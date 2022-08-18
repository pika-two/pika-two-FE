import React from 'react'
import CompanyListItem from '../ui/CompanyListItem'
import SuggestListItem from '../ui/SuggestListItem'

export default function SuggestList({suggests}) {
  return (
    <div style={{
      display : 'grid',
      gridTemplateColumns : 'auto',
      gap : '1em'
    }}>
        {suggests.map(suggest => <SuggestListItem  key={suggest.code} suggest={suggest}/>)}
    </div>
  )
}