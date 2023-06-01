import React from 'react'

const InputBox = (props) => {
  return (
    <div className = {props.className}>

        <h2 className='font-dm-sans font-bold text-matt'>{props.title}</h2>
        {props.type == 'textarea' ?
        <input className='font-dm-sans text-nav-text outline-none border-b-2 border-solid border-[#F0F0F0] mt-2 w-full pb-20' type = {props.type} placeholder = {props.text}></input>
        :
        <input className='pb-4 font-dm-sans text-nav-text outline-none border-b-2 border-solid border-[#F0F0F0] mt-2 w-full' type = {props.type} placeholder = {props.text}></input>
        }

    </div>
  )
}

export default InputBox