import TrashCanIcon from '../ui/icon/TrashCanIcon'
import ApplyCompanyListItem from '../ui/ApplyCompanyListItem'
import {useInternalRouter} from '../../pages/routing';
export default function ApplyCompanyList({applyCompanys, handleOpen}) {
  const {push} = useInternalRouter();
  return (
    <div style={{
        display : 'grid',
        gridTemplateColumns : 'auto',
        gap : '1em'
      }}>
          {applyCompanys?.map((applyCompany)=><ApplyCompanyListItem key={applyCompany.apply_id}  onClick={()=> {push(`/company/${applyCompany.company_id}`)}}  applyCompanpy={applyCompany} right={<TrashCanIcon onClick={(e)=>handleOpen(e,applyCompany.apply_id)}/>}/>)}
      </div>
  )
}
