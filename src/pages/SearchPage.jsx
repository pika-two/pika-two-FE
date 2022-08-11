import { useParams } from "react-router-dom"
export default function SearchPage() {
    let { keyword } = useParams()
  return (
    <div>SearchPage {keyword}</div>
  )
}
