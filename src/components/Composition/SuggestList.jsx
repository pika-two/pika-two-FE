import SuggestListItem from '../ui/SuggestListItem'
export default function SuggestList({suggests = []}) {
  const onClick = (e,url)=>{
    window.open(url)
  }
  return (
    <div style={{
      display : 'grid',
      gridTemplateColumns : 'auto',
      gap : '1em'
    }}>
        {suggests.map(suggest => <SuggestListItem  onClick={(e)=>onClick(e,suggest.url)} key={suggest.code} suggest={suggest}/>)}
    </div>
  )
}