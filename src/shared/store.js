import { atom,selector } from "recoil";


const localStorageEffect = (key) => ({setSelf,onSet}) => {
    const savedValue = localStorage.getItem(key)
    if(savedValue !== null){
        setSelf(JSON.parse(savedValue));
    }
    onSet((newValue,_,isReset)=>{
        isReset?localStorage.removeItem(key):localStorage.setItem(key,JSON.stringify(newValue))
    })
}
export const userInfoStore = atom({
    key: 'userInfo',
    default: {},
    effects : [localStorageEffect('pikaTwo')]
  });
export const userisLogined = selector({
    key : 'isLogined',
    get : ({get})=> {
        const userInfo = get(userInfoStore)
        return Object.keys(userInfo) !== 0;
    }
})
