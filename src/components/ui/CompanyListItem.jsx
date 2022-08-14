import ImageCard from "./ImageCard"
import Bold from "./Bold"
import CertificatedIcon from "./icon/CertificatedIcon"
import styled from "styled-components"

export default function CompanyListItem({image,company,right}) {
  return (
    <ImageCard image={image} content={<CompnyInfo company={company}/>} right={right}/>
  )
}

const CompnyInfo = function({company}){
    return (
        <div
        style={{
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            backgroundColor : "#F6F6F6",
            margin : "0 0 5px 10px",
        }}>
            <Bold style={{
              display : 'grid',
              'gridTemplateColumns' : 'auto 45px'
            }}>{company.company_name}{company.is_certificated?<CertificatedIcon/>:''}</Bold>
            <div style = {{
              display : 'flex',
              fontFamily : "two", 
              margin: " 0, vh"}}>
                <CompanyDesciprtion>
                  {company.type}
                </CompanyDesciprtion>
                <CompanyDesciprtion>
                  {company.description}
                </CompanyDesciprtion>
                <CompanyDesciprtion>
                  {company.category}
                </CompanyDesciprtion>
                </div>
        </div>
    )
}

const CompanyDesciprtion = styled.p`
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
    width : 25vw;
`