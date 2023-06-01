import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div className='md:w-[49%] lg:w-[33%]'>
                        <Product src='p1.png' showBadge={true} title='New' productName='Basic Crew Neck Tee' productPrice='$44.00' category='Black'></Product>
                    </div>

                ))}
        </>
    );
}

const Paginate = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        console.log((event.selected * itemsPerPage)+itemOffset)
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className='flex flex-wrap md:justify-between gap-y-12'>
                <Items currentItems={currentItems} />
            </div>

            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={10}
                renderOnZeroPageCount={null}
                previousClassName="hidden"
                previousLinkClassName="page-link"
                nextClassName="hidden"
                nextLinkClassName="page-link"
                pageClassName="inline-block px-3.5 py-2 border border-solid border-[#F0F0F0]font-dm-sans font-regular text-sm"

                breakClassName="font-dm-sans font-regular text-base pt-3"
                breakLinkClassName="page-link"
                containerClassName="flex flex-wrap gap-y-3.5 md:gap-y-0 gap-x-3.5 mt-12"
                activeClassName="inline-block px-3.5 py-2 border border-solid border-[#F0F0F0]font-dm-sans font-regular text-sm text-white bg-matt"
            />

            <p className='lg:absolute bottom-0 right-0 font-dm-sans font-regular text-sm text-nav-text lg:mt-0 mt-3'>Products from {itemOffset + 1} to {endOffset} of {items.length}</p>
        </>
    )
}

export default Paginate