import BothHeader from "../components/Composition/BothHeader"
import { useInternalRouter } from "./routing"
import BackIcon from '../components/ui/icon/BackIcon'
import WhiteHeartIcon from '../components/ui/icon/WhiteHeartIcon'
import RedHeartIcon from '../components/ui/icon/RedHeartIcon'
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import Top02 from "../components/ui/Top/Top02";
import ReviewList from "../components/Composition/ReviewList";
import Blank from "../components/ui/Blank";
import { useParams } from "react-router-dom";;
import { useState, useEffect } from "react";
import CompanyJobPostList from "../components/Composition/CompanyJobPostList";
import commentService from "../apis/comment";
import { useRecoilState } from "recoil";
import { userInfoStore } from "../shared/store";
import userService from "../apis/user";
import useCompanyInfo from "../hooks/useCompanyInfo";
import Bold from "../components/ui/Bold";
import CenterBox from "../components/Composition/CenterBox";
export default function CompanyInfoPage() {
  const {goBack, push} = useInternalRouter();
  const {id : company_id } =  useParams();
  const [userInfo, setUserInfo] = useRecoilState(userInfoStore);
  const userApplyList = userInfo.applied_list
  const [companyReviews, setCompanyReviews] = useState([]);
  useEffect(()=>{
      const getReview = async ()=>{
        const {data, status} = await commentService.getReview(company_id);
        const {data : response_data} = data;
        setCompanyReviews(()=>response_data);
      }
      getReview();
    },[])
  const isBookmark = ()=>{
    console.log(getCompanyInfo)
    return userInfo.favor_company_list.indexOf(parseInt(company_id)) !== -1
  }
  const handleBookmarkClick = async ()=>{
    const state = isBookmark();
    if(state && confirm('찜을 해제하시겠습니까?')){
      const data = await userService.postBookmark(userInfo.user_id,company_id);
      setUserInfo({...userInfo,favor_company_list : userInfo.favor_company_list.filter(item => parseInt(item) !== parseInt(company_id))})
    } else if (!state && confirm('찜을 하시겠습니까?')){
       const data = await userService.postBookmark(userInfo.user_id,company_id);
       setUserInfo({...userInfo,favor_company_list : [...userInfo.favor_company_list,parseInt(company_id)]})
    }
  }
  const {getCompanyInfo, isLoading :isCompanyLoading, isError : isCompanyError} = useCompanyInfo(company_id);
  const handleApplyJobPost = async (e, post_id)=>{
    const {data , status} = await userService.postApply(userInfo.user_id,{post_id})
    if (status === 200) {
      setUserInfo({...userInfo, applied_list :[...userInfo.applied_list,parseInt(post_id)]})
    }
  }
  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="기업정보"></BothHeader>

        <p style = {{border: "10px solid lightyellow", margin : "0"}}></p>
        
        <h2 style = {{
          textAlign: "center",
          fontFamily: "four"
        }}>{isCompanyLoading?'':getCompanyInfo?.company_name} 채용 공고</h2>
         {isCompanyLoading?'':isBookmark()?<RedHeartIcon onClick={handleBookmarkClick}/>:<WhiteHeartIcon onClick={handleBookmarkClick}/>}

        <div style = {{ margin: "3vh 5vw"
                }}>
        
        </div>
<CompanyJobPostList userPostIdList={userApplyList} onClick={handleApplyJobPost} companyJobPosts={isCompanyLoading?[]:getCompanyInfo.job_posts} />
        <p style = {{border: "20px solid lightyellow"}}></p>
        <h2 style = {{
          textAlign: "center",
          fontFamily: "four",
          marginTop: "30px"
        }}>연봉 정보</h2>

        {/* //TODO high : 챠트 라이브러리 찾고 적용 */}
        {/* //TODO high : 챠트 만들어진 후 챠드 막대 클릭시 연봉정보(SalaryList) 페이지로 이동 */}
        <div style={{
        width : '80vw',
        height : '80vw',
        margin : '0 auto 30px auto',
        backgroundColor : 'white', border: "1px solid black"}}>챠트 들어갈 곳</div>
        
        <p style = {{border: "20px solid lightyellow"}}></p>
        <h2 style = {{
          textAlign: "center",
          fontFamily: "four",
          marginTop: "30px"
        }}>기업 리뷰</h2>
        <ReviewList companyReviews={companyReviews}/>
    </div>
  )
}
