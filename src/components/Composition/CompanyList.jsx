import React from 'react'
import CompanyListItem from '../ui/CompanyListItem'
import { useInternalRouter } from '../../pages/routing'
export default function CompanyList({companys}) {
  const {push} = useInternalRouter();
  return (
    <div style={{
      display : 'grid',
      gridTemplateColumns : 'auto',
      gap : '1em'
    }}>
        {companys.map(company=> <CompanyListItem key={company.company_id} onClick={()=>push(`/company/${company.company_id}`)} company={company}/>)}
    </div>
  )
}
