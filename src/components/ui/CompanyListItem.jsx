import ImageCard from "./ImageCard"
import Bold from "./Bold"
import CertificatedIcon from "./icon/CertificatedIcon"
import styled from "styled-components"

export default function CompanyListItem({image,company,right,onClick}) {
  return (
    <ImageCard image={image} content={<CompnyInfo onClick={onClick} company={company}/>} right={right}/>
  )
}

const CompnyInfo = function({company,onClick}){
    return (
        <div
        style={{
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            backgroundColor : "#F6F6F6",
            margin : "0 0 5px 20px",
            border: "2px solid black"
        }}
        onClick={onClick}
        >
            <div style={{
              display : 'grid',
              'gridTemplateColumns' : 'auto 45px', textAlign: "center", fontSize: "20px", marginTop: "13px", marginBottom: "-18px"
            }}>{company.company_name}{company.is_certificated?<CertificatedIcon/>:''}</div>
            <div style = {{
              marginLeft:"10px",
              display : 'flex',
              fontFamily : "two", 
              margin: " 0, vh"}}>
                <CompanyDesciprtion>
                  {company.type}
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