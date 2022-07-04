//Create ActionCreator functions here
import * as types from "./actionTypes"

const getshoeRequest = () =>{
    return { type:types.GET_SHOES_DATA_REQUEST}
}
const getshoeSuccess = (payload) =>{
    return { type:types.GET_SHOES_DATA_SUCCESS,payload}
}
const getshoeFailure = () =>{
    return { type:types.GET_SHOES_DATA_FAILURE}
}


export {getshoeSuccess,getshoeFailure,getshoeRequest};
