import TrashCanIcon from '../ui/icon/TrachCanIcon'
import ApplyCompanyListItem from '../ui/ApplyCompanyListItem'
export default function ApplyCompanyList() {
  return (
    <div style={{
        display : 'grid',
        gridTemplateColumns : 'auto',
        gap : '1em'
      }}>
          <ApplyCompanyListItem right={<TrashCanIcon/>}/>
          <ApplyCompanyListItem right={<TrashCanIcon/>}/>
          <ApplyCompanyListItem right={<TrashCanIcon/>}/>
          <ApplyCompanyListItem right={<TrashCanIcon/>}/>
          <ApplyCompanyListItem right={<TrashCanIcon/>}/>
          <ApplyCompanyListItem right={<TrashCanIcon/>}/>
      </div>
  )
}
