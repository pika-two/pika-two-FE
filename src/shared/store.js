import { atom,selector } from "recoil";


export const userInfoStore = atom({
    key: 'userInfo',
    default: {},
    effects : [localStorageEffect('pika-two')]
  });
const localStorageEffect = (key) => ({setSelf,onSet}) => {
    const savedValue = localStorage.getItem(key)
    if(savedValue !== null){
        setSelf(JSON.parse(savedValue));
    }
    onSet((newValue,isReset)=>{
        isReset?localStorage.removeItem(key):localStorage.setItem(key,JSON.stringify(newValue))
    })
}
export const userisLogined = selector({
    key : 'isLogined',
    get : ({get})=> {
        const userInfo = get(userInfoStore)
        return Object.keys(userInfo) !== 0;
    }
})
