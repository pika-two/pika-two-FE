import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { userInfoStore } from "../shared/store";
export function useInternalRouter(){
    const navigate = useNavigate();
    return useMemo(()=>{
        return {
            goBack(){
                navigate(-1);
            },
            push(path){
                navigate(path);
            }
        }
    },[navigate]);
}

export function PrivateRoute(){
    const userInfo = useRecoilValue(userInfoStore);
    const isLogin = Object.keys(userInfo).length !== 0;
    const isConnect = !!userInfo.isaccountConnect
    return (
        <>

            {
            isLogin?isConnect?<Outlet/>:<Navigate to="/accountList"></Navigate>:
            <Navigate to="/registerPage"></Navigate>}
        </>
    )
}

