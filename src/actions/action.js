import fakeData from "../datas/fake-data"

export const  actionSearchPopUp = ()=>{
    return {
        type: 'TOGGLE_SEARCH_POPUP'
    }
}
export const whereToInputChange =(item)=>{
    return {
        type: 'WHERE_TO_INPUT_CHANGE',
        payload: item
    }
}
export const actionClickWhere = ()=>{
    return {
        type: 'CLICK_WHERE'
    }
}
export const actionClickWhen = ()=>{
    return {
        type: 'CLICK_WHEN'
    }
}
export const actionClickWho = ()=>{
    return {
        type: 'CLICK_WHO'
    }
}
export const actionInputWhereTo = ()=>{
    return {
        type: 'INPUT_WHERE_TO' 
    }
}
export const actionFiveCitiesArr = (fiveCitiesArr)=>{
    return {
        type: 'FIVE_CITIES_ARR',
        payload: fiveCitiesArr
    }
}
export const actionPickLocation = (item)=>{
    return {
        type: 'PICK_LOCATION',
        payload: item
    }
}


export const actionIsTypingSearchPopUpOpen = (item)=>{
    return{
        type:'CLICK_SEARCH_POPUP',
        payload:item
    }
}
export const actionCloseTypingSearchPopUp = ()=>{
    return{
        type:'CLOSE_TYPING_SEARCH_POPUP',
    }
}
export const actionChangeWhere = (name)=>{
    return{
        type:'PICK_WHERE',
        payload:name
    }
}
export const actionResetWhere = ()=>{
    return{
        type:'RESET_WHERE'
    }
}
