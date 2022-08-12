import React from 'react'
import CompanyListItem from '../ui/CompanyListItem'
import SuggestListItem from '../ui/SuggestListItem'

export default function SuggestList() {
  return (
    <div style={{
      display : 'grid',
      gridTemplateColumns : 'auto',
      gap : '1em'
    }}>
        <SuggestListItem/>
        <SuggestListItem/>
        <SuggestListItem/>
        <SuggestListItem/>
        <SuggestListItem/>
        <SuggestListItem/>
        <SuggestListItem/>
    </div>
  )
}