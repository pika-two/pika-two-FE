import MyPageCenterBox from '../components/Composition/MyPageCenterBox'
import RightOnlyHeader from '../components/Composition/RightOnlyHeader'
import MyPageSalary from '../components/Composition/MyPageSalary'
import FixedBottomButton from '../components/ui/FixedBottomButton'
import Button from '../components/ui/Button'
import HomeIcon from '../components/ui/icon/HomeIcon'
import { useInternalRouter } from './routing'
import starfriends from '../assets/starfriends.png'
import { useState,useEffect } from 'react'
import userService from '../apis/user'
export default function MyPage() {
  const {push} = useInternalRouter();
  const [mySalary, setMySalary] = useState(0)
  const [userName , setUserName] = useState('')
  useEffect(()=>{
    const getMyUserInfo = async function(){
      // TODO USERID
      const {data, status} = await userService.getMyUserInfo(1);
      const {data: response_data} = data
      const {nickname, prev_wage} = response_data;
      setMySalary(()=>parseInt(prev_wage/10000))
      setUserName(()=>nickname);
    }
    getMyUserInfo();
  },[])
  return (
    <div>
        <RightOnlyHeader title="마이페이지"   right={<HomeIcon onClick={()=>push('/mainPage')}/>}></RightOnlyHeader>
        <MyPageCenterBox>
            <Button onClick={()=>push('/calender')}>일정관리 보기</Button>
            <Button onClick={()=>push('/applyCompanyList')} >지원현황 보기</Button>
            <Button onClick={()=>push('/bookmark')}>찜한 기업 보기</Button>
            <Button onClick={()=>push('/reviewPage')}>리뷰 작성하기</Button>
        </MyPageCenterBox>
        <MyPageSalary>
            <p style = {{
              fontFamily : "Six",
              fontSize : "30px", textAlign : "center", lineHeight: "10px", margin: "0"
            }}>직전년도 나의 연봉</p>
            <p style = {{
              fontFamily : "one",
              fontSize : "20px",
              textAlign : "center"
            }}>2021년 {userName}님의 급여:</p>
            <p style = {{
              fontFamily : "four",
              fontSize : "30px",
              textAlign : "center",
              background : "yellow",
              margin : " 0, 40px"
            }}>{mySalary}만원 </p> 
        </MyPageSalary>
        <div style = {{display: "flex", justifyContent: "center", margin: "10px"}}>  
            <img  
            
            width= "90%" height="auto" src={starfriends} alt="" />
        </div>
        <div 
        style = {{
          display: "flex", justifyContent: "center", marginTop: "60px"
        }}>
        <Button onClick={() => window.open( "https://obank.kbstar.com/")} background = "#fffcab" style={{bottom : '80px'}}>KB 국민은행 급여계좌 만들기</Button></div>
        <FixedBottomButton onClick={()=>push('/suggestList')} background = "#fffcab">연봉별 금융상품 추천 받기</FixedBottomButton>
    </div>
  )
}
