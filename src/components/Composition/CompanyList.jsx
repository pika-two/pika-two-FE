import React from 'react'
import CompanyListItem from '../ui/CompanyListItem'

export default function CompanyList({companys}) {
  return (
    <div style={{
      display : 'grid',
      gridTemplateColumns : 'auto',
      gap : '1em'
    }}>
        {companys.map(company=> <CompanyListItem key={company.company_id} company={company}/>)}
    </div>
  )
}
