import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import Filter from "../Components/Filter";
import { getshoeFailure, getshoeRequest, getshoeSuccess } from '../Redux/AppReducer/action';
import axios from 'axios';

const Shoes = () => {
  const dispatch = useDispatch()
  const allshoes = useSelector((state) => state.shoes)


   const getdata = ()=>{
        dispatch(getshoeRequest());
        axios
        .get("/shoes")
        .then((r)=> dispatch(getshoeSuccess(r.data)))
        .catch((e)=>dispatch(getshoeFailure(e)))
   }

   useEffect(()=>{
    getdata()
   },[])

   console.log(allshoes);

  return (
    <div>
      <Filter />
      <div>
        {/* Map through the shoes list here using ShoeCard Component */}
      </div>
    </div>
  );
};

export default Shoes;
