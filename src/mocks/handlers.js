import {rest} from 'msw'
import baseURL from '../constants/BASE_URL'
import { dummyAccountList, dummyIncomeList, dummyJobposts, dummySearchList, dummyApplyCompanyList, dummyBookmarkList } from '../constants/dummyData'

export function handlers(){

    return [
        rest.post(baseURL+'api/user/signup',singup),
        rest.get(baseURL+'api/mydata/:user_id/account',accountList),
        rest.post(baseURL+'api/mydata/:user_id/account',accountRegister),
        rest.get(baseURL+'api/mydata/:user_id/deposit',depositList),
        rest.post(baseURL+'api/mydata/:user_id/memos',memoRegister),
        rest.get(baseURL +'api/mydata/:user_id/annual-salary/:year',annualSalary),
        rest.get(baseURL+'api/jobpost',jobPosts),
        rest.get(baseURL + 'api/company',searchResult),
        rest.get(baseURL+'api/user/:user_id/applied-list',getApplyList),
        rest.delete(baseURL + 'api/user/:user_id/applied-list',deleteApplyList),
        rest.get(baseURL+'api/user/:user_id/favor',getBookmarkList),
        rest.delete(baseURL +'api/user/:user_id/favor',deleteBookmarkList)
    ]
} 

const singup = async (req,res,ctx)=>{
    await timeout(2000);
    const data = req.body
    const keysArray = ['birth_yr', 'company_name', 'gender', 'email', 'work_start_at']
    const dataKeys = Object.keys(data);
    const isKeyhave = keysArray.filter(key => dataKeys.indexOf(key) !== -1);
    if (isKeyhave.length !== keysArray.length){
        return res(
            ctx.status(403),
            ctx.json({
                'code' : 403,
                'message' : 'field 값이 부족합니다.'
            })
        )
    }
    return res(
        ctx.status(200),
        ctx.json({
            'code' : 200,
            'user_id' : 1,
        })
    )
}

const accountList = async (req,res,ctx)=>{
    await timeout(2000);
    const user_id = req.params.user_id
    if(!!user_id){
        return res(
            ctx.status(200),
            ctx.json({
                status : 200,
                data : dummyAccountList,
                message : 'message입니다.'
            })
        )
    }
    return res(ctx.status(400))
}

const accountRegister = async (req,res,ctx) =>{
    const data = req.body
    if('account' in data){
        return res(
            ctx.status(200),
            ctx.json({
                status : 200,
                data : [],
                message : 'success'
            })
        )
    }
    return res(ctx.status(400))
}

const depositList = async (req,res,ctx)=>{
    await timeout(2000);
    const user_id = req.params.user_id
    if (!!user_id){
        return res(
            ctx.status(200),
            ctx.json({
                status : 200,
                data : dummyIncomeList,
                message : 'message입니다.'
            })
        )
    }
    return res(ctx.status(400)
    )
}

const memoRegister = async (req, res, ctx)=>{
    await timeout(2000);
    const user_id = req.params.user_id;
    const data = req.body
    if(user_id !== undefined && 'memos' in data){
        return res(
            ctx.status(200),
            ctx.json({
                status : 200,
                data : [],
                message : '성공'
            })
        )
    }
    return res(ctx.status(400))
}

const annualSalary = async (req, res, ctx) => {
    await timeout(2000);
    const user_id = req.params.user_id;
    const year = req.params.year
    if(user_id !== undefined && year !== undefined){
        return res(
            ctx.status(200),
            ctx.json({
                status : 200,
                data : {
                    year : 2022,
                    'company_name' : '국민은행',
                    'annual_salary' : 6000,
                },
                message : '연봉정보'
            })
        )
    }
}

const jobPosts = async (req, res, ctx) =>{
    await timeout(2000);
    return res(
        ctx.status(200),
        ctx.json({
            status : 200,
            data : dummyJobposts,
            message : '공고리스트'
        })
    )
}

const searchResult = async (req,res,ctx) => {
    await timeout(2000);
    const keyword = req.url.searchParams.get('keyword')
    console.log(keyword)
    return res(
        ctx.status(200),
        ctx.json({
            status : 200,
            data : dummySearchList,
            message : '검색 결과'
        })
    )
}

const getApplyList = async (req,res,ctx) => {
    await timeout(2000);
    const userId = req.params.user_id
    if(!!userId){
        return res(
            ctx.status(200),
            ctx.json({
                status : 200,
                data : dummyApplyCompanyList,
                messgae : '지원현황'
            })
        )
    }
}

const deleteApplyList = async (req,res,ctx)=> {
    await timeout(2000);
    const {apply_id } = req.body
    if (!!apply_id){
        return res(
            ctx.status(200),
            ctx.json({
                code : 200,
            })
        )
    }
}

const getBookmarkList = async (req,res,ctx) =>{
    await timeout(2000);
    const user_id = req.params.user_id;
    if(!!user_id){
        return res(
            ctx.status(200),
            ctx.json({
                code : 200,
                data : dummyBookmarkList
            })
        )
    }
}

const deleteBookmarkList = async (req,res,ctx)=> {
    await timeout(2000);
    const {fav_company_id } = req.body
    if (!!fav_company_id){
        return res(
            ctx.status(200),
            ctx.json({
                code : 200,
            })
        )
    }
}
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }