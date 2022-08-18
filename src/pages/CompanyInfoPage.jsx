import BothHeader from "../components/Composition/BothHeader"
import { useInternalRouter } from "./routing"
import BackIcon from '../components/ui/icon/BackIcon'
import WhiteHeartIcon from '../components/ui/icon/WhiteHeartIcon'
import RedHeartIcon from '../components/ui/icon/RedHeartIcon'
import MyPageIcon from '../components/ui/icon/MyPageIcon'
import ReviewList from "../components/Composition/ReviewList";
import { useParams } from "react-router-dom";;
import { useState, useEffect } from "react";
import CompanyJobPostList from "../components/Composition/CompanyJobPostList";
import commentService from "../apis/comment";
import { useRecoilState } from "recoil";
import { userInfoStore } from "../shared/store";
import userService from "../apis/user";
import useCompanyInfo from "../hooks/useCompanyInfo";
import ChartComponent from "../components/Composition/ChartComponent"
import Modal from "../components/Composition/Modal"
import Bold from "../components/ui/Bold"
import CloseIcon from "../components/ui/icon/CloseIcon"
import Button from "../components/ui/Button"
export default function CompanyInfoPage() {
  const {goBack, push} = useInternalRouter();
  const {id : company_id } =  useParams();
  const [userInfo, setUserInfo] = useRecoilState(userInfoStore);
  const [isBookmarkOpen,setIsBookmarkOpen] = useState(false);
  const [isApplyOpen,setIsApplyOpen] = useState(false);
  const userApplyList = userInfo.applied_list
  const [companyReviews, setCompanyReviews] = useState([]);
  const [submitId,setSubmitId] = useState(-1);
  useEffect(()=>{
      const getReview = async ()=>{
        const {data, status} = await commentService.getReview(company_id);
        const {data : response_data} = data;
        setCompanyReviews(()=>response_data);
      }
      getReview();
    },[])
  const isBookmark = userInfo?.favor_company_list.indexOf(parseInt(company_id)) !== -1
  const handleBookmarkClick = async ()=>{
    const state = isBookmark;
    if(state){
      const data = await userService.postBookmark(userInfo.user_id,company_id);
      setUserInfo({...userInfo,favor_company_list : userInfo.favor_company_list.filter(item => parseInt(item) !== parseInt(company_id))})
    } else if (!state){
       const data = await userService.postBookmark(userInfo.user_id,company_id);
       setUserInfo({...userInfo,favor_company_list : [...userInfo.favor_company_list,parseInt(company_id)]})
    }
    setIsBookmarkOpen(()=>false);
  }
  const {getCompanyInfo, isLoading :isCompanyLoading, isError : isCompanyError} = useCompanyInfo(company_id);
  
  const handleApplyJobPost = async (e)=>{
    const {data , status} = await userService.postApply(userInfo.user_id,{post_id : submitId})
    if (status === 200) {
      setUserInfo({...userInfo, applied_list :[...userInfo.applied_list,parseInt(submitId)]})
    }
    setIsApplyOpen(()=>false)
    setSubmitId(()=>-1);
  }
  const closeBookmarkModal = ()=>{
    setIsBookmarkOpen(()=>false);
  }
  const openBookmarkModal = () =>{
    setIsBookmarkOpen(()=>true);
  }
  const openApplyModal = (e,post_id)=>{
    setIsApplyOpen(()=>true)
    setSubmitId(()=>post_id);
  }
  const claseApplyModal = ()=>{
    setIsApplyOpen(()=>false)
  }
  return (
    <div>
        <BothHeader left={<BackIcon onClick={()=>goBack()}/>}  right={<MyPageIcon onClick={()=>push('/myPage')}  />}  title="기업정보"></BothHeader>

        <p style = {{border: "10px solid lightyellow", margin : "0"}}></p>
        
        <h2 style = {{
          textAlign: "center",
          fontFamily: "four"
        }}>{isCompanyLoading?'':getCompanyInfo?.company_name} 채용 공고</h2>
         {isCompanyLoading?'':isBookmark?<RedHeartIcon onClick={openBookmarkModal}/>:<WhiteHeartIcon onClick={openBookmarkModal}/>}

        <div style = {{ margin: "3vh 5vw"
                }}>
        
        </div>
<CompanyJobPostList userPostIdList={userApplyList} onClick={openApplyModal} companyJobPosts={isCompanyLoading?[]:getCompanyInfo.job_posts} />
        <p style = {{border: "20px solid lightyellow"}}></p>
        <h2 style = {{
          textAlign: "center",
          fontFamily: "four",
          marginTop: "30px"
        }}>연봉 정보</h2>

        <div style={{
        width : '80vw',
        height : '80vw',
        margin : '0 auto 30px auto',
        backgroundColor : 'white'}}><ChartComponent company_id={company_id}  wages={isCompanyLoading?[]:getCompanyInfo.wages}/></div>
        
        <p style = {{border: "20px solid lightyellow"}}></p>
        <h2 style = {{
          textAlign: "center",
          fontFamily: "four",
          marginTop: "30px"
        }}>기업 리뷰</h2>
        <ReviewList companyReviews={companyReviews}/>


        <Modal isOpen={isBookmarkOpen} height="20vh">
            <div style={{
                display : 'grid',
                'gridTemplateColumns' : 'auto 20px'
            }}>{isBookmark?<Bold>찜을 해제하시겠습니까?</Bold>:<Bold>찜을 하시겠습니까?</Bold>}<CloseIcon onClick={closeBookmarkModal} />
            </div>
            <div style={{
                display : 'grid',
                'gridTemplateColumns' : 'auto auto',
                'margin' : '5vh'
            }}>
              
                    <Button onClick={handleBookmarkClick} background='#FC0'>YES</Button> <Button onClick={closeBookmarkModal} background='lightgray'>NO</Button>
            </div>
        </Modal>


        <Modal isOpen={isApplyOpen} height="20vh">
            <div style={{
                display : 'grid',
                'gridTemplateColumns' : 'auto 20px'
            }}><Bold>정말 지원하시겠습니까?</Bold><CloseIcon onClick={claseApplyModal} />
            </div>
            <div style={{
                display : 'grid',
                'gridTemplateColumns' : 'auto auto',
                'margin' : '5vh'
            }}>
              
                    <Button onClick={handleApplyJobPost} background='#FC0'>YES</Button> <Button onClick={claseApplyModal} background='lightgray'>NO</Button>
            </div>
        </Modal>


    </div>
  )
}
