import React from 'react'
import Flex from './Flex'

const SelectDropdown = ({text, category, className, onChange}) => {

    return (
        
        <Flex className='flex items-center gap-x-4'>
            
            <p className='font-regular font-dm-sans text-base text-nav-text'>{text}</p>
            <select id="Featured" className={className} onChange = {onChange}>
                {category.map((selectValue)=>(
                    <option value={selectValue}>{selectValue}</option>
                ))}             
                
            </select>
        </Flex>
    )
}

export default SelectDropdown