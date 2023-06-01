import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from './ListItem'

const FooterItems = ({name, link}) => {
    return (
       
        <Link to = {link}>
         <ListItem
            className="font-regular mt-[6px] font-dm text-xs lg:text-sm text-[#6D6D6D]"
            item={name}
        />
        </Link>

    )
}

export default FooterItems