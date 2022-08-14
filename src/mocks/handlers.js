import {rest} from 'msw'
import baseURL from '../constants/BASE_URL'


export function handlers(){

    return [
        rest.post(baseURL+'api/user/signup',singup),
        rest.get('/user',null)
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
                'code' : 400,
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

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }