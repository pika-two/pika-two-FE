import BothHeader from "../components/Composition/BothHeader"
import { useInternalRouter } from "./routing"
import BackIcon from '../components/ui/icon/BackIcon'
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import Top02 from "../components/ui/Top/Top02";
import ReviewList from "../components/Composition/ReviewList";
import Blank from "../components/ui/Blank";
import companyService from '../apis/company'
import { useParams } from "react-router-dom";;
import { useState, useEffect } from "react";
import CompanyJobPostList from "../components/Composition/CompanyJobPostList";
import commentService from "../apis/comment";
import { useRecoilState } from "recoil";
import { userInfoStore } from "../shared/store";
import userService from "../apis/user";
import useCompanyInfo from "../hooks/useCompanyInfo";

export default function CompanyInfoPage() {
  const {goBack, push} = useInternalRouter();
  const {id : company_id } =  useParams()
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
  const {getCompanyInfo, isLoading :isCompanyLoading, isError : isCompanyError} = useCompanyInfo(company_id);
  const handleApplyJobPost = async (e, post_id)=>{
    const {data , status} = await userService.postApply(userInfo.user_id,{post_id})
    if (status === 200) {
      setUserInfo({...userInfo, applied_list :[...userInfo.applied_list,post_id]})
    }
  }
  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="기업정보"></BothHeader>
        <Blank/>
        <Top02>{isCompanyLoading?'':getCompanyInfo?.company_name}</Top02>
        <Top02>공고</Top02>
        <p style={{border : '1px solid'}}></p>
        <div style = {{ margin: "3vh 5vw"
                }}>
        
        </div>
        <CompanyJobPostList userPostIdList={userApplyList} onClick={handleApplyJobPost} companyJobPosts={isCompanyLoading?[]:getCompanyInfo.job_posts} />
        <Top02>연봉</Top02>
        {/* //TODO high : 챠트 라이브러리 찾고 적용 */}
        {/* //TODO high : 챠트 만들어진 후 챠드 막대 클릭시 연봉정보(SalaryList) 페이지로 이동 */}
        <div style={{
        width : '80vw',
        height : '80vw',
        margin : '0 auto 30px auto',
        backgroundColor : '#FFC'}}>챠트 들어갈 곳</div>
        <Top02> 리뷰 </Top02>
        <ReviewList companyReviews={companyReviews}/>
    </div>
  )
}
