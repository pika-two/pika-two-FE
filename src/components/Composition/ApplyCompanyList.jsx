import TrashCanIcon from '../ui/icon/TrachCanIcon'
import ApplyCompanyListItem from '../ui/ApplyCompanyListItem'
export default function ApplyCompanyList({applyCompanys, handleDeleteApplyCompany}) {
  return (
    <div style={{
        display : 'grid',
        gridTemplateColumns : 'auto',
        gap : '1em'
      }}>
          {applyCompanys.map((applyCompany)=><ApplyCompanyListItem key={applyCompany.apply_id} applyCompanpy={applyCompany} right={<TrashCanIcon onClick={(e)=>handleDeleteApplyCompany(e,applyCompany.apply_id)}/>}/>)}
      </div>
  )
}
