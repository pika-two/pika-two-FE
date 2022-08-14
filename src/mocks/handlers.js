import {rest} from 'msw'
import baseURL from '../constants/BASE_URL'
import { dummyAccountList } from '../constants/dummyData'

export function handlers(){

    return [
        rest.post(baseURL+'api/user/signup',singup),
        rest.get(baseURL+'api/mydata/:user_id/account',accountList)
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
    if(user_id !== null){
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

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }