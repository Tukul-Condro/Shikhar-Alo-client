import React from 'react';

const SectuionTitle = ({border,heading}) => {
    return (
        <div className='mx-auto text-center'>
            <p className='border-b-4 border-pink-600'>{border}</p>
            <h1 className='text-5xl font-bold uppercase text-stone-700 pt-8 '>{heading}</h1>
        </div>
    );
};

export default SectuionTitle;