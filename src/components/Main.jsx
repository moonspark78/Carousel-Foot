import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Main = ({data}) => {
    console.log(data);



  return (

    <div className='carousel'>
        {
            data.map((item,idx) =>{
                return (
                    <img src={item.src} alt={item.alt} key={idx}/>
                )
            })
        }
    </div>
  )
}

