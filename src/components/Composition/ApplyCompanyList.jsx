import TrashCanIcon from '../ui/icon/TrachCanIcon'
import ApplyCompanyListItem from '../ui/ApplyCompanyListItem'
import {useInternalRouter} from '../../pages/routing';
export default function ApplyCompanyList({applyCompanys, handleDeleteApplyCompany}) {
  const {push} = useInternalRouter();
  return (
    <div style={{
        display : 'grid',
        gridTemplateColumns : 'auto',
        gap : '1em'
      }}>
          {applyCompanys?.map((applyCompany)=><ApplyCompanyListItem key={applyCompany.apply_id}  onClick={()=> {push(`/company/${applyCompany.company_id}`)}}  applyCompanpy={applyCompany} right={<TrashCanIcon onClick={(e)=>handleDeleteApplyCompany(e,applyCompany.apply_id)}/>}/>)}
      </div>
  )
}
