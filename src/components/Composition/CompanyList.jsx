import React from 'react'
import CompanyListItem from '../ui/CompanyListItem'

export default function CompanyList() {
  return (
    <div style={{
      display : 'grid',
      gridTemplateColumns : 'auto',
      gap : '1em'
    }}>
        <CompanyListItem/>
        <CompanyListItem/>
        <CompanyListItem/>
        <CompanyListItem/>
        <CompanyListItem/>
        <CompanyListItem/>
    </div>
  )
}
